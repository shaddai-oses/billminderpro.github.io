// // crear un router para guardar todos los get, post delete ect
const usersRouter = require('express').Router( );
const User = require('../models/user');
const bcrypt =require('bcrypt');
const jwt = require('jsonwebtoken');
const nodemailer = require('nodemailer');
const {PAGE_URL}= require('../config');
const { userExtractor } = require('../middleware/auth');

// // para que del frontend se guarden la informacion en el backend 
usersRouter.post('/', async (request, response) => {
    const { name, email, password, rol, businessname, businessemail, cedula, rif, businessRif, phoneNumber, businessNumber, fiscalAddress, deliveryAddress } = request.body;
    // console.log(name, email, password, rol, businessname, businessemail, cedula, rif, businessRif, phoneNumber, businessNumber, fiscalAddress, deliveryAddress);

  // para verificar el correo
  const userExist = await User.findOne({ email });
  if (userExist) {
    return response.status(400).json({error: 'The email is already in use.'})
  }

  // para encriptar la contrasena 
  // saltrounds para el nivel de encriptado es la perfecta y preferida por desarrolladores, rapida y segura

    const saltRounds =10;
    const passwordHash = password &&  await bcrypt.hash(password, saltRounds);
    console.log(passwordHash);
  

  const newUser = new User({
  name,
  email,
  passwordHash: password ? passwordHash: null,
  rol,
  businessemail: rol === 'business user' || 'client' ? businessemail : null,
  businessname: rol ==='business user' || 'client'  ? businessname : null,
  businessNumber: rol === 'client'  ? businessNumber : null,
  phoneNumber: rol === 'client' ? phoneNumber : null,
  cedula: rol === 'client' ? cedula : null,
  rif: rol === 'client' ? rif : null,
  businessRif: rol === 'client' ? businessRif : null,
  fiscalAddress: rol === 'client' ? fiscalAddress : null,
  deliveryAddress: rol === 'client' ? deliveryAddress : null,
  });

// para guardar al nuevo usuario
  const savedUser = await newUser.save();
  console.log(savedUser);

 // para enviar correo para verificar al usuario
  const token = jwt.sign({id: savedUser.id}, process.env.ACCESS_TOKEN_SECRET, {
    // por mayor seguridad se coloca el token para que tenga un tiempo limite al solicitarlo, la mayoria son de 1h
    expiresIn: '1d'
  });

// // permiso especial para que al verificar no tenga que poner siempre la contrasena en gmail app passwords

  // luego instalar nodemailer y copiar este codigo
  const transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 465,
    secure: true, // true for 465, false for other ports
    auth: {
      user: process.env.EMAIL_USER, // generated ethereal user
      pass: process.env.EMAIL_PASS, // generated ethereal password
    },
  });

  await transporter.sendMail({
  from: process.env.EMAIL_USER , // sender address
  to: savedUser.email, // list of receivers
  subject: "User verification.", // Subject line
  html: `<!DOCTYPE html>
  <html>
  <head>
    <meta charset="UTF-8">
    <title>User Verification - BillminderPro</title>
    <style>
      /* General email styles */
      body {
        margin: 0;
        padding: 0;
      }
      .container {
        max-width: 600px;
        margin: 0 auto;
        padding: 20px;
        text-align: center; /* Centra los elementos en el contenedor */
      }
  
      /* Dark blue box styles */
      .blue-box {
        background-color: #13293D;
        color: #FFFFFF;
        padding: 20px;
        margin-bottom: 20px;
        border-radius: 10px; /* Agrega bordes redondeados */
      }
  
      /* Title styles */
      .title {
        color: #13293D;
        font-size: 24px;
        font-weight: bold;
        margin-bottom: 10px;
      }
  
      /* Verification link styles */
      .verification-link {
        display: inline-block;
        background-color: #13293D;
        color: #FFFFFF;
        padding: 10px 20px;
        font-weight: bold;
        text-decoration: none;
        margin-top: 20px;
        border-radius: 10px; /* Agrega bordes redondeados */
      }
    </style>
  </head>
  <body>
    <div class="container">
      <div class="blue-box">
        <p>Hey!! Nice to see you here!</p>
        <p>Click the link below to be redirected to the verification page.</p>
      </div>
      
      <h1 class="title">Verification <span style="color: green;">BillminderPro</span></h1>
  
      <a class="verification-link" href="${PAGE_URL}/verify/${savedUser.id}/${token}" style="color: #FFFFFF;">Verify email.</a>
    </div>
  </body>
  </html>
  
  `, // html body
});

// 201 es creado
return response.status(201).json('User created. Please verify your email.');
});

usersRouter.patch('/:id/:token', async (request, response) => {
  try {
    const token = request.params.token;
    // para verificar el token
    const decodedToken = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET);
    const id = decodedToken.id;
    // para cambiar el verified a true para actualizar el estado del usuario
    await User.findByIdAndUpdate(id, {verified: true});
    return response.sendStatus(200);
    
  } catch (error) {
    console.log(error);
    // Econtrar el email del usuario
    const id =request.params.id;
    const { email } = await User.findById(id);
    // console.log(email);
    // para firmar el nuevo token
    const token = jwt.sign({id: id}, process.env.ACCESS_TOKEN_SECRET, {
      expiresIn: '1d'
    });

    // enviar el email
    const transporter = nodemailer.createTransport({
      host: 'smtp.gmail.com',
      port: 465,
      secure: true, // true for 465, false for other ports
      auth: {
        user: process.env.EMAIL_USER, // generated ethereal user
        pass: process.env.EMAIL_PASS, // generated ethereal password
      },
    });

    await transporter.sendMail({
      from: process.env.EMAIL_USER , // sender address
      to: email, // list of receivers
      subject: "User verification.", // Subject line
      html: `<!DOCTYPE html>
      <html>
      <head>
        <meta charset="UTF-8">
        <title>User Verification - BillminderPro</title>
        <style>
          /* General email styles */
          body {
            margin: 0;
            padding: 0;
          }
          .container {
            max-width: 600px;
            margin: 0 auto;
            padding: 20px;
            text-align: center; /* Centra los elementos en el contenedor */
          }
      
          /* Dark blue box styles */
          .blue-box {
            background-color: #13293D;
            color: #FFFFFF;
            padding: 20px;
            margin-bottom: 20px;
            border-radius: 10px; /* Agrega bordes redondeados */
          }
      
          /* Title styles */
          .title {
            color: #13293D;
            font-size: 24px;
            font-weight: bold;
            margin-bottom: 10px;
          }
      
          /* Verification link styles */
          .verification-link {
            display: inline-block;
            background-color: #13293D;
            color: #FFFFFF;
            padding: 10px 20px;
            font-weight: bold;
            text-decoration: none;
            margin-top: 20px;
            border-radius: 10px; /* Agrega bordes redondeados */
          }
        </style>
      </head>
      <body>
        <div class="container">
          <div class="blue-box">
            <p>Hey!! Nice to see you here!</p>
            <p>Click the link below to be redirected to the verification page.</p>
          </div>
          
          <h1 class="title">Verification <span style="color: green;">BillminderPro</span></h1>
      
          <a class="verification-link" href="${PAGE_URL}/verify/${id}/${token}" style="color: #FFFFFF;">Verify email.</a>
        </div>
      </body>
      </html>
    `
    });
    return response.status(400).json({error: 'The link has expired. A new verification link has been sent to your email.'});
  }
});

usersRouter.get('/',userExtractor,async (request, response) => {
  const user = request.user
  console.log(user);
  return response.status(200).json(user);
});

usersRouter.get('/all', async (request, response) => {
  try {
      const users = await User.find(); // Obtiene todos los productos
      response.json(users); // Envía los productos como respuesta
      console.log(users);
  } catch (error) {
      response.status(500).json({ error: 'An error occurred while fetching products.' });
  }
});

usersRouter.patch('/:id/change-information', userExtractor, async (request, response) => {
    const { id } = request.params;
    const { newPassword, name, email, businessemail } = request.body;

    try {
    // para obtener al usuario que inicio sesion por su id 
    const user = await User.findById(id);

    // Actualiza las propiedades del usuario si se proporcionan
    if (name) {
        user.name = name;
    }
    if (email) {
        user.email = email;
    }

    // si hay una nueva contraseña, la hashea y la actualiza en la base de datos
    if (newPassword) {
        const saltRounds = 10;
        const hashedNewPassword = await bcrypt.hash(newPassword, saltRounds);
        user.passwordHash = hashedNewPassword;
    }
    // para el email de la empresa
    if (businessemail) {
      user.businessemail = businessemail;
  }
    // para guardar la info del nuevo usuario
    await user.save();
    response.status(200).json({ message: 'Información de usuario actualizada exitosamente' });

    } catch (error) {
      console.log(error);
      response.status(500).json({ error: 'Error al actualizar la información de usuario' });
    }
});

// // para exportar de una vez el router
module.exports = usersRouter;