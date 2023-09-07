// donde va a vivir la app
// al usar require se extraen módulos
require('dotenv').config();
const express = require('express');
const app = express();
const mongoose = require('mongoose');
// // para poder entrar en los archivos sin importar que sea linux o window
const path = require('path');
const usersRouter = require('./controllers/users');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const morgan = require('morgan');
const {PAGE_URL}= require('./config');
const loginRouter = require('./controllers/login');
const productsRouter = require('./controllers/products');
const logoutRouter = require('./controllers/logout');

console.log(PAGE_URL);

// para conectar con la base de datos de Mongoose
(async () => {
  try {
    mongoose.set('strictQuery', true);
    await mongoose.connect(process.env.MONGO_URI_TEST);
    console.log('Conectando a MongoDB');
  } catch (error) {
    console.log('No se pudo conectar a MongoDB');
    console.log(error);
  }
})();

app.use(cors());
app.use(express.json());
app.use(cookieParser());

// // rutas frontend
app.use('/', express.static(path.resolve('views', 'home')));
app.use('/signup', express.static(path.resolve('views', 'signup')));
app.use('/signup-business', express.static(path.resolve('views', 'signup-empresa')));
app.use('/login', express.static(path.resolve('views', 'login')));
app.use('/billminderpro-home', express.static(path.resolve('views', 'billminderpro-home')));
app.use('/profile', express.static(path.resolve('views', 'profile')));
app.use('/inventary', express.static(path.resolve('views', 'inventary')));
app.use('/register-products', express.static(path.resolve('views', 'register-products')));
app.use('/product-page/:id', express.static(path.resolve('views', 'product-page')));
app.use('/sell', express.static(path.resolve('views', 'sell')));
app.use('/sell-information', express.static(path.resolve('views', 'sell-information')));
app.use('/users-page', express.static(path.resolve('views', 'users-page')));
app.use('/register-newUsers', express.static(path.resolve('views', 'register-clients')));
app.use('/components', express.static(path.resolve('views', 'components')));
app.use('/verify/:id/:token', express.static(path.resolve('views', 'verify')));



app.use(morgan('tiny'));

// // rutas backend
app.use('/api/users/', usersRouter);
app.use('/api/products/', productsRouter);
app.use('/api/login/', loginRouter);
app.use('/api/logout/', logoutRouter);


// // para iniciar el servidor esto se debe exportar para usarlo en otros archivos con el require
module.exports = app;