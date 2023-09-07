import { createNotification, hideNotification } from "../components/notification.js";
import { createLoader, hideLoader } from "../components/loader.js";
const form = document.querySelector('#form');
const productNameInput = document.querySelector('#product-name-input');
const descriptionInput = document.querySelector('#description-input');
const brandInput = document.querySelector('#brand-input');
const kindProductSelected = document.querySelector('#kind-product');
const quantityInput = document.querySelector('#quantity-input');
const quantitySelected = document.querySelector('#quantity-selected');
const productBoxInput = document.querySelector('#productBox-input');
const numBoxInput = document.querySelector('#numberBox-input');
const barCodeInput = document.querySelector('#barcode-input');
const currencySelected = document.querySelector('#currency');
const ivaSelected = document.querySelector('#iva-selected');
const boxPriceInput = document.querySelector('#boxPrice-input');
const boxProfitInput = document.querySelector('#boxProfit-input');
const boxSaleInput = document.querySelector('#boxSale-input');
const unidPriceInput = document.querySelector('#unidPrice-input');
const unidProfitInput = document.querySelector('#unidProfit-input');
const unidSaleInput = document.querySelector('#unidSale-input');
const descountSelected = document.querySelector('#descoun-selected');
const descountInput = document.querySelector('#descount-input');
const formBtn = document.querySelector('#form-btn');
const notification = document.querySelector('#notification');

// regex
const PRODUCT_NAME_REGEX = /^[a-zA-Z0-9\s]{3,}$/;
const DESCRIPTION_REGEX = /^[a-zA-Z0-9\s]{3,}$/;
const BRAND_REGEX = /^[a-zA-Z0-9\s]+$/;
const QUANTITY_REGEX = /^(0(?:\.\d{1,2})?|[1-9]\d*(?:\.\d{1,2})?)$/;
const BOXES_REGEX = /^[1-9][0-9]*$/;
const BARCODE_REGEX = /^(?!0+$)[0-9]{12,13}$/;
const PURCHASE_PRICE_REGEX = /^(?!0(?:\.0{1,2})?$)[1-9]\d*(?:\.\d{1,2})?$/;
const DISCOUNT_REGEX = /^(?!0(?:\.00?)?$)([1-9][0-9]{0,1}|0)(?:\.\d{1,2})?$/;
const SALE_PRICE_REGEX = /^(?!0(?:\.0{1,2})?$)[1-9]\d*(?:\.\d{1,2})?$/;

// valiudaciones 
let productNameValidation = false;
let descriptionValidation = false;
let brandValidation = false;
let quantityValidation = false;
let productBoxValidation = false;
let numBoxValidation = false;
let barCodeValidation = false;
let boxPriceValidation = false;
let boxProfitValidation = false;
let boxSaleValidation = false;
let unidPriceValidation = false;
let unidProfitValidation = false;
let unidSaleValidation = false;
let kindProductValidation = false;
let quantitySelectValidation = false;
let currencyValidation = false;
let ivaValidation = false;
let descountValidation = false;
let descountSelectedValidation= false;


//funcion para la validacion 
const validation = (input, regexValidation ) => {
    // al encerrar todas las validaciones en el parentesis hace que tome en cuenta a todas ellas y que al principio si esta el signo ! hace que solo se activara si todas las validaciones son true del resto el boton estara todavia desactivado
    formBtn.disabled = !(productNameValidation && descriptionValidation && brandValidation && quantityValidation && productBoxValidation && numBoxValidation && barCodeValidation && boxProfitValidation && boxSaleValidation && unidPriceValidation && unidProfitValidation && unidSaleValidation && kindProductValidation && quantitySelectValidation && currencyValidation && ivaValidation && descountValidation && descountSelectedValidation);

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
productNameInput.addEventListener('input', e => {
    productNameValidation = PRODUCT_NAME_REGEX.test(e.target.value);
    validation(productNameInput, productNameValidation);
});

descriptionInput.addEventListener('input', e => {
    descriptionValidation = DESCRIPTION_REGEX.test(e.target.value);
    validation(descriptionInput, descriptionValidation);
});

brandInput.addEventListener('input', e => {
    brandValidation = BRAND_REGEX.test(e.target.value);
    validation(brandInput, brandValidation);
});

quantityInput.addEventListener('input', e => {
    quantityValidation = QUANTITY_REGEX.test(e.target.value);
    validation(quantityInput, quantityValidation);
});

productBoxInput.addEventListener('input', e => {
    productBoxValidation = BOXES_REGEX.test(e.target.value);
    validation(productBoxInput, productBoxValidation);
});

numBoxInput.addEventListener('input', e => {
    numBoxValidation = BOXES_REGEX.test(e.target.value);
    validation(numBoxInput, numBoxValidation);
});

barCodeInput.addEventListener('input', e => {
    barCodeValidation = BARCODE_REGEX.test(e.target.value);
    validation(barCodeInput, barCodeValidation);
});

boxPriceInput.addEventListener('input', e => {
    boxPriceValidation = PURCHASE_PRICE_REGEX.test(e.target.value);
    validation(boxPriceInput, boxPriceValidation);
});

boxProfitInput.addEventListener('input', e => {
    boxProfitValidation = DISCOUNT_REGEX.test(e.target.value);
    validation(boxProfitInput, boxProfitValidation);
});

boxSaleInput.addEventListener('input', e => {
    boxSaleValidation = SALE_PRICE_REGEX.test(e.target.value);
    validation(boxSaleInput, boxSaleValidation);
});

unidPriceInput.addEventListener('input', e => {
    unidPriceValidation = PURCHASE_PRICE_REGEX.test(e.target.value);
    validation(unidPriceInput, unidPriceValidation);
});

unidProfitInput.addEventListener('input', e => {
    unidProfitValidation = DISCOUNT_REGEX.test(e.target.value);
    validation(unidProfitInput, unidProfitValidation);
});

unidSaleInput.addEventListener('input', e => {
    unidSaleValidation = SALE_PRICE_REGEX.test(e.target.value);
    validation(unidSaleInput, unidSaleValidation);
});

descountInput.addEventListener('input', e => {
    descountValidation = DISCOUNT_REGEX.test(e.target.value);
    validation(descountInput, descountValidation);
});

kindProductSelected.addEventListener('change', () => {
    if (kindProductSelected.value !== 'Select') {
        createNotification(false,`You have selected ${kindProductSelected.value}`);
        setTimeout(() => {
            hideNotification();
        }, 3000); 
        kindProductValidation = true;
    } else {
        createNotification(true,"Please select a value for 'Kind of product");
        setTimeout(() => {
            hideNotification();
        }, 3000); 
        kindProductValidation = false;
    }
});

quantitySelected.addEventListener('change', () => {
    if (quantitySelected.value !== 'Select') {
        createNotification(false,`You have selected ${quantitySelected.value}`);
        setTimeout(() => {
            hideNotification();
        }, 3000); 
        quantitySelectValidation = true;
    } else {
        createNotification(true,"Please select a value for 'Quantity");
        setTimeout(() => {
            hideNotification();
        }, 3000); 
        quantitySelectValidation = false;
    }
});

currencySelected.addEventListener('change', () => {
    if (currencySelected.value !== 'Select') {
        createNotification(false,`You have selected ${currencySelected.value}`);
        setTimeout(() => {
            hideNotification();
        }, 3000); 
        currencyValidation = true;
    } else {
        createNotification(true,"Please select a value for 'Currency");
        setTimeout(() => {
            hideNotification();
        }, 3000); 
        currencyValidation = false;
    }
});

ivaSelected.addEventListener('change', () => {
    if (ivaSelected.value !== 'Select') {
        createNotification(false,`You have selected ${ivaSelected.value}`);
        setTimeout(() => {
            hideNotification();
        }, 3000); 
        ivaValidation = true;
    } else {
        createNotification(true,"Please select a value for 'iva");
        setTimeout(() => {
            hideNotification();
        }, 3000); 
        ivaValidation =false;
    }
});

descountSelected.addEventListener('change', () => {
    if (descountSelected.value !== 'Select') {
        createNotification(false,`You have selected ${descountSelected.value}`);
        setTimeout(() => {
            hideNotification();
        }, 3000); 
        descountSelectedValidation = true;
    } else {
        createNotification(true,"Please select a value for 'iva");
        setTimeout(() => {
            hideNotification();
        }, 3000); 
        descountSelectedValidation =false;
    }
});


form.addEventListener('submit', async e => {
    e.preventDefault();
    try {
        const newProduct = {
            productName: productNameInput.value,
            description: descriptionInput.value,
            brand: brandInput.value,
            kindProduct: kindProductSelected.value,
            quantityNum: quantityInput.value,
            quantityUnit: quantitySelected.value,
            unidBox: productBoxInput.value,
            boxes: numBoxInput.value,
            barcode: barCodeInput.value,
            currency: currencySelected.value,
            vat: ivaSelected.value,
            boxPrice: boxPriceInput.value,
            boxProfit: boxProfitInput.value,
            boxSale: boxSaleInput.value,
            unidPrice: unidPriceInput.value,
            unidProfit: unidProfitInput.value,
            unidSale: unidSaleInput.value,
            descount: descountSelected.value,
            descountNum: descountInput.value,
        };

        // console.log(newProduct);
// para que aparezca el loader
        createLoader();

        const { data } = await axios.post('/api/products', newProduct);
        createNotification(false, data);

        // console.log(data);

        createLoader();

        if (createNotification) {
            hideLoader();
        }
        setTimeout(() => {
            notification.innerHTML ='';
        }, 5000);

        // para borrar los datos del formulario
        productNameInput.value = '';
        descriptionInput.value ='';
        brandInput.value ='';
        kindProductSelected.value ='';
        quantityInput.value ='';
        quantitySelected.value ='';
        productBoxInput.value ='';
        numBoxInput.value ='';
        barCodeInput.value ='';
        currencySelected.value ='';
        ivaSelected.value ='';
        boxPriceInput.value ='';
        boxProfitInput.value ='';
        boxSaleInput.value=''
        unidPriceInput.value='';
        unidProfitInput.value ='';
        unidSaleInput.value ='';
        kindProductSelected.value = 'select';
        quantitySelected.value = 'select';
        currencySelected.value = 'select';
        ivaSelected.value = 'select';
        descountInput.value = '';
        descountSelected.value = 'select';

    validation(productNameInput, false);
    validation(descriptionInput, false);
    validation(brandInput, false);
    validation(quantityInput, false);
    validation(productBoxInput, false);
    validation(numBoxInput, false);
    validation(barCodeInput, false);
    validation(boxPriceInput, false);
    validation(boxProfitInput, false);
    validation(boxSaleInput, false);
    validation(unidPriceInput, false);
    validation(unidProfitInput, false);
    validation(unidSaleInput, false);
    validation(descountInput, false);
    kindProductValidation = false;
    quantitySelectValidation = false;
    currencyValidation = false;
    ivaValidation =false;
    descountSelectedValidation =false;


    } catch (error) {
        console.log(error);
        createNotification(true, error.response.data.error);
        setTimeout(() => {
            notification.innerHTML ='';
        }, 5000);
    }    
});