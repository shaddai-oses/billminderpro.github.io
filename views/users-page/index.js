import { createNotification, hideNotification } from "../components/notification.js";

const reloadButton = document.querySelector('#reloadButton');
const ulclients = document.querySelector('#ul-clients');
const divclients = document.querySelector('#div-clients');
const ulSellers = document.querySelector('#ul-sellers');
const divSellers = document.querySelector('#div-sellers');

(async ( ) => {    
  try {
    const {data} = await axios.get('/api/users/all');
    // console.log(data);
    data.forEach(users => {
      const listItem = document.createElement('li');
      listItem.id = users.id
      // console.log(users);

      if (users.rol === 'client') {
        divclients.classList.remove('hidden');
        divclients.classList.add('flex');
        listItem.classList.add('flex', 'flex-col', 'border-b-[0.1rem]', 'border-[#535355]');
        listItem.innerHTML = `
        <div class="flex flex-col bg-[#1E1E1F] rounded-lg backdrop-blur-lg relative w-full justify-center">
            <div class="flex flex-col pl-8 p-2 relative">
  
                <button class="fav-button absolute top-3 left-1">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-6 h-6 text-white pointer-events-none">
                        <path class="pointer-events-none" fill-rule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z" clip-rule="evenodd" />
                      </svg>  
                </button>
  
                <!-- title information -->
                <h3 class="text-white font-semibold text-lg">${users.businessname}</h3>
                <button class="edit-button absolute top-3 right-0">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5  text-white pointer-events-none">
                        <path class="pointer-events-none" stroke-linecap="round" stroke-linejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10" />
                      </svg>                          
                </button> 
  
                <!-- information -->
                <div class=" flex justify-between border-b-[0.1rem]  border-[#535355]">
                    <div class="flex gap-1">
                        <p class="text-white text-xs">Client name:</p>
                        <p class="text-white text-xs">${users.name}</p>
                    </div>
                    <div class="flex gap-1">
                        <p class="text-white text-xs">Email:</p>
                        <p class="text-white text-xs">${users.email}</p>
                    </div>
                </div>
                <div class=" flex justify-between border-b-[0.1rem]  border-[#535355]">
                    <div class="flex gap-1">
                        <p class="text-white text-xs text leading-[0.8rem]">Business phone number:</p>
                        <p class="text-white text-xs">${users.businessNumber}</p>
                    </div>
                    <div class="flex gap-1">
                        <p class="text-white text-xs">Phone number:</p>
                        <p class="text-white text-xs">${users.phoneNumber}</p>
                    </div>
                </div>
                <div class=" flex justify-between border-b-[0.1rem]  border-[#535355]">
                    <div class="flex gap-1">
                        <p class="text-white text-xs">Id:</p>
                        <p class="text-white text-xs">${users.cedula}</p>
                    </div>
                    <div class="flex gap-1">
                        <p class="text-white text-xs">Client rif:</p>
                        <p class="text-white text-xs">${users.rif}</p>
                    </div>
                </div>
                <div class=" flex justify-between border-b-[0.1rem]  border-[#535355]">
                    <p class="text-white text-xs">Business rif:</p>
                    <p class="text-white text-xs">${users.businessRif}</p>
                </div>
                <div class=" flex gap-1 border-b-[0.1rem]  border-[#535355]">
                        <p class="text-white text-xs text-center">Delivery address:</p>
                        <p class="text-white text-xs text leading-[0.8rem]">${users.deliveryAddress}</p>
                </div>
                <div class=" flex gap-1 border-b-[0.1rem]  border-[#535355]">
                    <p class="text-white text-xs text-center">Fiscal address:</p>
                    <p class="text-white text-xs text leading-[0.8rem]">${users.fiscalAddress}</p>
            </div>
  
            </div>
        </div>
        `;
        ulclients.append(listItem);
      }

      if (users.rol === 'common user') {
        divSellers.classList.remove('hidden');
        divSellers.classList.add('flex')
        ulSellers.append(listItem);
        listItem.classList.add('flex', 'flex-col', 'border-b-[0.1rem]', 'border-[#535355]', 'pl-8', 'p-2', 'relative');
        listItem.innerHTML = `
        <button class="absolute top-3 left-1">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-6 h-6 text-white pointer-events-none">
                <path class="pointer-events-none" fill-rule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z" clip-rule="evenodd" />
            </svg>  
        </button>                    
        <h3 class="text-white font-semibold">${users.name}</h3>
            <div class="flex gap-1">
                <p class="text-white text-xs">Email:</p>
                <p class="text-white text-xs">${users.email}</p>
            </div>
        `
      }

  });

  } catch (error) {
    console.log(error);
  }
})();

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

divclients.addEventListener('click', async e => {
  e.preventDefault();
//   console.log(e.target.closest('.edit-button'));
  console.log(e.target.parentElement.children[3].children[0].children[1]);
  const businessName = e.target.parentElement.children[1];
  const clientName = e.target.parentElement.children[3].children[0].children[1];
  const email =e.target.parentElement.children[3].children[1].children[1];
  const phoneNum = e.target.parentElement.children[4].children[1].children[1];
  const businessPhoneNum = e.target.parentElement.children[4].children[0].children[1];
  const cedula = e.target.parentElement.children[5].children[0].children[1];
  const rif = e.target.parentElement.children[5].children[1].children[1];
  const businessRif = e.target.parentElement.children[6].children[1];
  const deliveryAddress = e.target.parentElement.children[7].children[1];
  const fiscalAddress = e.target.parentElement.children[8].children[1];

  if (!clientName.hasAttribute('contenteditable')) {
    businessName.setAttribute('contenteditable', true);
    businessName.addEventListener('input', e => {
        businessNameValidation = NAME_REGEX.test(e.target.innerText);
        validation( 'The name should consist of letters, numbers, and spaces only. It can have a maximum of 30 characters, including spaces.', 'Successful validation.');
    });

    email.setAttribute('contenteditable', true);
    email.addEventListener('input', e => {
        emailValidation = EMAIL_REGEX.test(e.target.innerText);
        validation( 'Please enter a existing email', 'Successful validation.');
    });

    clientName.setAttribute('contenteditable', true);
    clientName.addEventListener('input', e => {
        nameValidation = NAME_REGEX.test(e.target.innerText);
        validation( 'The name should consist of letters, numbers, and spaces only. It can have a maximum of 30 characters, including spaces.', 'Successful validation.');
    });

    phoneNum.setAttribute('contenteditable', true);
    phoneNum.addEventListener('input', e => {
        phoneValidation = PHONE_REGEX.test(e.target.innerText);
        validation( 'The name should consist of letters, numbers, and spaces only. It can have a maximum of 30 characters, including spaces.', 'Successful validation.');
    });

    businessPhoneNum.setAttribute('contenteditable', true);
    businessPhoneNum.addEventListener('input', e => {
        businessNumberValidation = PHONE_REGEX.test(e.target.innerText);
        validation( 'The name should consist of letters, numbers, and spaces only. It can have a maximum of 30 characters, including spaces.', 'Successful validation.');
    });

    cedula.setAttribute('contenteditable', true);
    cedula.addEventListener('input', e => {
        idValidation = ID_REGEX.test(e.target.innerText);
        validation( 'The name should consist of letters, numbers, and spaces only. It can have a maximum of 30 characters, including spaces.', 'Successful validation.');
    });

    rif.setAttribute('contenteditable', true);
    rif.addEventListener('input', e => {
        rifValidation = RIF_REGEX.test(e.target.innerText);
        validation( 'The name should consist of letters, numbers, and spaces only. It can have a maximum of 30 characters, including spaces.', 'Successful validation.');
    });
    
    businessRif.setAttribute('contenteditable', true);
    businessRif.addEventListener('input', e => {
        businessRifValidation = RIF_REGEX.test(e.target.innerText);
        validation( 'The name should consist of letters, numbers, and spaces only. It can have a maximum of 30 characters, including spaces.', 'Successful validation.');
    });

    deliveryAddress.setAttribute('contenteditable', true);
    deliveryAddress.addEventListener('input', e => {
        deliveryAddressValidation = ADDRESS_REGEX.test(e.target.innerText);
        validation( 'The name should consist of letters, numbers, and spaces only. It can have a maximum of 30 characters, including spaces.', 'Successful validation.');
    });

    fiscalAddress.setAttribute('contenteditable', true);
    fiscalAddress.addEventListener('input', e => {
        fiscalAddress = ADDRESS_REGEX.test(e.target.innerText);
        validation( 'The name should consist of letters, numbers, and spaces only. It can have a maximum of 30 characters, including spaces.', 'Successful validation.');
    });

  } else {

    businessName.textContent = businessName.innerText; 
    businessName.setAttribute('contenteditable', false);
    businessName.removeAttribute('contenteditable');

    email.textContent = email.innerText; 
    email.setAttribute('contenteditable', false);
    email.removeAttribute('contenteditable');

    clientName.textContent = clientName.innerText; 
    clientName.setAttribute('contenteditable', false);
    clientName.removeAttribute('contenteditable');

    phoneNum.textContent = phoneNum.innerText; 
    phoneNum.setAttribute('contenteditable', false);
    phoneNum.removeAttribute('contenteditable');

    businessPhoneNum.textContent = businessPhoneNum.innerText; 
    businessPhoneNum.setAttribute('contenteditable', false);
    businessPhoneNum.removeAttribute('contenteditable');

    cedula.textContent = cedula.innerText; 
    cedula.setAttribute('contenteditable', false);
    cedula.removeAttribute('contenteditable');

    rif.textContent = rif.innerText; 
    rif.setAttribute('contenteditable', false);
    rif.removeAttribute('contenteditable');

    businessRif.textContent = businessRif.innerText; 
    businessRif.setAttribute('contenteditable', false);
    businessRif.removeAttribute('contenteditable');

    deliveryAddress.textContent = deliveryAddress.innerText; 
    deliveryAddress.setAttribute('contenteditable', false);
    deliveryAddress.removeAttribute('contenteditable');

    fiscalAddress.textContent = fiscalAddress.innerText; 
    fiscalAddress.setAttribute('contenteditable', false);
    fiscalAddress.removeAttribute('contenteditable');

  }

});

// const {data} = await axios.get('/api/products');
// const dataLength = data.length;

reloadButton.addEventListener('click', () => {
  window.location.reload();
});


// const allUsers = document.querySelectorAll('li');
// const boxes = product.boxes;
// const unid = product.unidBox;
// const descount = product.descountNum;
// selectInventary.addEventListener('change', e => {

//   if (selectInventary.value === 'All') {
//     return allProducts
//   }

//   if (selectInventary.value === 'Available') {
//    return unid < 0 && boxes <0
//   }

//   if (selectInventary.value === 'Descount') {
//    return descount < 0
//   }

//   if (selectInventary.value === 'Out of stock') {
//     return unid ===0 && boxes === 0
//   }
// });