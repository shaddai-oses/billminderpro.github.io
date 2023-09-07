import { createNotification, hideNotification } from "../components/notification.js";
import { createLoader, hideLoader } from "../components/loader.js";

const businessName = document.querySelector('#business-name');
const nameP = document.querySelector('#name-p');
const email = document.querySelector('#email-p');
const businessEmail = document.querySelector('#business-email-p');
const newPass = document.querySelector('#newPassword-p');
const editButton = document.querySelector('#edit-button');
const closeBtn = document.querySelector('#btn-close');


// primer paso extraer los datos del usuario y mostrarlos en los inputs 
 (async ( ) => {    
  const {data} = await axios.get('/api/users');
//   console.log(data.id);
  nameP.innerHTML =`${data.name}`;
  businessName.innerHTML =`${data.businessname}`;
  email.innerHTML =`${data.email}`;
  businessEmail.innerHTML =`${data.businessemail}`;
})();

// Regex validacion
const BUSINESS_REGEX = /^[a-zA-Z0-9\s]{3,}$/;
const NAME_REGEX =  /^[A-Z\u00d1][a-zA-Z-ÿáéíóú\u00f1\u00d1]+(\s*[A-Z\u00d1][a-zA-Z-ÿáéíóú\u00f1\u00d1\s]*)$/;
const EMAIL_REGEX = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;
const PASSWORD_REGEX = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/;

// valiudaciones 
let nameValidation = false;
let businessNameValidation = false;
let businessEmailValidation = false;
let emailValidation = false;
let newPassValidation = false;

const validation = (p, regexValidation, regexMessage, successMessage) => {
    if (p.innerText === '') {
        p.classList.remove('outline-green-500', 'outline-red-500', 'outline-2');
        p.classList.add('focus:outline-none');
    } else if (regexValidation) {
        p.classList.remove('focus:outline-none', 'outline-red-500', 'outline-2');
        p.classList.add('outline-green-500', 'outline-2');
        createNotification(false, successMessage);

        setTimeout(() => {
            hideNotification();
        },  5000);

    } else {
        p.classList.remove('focus:outline-none', 'outline-green-500', 'outline-2');
        p.classList.add('outline-red-500', 'outline-2');
        createNotification(true, regexMessage);
        setTimeout(() => {
            hideNotification();
        }, 5000);
    }
};

nameP.addEventListener('input', e => {
    nameValidation = NAME_REGEX.test(e.target.innerText);
    validation(nameP, nameValidation, 'El nombre y el apellido deben comenzar con letras mayúsculas.', 'Nombre válido.');
});

businessName.addEventListener('input', e => {
    businessNameValidation = BUSINESS_REGEX.test(e.target.value);
    validation(businessName, businessNameValidation, 'El nombre y el apellido deben comenzar con letras mayúsculas.', 'Nombre válido.');
});

email.addEventListener('input', e => {
    console.log(email);
    emailValidation = EMAIL_REGEX.test(email.innerHTML);
    console.log(emailValidation);
    validation(email, emailValidation, 'Por favor, ingrese un correo electrónico válido.', 'Correo electrónico válido.');
});

businessEmail.addEventListener('input', e => {
    businessEmailValidation = EMAIL_REGEX.test(e.target.value);
    validation(businessEmail, businessEmailValidation, 'Por favor, ingrese un correo electrónico válido.', 'Correo electrónico válido.');
});

newPass.addEventListener('input', e => {
    newPassValidation = PASSWORD_REGEX.test(e.target.value);
    validation(newPass, newPassValidation, 'It must have at least 1 capital letter, 1 number and at least 8 characters.', 'Succesfull password');
});

// preguntar al profe por que no se remueven los outlines despues de que el regex esta bueno y se hizo el patch y como hacer en el caso de la contrasena si se envia vacia funciona o no 

const {data} = await axios.get('/api/users');
const id = data.id;

editButton.addEventListener('click', async e => {
    e.preventDefault();
    // console.log(e.target);
    if (!businessName.hasAttribute('contenteditable')) {
        businessName.setAttribute('contenteditable', true);
        nameP.setAttribute('contenteditable', true);
        email.setAttribute('contenteditable', true);
        businessEmail.setAttribute('contenteditable', true);
        newPass.setAttribute('contenteditable', true);
    } else {
        businessName.textContent = businessName.innerText; 
        businessName.setAttribute('contenteditable', false);
        businessName.removeAttribute('contenteditable');

        nameP.textContent = nameP.innerText; 
        nameP.setAttribute('contenteditable', false);
        nameP.removeAttribute('contenteditable');

        email.textContent = email.innerText; 
        email.setAttribute('contenteditable', false);
        email.removeAttribute('contenteditable');

        businessEmail.textContent = businessEmail.innerText; 
        businessEmail.setAttribute('contenteditable', false);
        businessEmail.removeAttribute('contenteditable');

        newPass.textContent = newPass.innerText; 
        newPass.setAttribute('contenteditable', false);
        newPass.removeAttribute('contenteditable');

        await axios.patch(`/api/users/${id}/change-information`, { name: nameP.value, businessname:businessName.value, email: email.value, businessemail: businessEmail.value });
    }
});

// para el boton de cerrar sesion
closeBtn.addEventListener('click', async e => {
    try {
     await axios.get('/api/logout');
     window.location.pathname = '/login'
     window.history.replaceState({}, '', '/login');
    } catch (error) {
     console.log(error);
    }
 });
