import { createNotification } from "../components/notification.js";
import { createLoader, hideLoader } from "../components/loader.js";
const form = document.querySelector('#form');
const nameInput = document.querySelector('#name-input');
const businessNameInput = document.querySelector('#business-name-input');
const emailInput = document.querySelector('#email-input');
const phoneInput = document.querySelector('#phone-input');
const idInput = document.querySelector('#id-input');
const rifInput = document.querySelector('#rif-person-input');
const businessRifInput = document.querySelector('#business-rif-input');
const businessNumberInput = document.querySelector('#business-phone-input');
const fiscalAddressInput = document.querySelector('#fiscal-address-input');
const deliveryAddressInput = document.querySelector('#delivery-address-input');
const formBtn = document.querySelector('#form-btn');
const notification = document.querySelector('#notification');

//validaciones de regex
const EMAIL_REGEX = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;
// nombre
const NAME_REGEX =  /^[A-Z\u00d1][a-zA-Z-ÿáéíóú\u00f1\u00d1]+(\s*[A-Z\u00d1][a-zA-Z-ÿáéíóú\u00f1\u00d1\s]*)$/;
// Número de teléfono venezolano (validos: 0412, 0414, 0416, 0424, 0426)
const PHONE_REGEX = /^(0412|0414|0416|0424|0426)-\d{7}$/;
// Cédula venezolana
const ID_REGEX = /^\d{7,8}$/;
// RIF personal venezolano V, E, J, P, G
const RIF_REGEX = /^[VEJPG]-\d{9}$/;
// Número de teléfono de empresa venezolana  0212, 0234, 0235, 0238, 0243, 0244, 0245, 0246, 0251, 0252.
const BUSINESS_PHONE_REGEX = /^(0212|0234|0235|0238|0243|0244|0245|0246|0251|0252)-\d{7}$/;
// Dirección (permitiendo caracteres alfanuméricos, espacios, comas, puntos y guiones)
const ADDRESS_REGEX = /^(?:\s*\S+\s*){7,50}$/;


// valiudaciones 
let nameValidation = false;
let businessNameValidation = false;
let emailValidation = false;
let phoneValidation = false;
let idValidation = false;
let rifValidation = false;
let businessRifValidation = false;
let businessNumberValidation = false;
let fiscalAddressValidation = false;
let deliveryAddressValidation = false;


//funcion para la validacion 
const validation = (input, regexValidation ) => {
    // este es un if else de la forma corta para hacer que funcione el boton y se quite la opcion del disabled
    formBtn.disabled = nameValidation && businessNameValidation && emailValidation && phoneValidation && idValidation && rifValidation && businessRifValidation && businessNumberValidation && fiscalAddressValidation &&  deliveryAddressValidation ? false : true;

    if (input.value ==='') {
        input.classList.add('focus:outline-none');
        input.classList.remove('outline-green-500', 'outline-2', 'outline');
        input.classList.remove('outline-red-500', 'outline-2', 'outline');
    }else if (regexValidation) {
        input.classList.remove('focus:outline-none');
        input.classList.add('outline-green-500', 'outline-2', 'outline');
        input.classList.remove('outline-red-500', 'outline-2', 'outline');
    } else if (!regexValidation){
        input.classList.remove('focus:outline-none');
        input.classList.remove('outline-green-500', 'outline-2', 'outline');
        input.classList.add('outline-red-500', 'outline-2', 'outline');
    }

};

//eventos 
nameInput.addEventListener('input', e => {
    nameValidation = NAME_REGEX.test(e.target.value);
    validation(nameInput, nameValidation);
});

emailInput.addEventListener('input', e => {
    emailValidation = EMAIL_REGEX.test(e.target.value);
    validation(emailInput, emailValidation);
});

businessNameInput.addEventListener('input', e => {
    businessNameValidation = NAME_REGEX.test(e.target.value);
    validation(businessNameInput, businessNameValidation);
});

phoneInput.addEventListener('input', e => {
    phoneValidation = PHONE_REGEX.test(e.target.value);
    validation(phoneInput, phoneValidation);
});

idInput.addEventListener('input', e => {
    idValidation = ID_REGEX.test(e.target.value);
    validation(idInput, idValidation);
});

rifInput.addEventListener('input', e => {
    rifValidation = RIF_REGEX.test(e.target.value);
    validation(rifInput, rifValidation);
});

businessRifInput.addEventListener('input', e => {
    businessRifValidation = RIF_REGEX.test(e.target.value);
    validation(businessRifInput, businessRifValidation);
});

businessNumberInput.addEventListener('input', e => {
    businessNumberValidation = BUSINESS_PHONE_REGEX.test(e.target.value);
    validation(businessNumberInput, businessNumberValidation);
});

fiscalAddressInput.addEventListener('input', e => {
    fiscalAddressValidation = ADDRESS_REGEX.test(e.target.value);
    validation(fiscalAddressInput, fiscalAddressValidation);
});

deliveryAddressInput.addEventListener('input', e => {
    deliveryAddressValidation = ADDRESS_REGEX.test(e.target.value);
    validation(deliveryAddressInput, deliveryAddressValidation);
});


// preguntar por que al crear el usuario de cliente no deja usarlo por el passwordhash y preguntar porque no funciona la verificacion 

form.addEventListener('submit', async e => {
    e.preventDefault();
    try {
        const newClientUser = {
            name: nameInput.value,
            email: emailInput.value,
            businessname: businessNameInput.value,
            phoneNumber: phoneInput.value,
            businessNumber: businessNumberInput.value,
            cedula: idInput.value,
            rif: rifInput.value,
            businessRif: businessRifInput.value,
            fiscalAddress: fiscalAddressInput.value,
            deliveryAddress: deliveryAddressInput.value,
            rol: 'client'
        };

        console.log(newClientUser);
// para que aparezca el loader
        createLoader();

        const {data} = await axios.post('/api/users', newClientUser);
        createNotification(false, data);

        console.log(data);

        createLoader();

        if (createNotification) {
            hideLoader();
        }
        setTimeout(() => {
            notification.innerHTML ='';
        }, 5000);

        // para borrar los datos del formulario
         nameInput.value = '';
         businessNameInput.value = '';
         emailInput.value = '';
         phoneInput.value ='';
         idInput.value =  '';
         rifInput.value = '';
         businessRifInput.value = '';
         businessNumberInput.value = '';
         fiscalAddressInput.value = '';
         deliveryAddressInput.value = '';
        

        validation(nameInput, false);
        validation(emailInput, false);
        validation(businessNameInput, false);
        validation(phoneInput, false);
        validation(idInput, false);
        validation(businessRifInput, false);
        validation(businessNumberInput, false);
        validation(fiscalAddressInput, false);
        validation(deliveryAddressInput, false);


    } catch (error) {
        console.log(error);
        createNotification(true, error.response.data.error);
        setTimeout(() => {
            notification.innerHTML ='';
        }, 5000);
    }    
});