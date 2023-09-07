// import { createNotification, hideNotification } from "../components/notification.js";
// import { createLoader, hideLoader } from "../components/loader.js";
const all = document.querySelector('#all');

// preguntar al profe por que no funciona la navigator, las notificaciones y el loader

(async ( ) => {    
    try {
        const id = window.location.pathname.split('/')[2];
        const {data} = await axios.get(`/api/products/${id}`);
        // console.log(data.id);
        const infoProduct = document.createElement('div');
        infoProduct.classList.add('flex', 'flex-col', 'gap-2', 'w-full', 'md:w-2/3', 'lg:w-3/4', 'p-4');
        infoProduct.innerHTML= `
        <h1 class="kind-product text-white text-2xl font-medium">${data.kindProduct}</h1>
        <div class="flex gap-1">
            <h3 class="text-white font-medium text-sm">Description:</h3>
            <p class="description text-white font-medium text-sm">${data.description}</p>
        </div>
                <div class="flex flex-col p-2 bg-[#1E1E1F] rounded-lg backdrop-blur-lg relative w-full justify-center">
                    <div class="flex flex-col border-b-[0.1rem]  border-[#535355] pl-8 p-2 relative">
                        <button class="fav-button absolute top-3 left-1">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-6 h-6 text-white pointer-events-none">
                                <path class="pointer-events-none" fill-rule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z" clip-rule="evenodd" />
                              </svg>  
                        </button>

                        <div class="flex gap-1">
                            <h3 class="product-name text-white font-semibold text-lg">${data.productName}</h3>
                            <p class="brand text-white font-semibold text-lg">${data.brand}</p>
                            <p class="quantity-num text-white font-semibold text-lg">${data.quantityNum}</p>
                            <p class="quantity-unit text-white font-semibold text-lg">${data.quantityUnit}</p>
                        </div>     

                        <button class="edit-button absolute top-3 right-6">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5  text-white pointer-events-none">
                                <path class="pointer-events-none" stroke-linecap="round" stroke-linejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10" />
                              </svg>                          
                        </button>
                        <button class="delete-button absolute top-3 right-0">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5  text-white pointer-events-none">
                            <path class="pointer-events-none" stroke-linecap="round" stroke-linejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" />
                            </svg>
                        </button>
                        
                        <!-- codigo y tipo de moneda -->
                        <div class=" flex justify-between border-b-[0.1rem]  border-[#535355]">
                            <div class="flex gap-1">
                                <p class="text-white text-xs">Code:</p>
                                <p class="bar-code text-white text-xs">${data.barcode}</p>
                            </div>
                            <div class="flex gap-1">
                                <p class="text-white text-xs">Currency:</p>
                                <p class="currency text-white text-xs">${data.currency}</p>
                            </div>
                        </div>
                        <!-- cantidades unid y boxes -->
                        <div class=" flex justify-between border-b-[0.1rem]  border-[#535355]">
                            <div class="flex gap-1">
                                <p class="text-white text-xs">Stock</p>
                                <p class="text-white text-xs product-unid">${data.boxes}</p>
                            </div>
                            <div class="flex gap-1">
                                <p class="text-white text-xs">Boxes stock:</p>
                                <p class="text-white text-xs product-box">${data.unidBox}</p>
                            </div>
                        </div>
                        <!-- precio de compra unid y boxes -->
                        <div class=" flex justify-between gap-2 border-b-[0.1rem]  border-[#535355]">
                            <div class="flex gap-1">
                                <p class="text-white text-xs leading-[0.8rem]">Purchase price unid:</p>
                                <p class="unid-purchase-price text-white text-xs">${data.unidPrice}</p>
                            </div>
                            <div class="flex gap-1">
                                <p class="text-white text-xs leading-[0.8rem]">Purchase price box:</p>
                                <p class="box-purchase-price text-white text-xs">${data.boxPrice}</p>
                            </div>
                        </div>
                        <!-- descuento  e iva -->
                        <div class=" flex justify-between border-b-[0.1rem]  border-[#535355]">
                            <div class="flex gap-1">
                                <p class="text-white text-xs">Vat:</p>
                                <p class="iva-info text-white text-xs">${data.vat}</p>
                            </div>
                            <div class="flex gap-1">
                                <p class="text-white text-xs">discount:</p>
                                <p class="discount text-white text-xs">${data.descountNum}%</p>
                            </div>
                        </div>
                        <!-- precio de venta unid boxes -->
                        <div class=" flex justify-between gap-2 border-b-[0.1rem]  border-[#535355]">
                            <div class="flex gap-1">
                                <p class="text-white text-xs leading-[0.8rem]">Sale price unid:</p>
                                <p class="unid-sale-price text-white text-xs">${data.unidSale}</p>
                            </div>
                            <div class="flex gap-1">
                                <p class="text-white text-xs leading-[0.8rem]">Sale price box:</p>
                                <p class="box-sale-price text-white text-xs">${data.boxSale}</p>
                            </div>
                        </div>
                    </div>
                </div>
        `;
        all.append(infoProduct);
    } catch (error) {
        console.log(error);
    }
})();

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
// selected regex
const KIND_PRODUCT_REGEX = /^(Cured Meats|Red Meats|White Meats|Vegetables|Dairy Products|Fruits|Grains and Cereals|Oils and Fats|Nuts|Beverages|Bakery products|Sauces)$/;
const QUANTITY_SELECTED_REGEX = /^(mg|ml|Kg|L)$/;
const CURRENCY_SELECTED_REGEX = /^(dolar|bolivar|euro)$/;
const YES_NO_REGEX = /^(Yes|No)$/;


// valiudaciones 
let productNameValidation = false;
let descriptionValidation = false;
let brandValidation = false;
let quantityValidation = false;
let productBoxValidation = false;
let numBoxValidation = false;
let barCodeValidation = false;
let boxPriceValidation = false;
let boxSaleValidation = false;
let unidPriceValidation = false;
let unidSaleValidation = false;
let kindProductValidation = false;
let quantitySelectValidation = false;
let currencyValidation = false;
let ivaValidation = false;
let discountValidation = false;


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

const {data} = await axios.get(`/api/products/`);
const id = data[0].id;

all.addEventListener('click', async e => {
//  console.log(e.target.closest('.delete-button'));
const editButton = all.children[1].children[2].children[0].children[2];
const infoProduct = all.children[1];

    if (e.target.closest('.delete-button')) {
        await axios.delete(`/api/products/${id}`);
        infoProduct.remove( );
        createNotification('Succesfully deleted')
        setTimeout(() => {
        window.location.pathname = '/inventary'  
        }, 3000);
    }

    if (e.target.closest('.edit-button')) {
        const productName = e.target.parentElement.children[1].children[0];
        const brand = e.target.parentElement.children[1].children[1];
        const quantityNum = e.target.parentElement.children[1].children[2];
        const quantityUnit = e.target.parentElement.children[1].children[3]
        const description = e.target.parentElement.parentElement.parentElement.children[1].children[1]
        const kindProduct = e.target.parentElement.parentElement.parentElement.children[0];
        const barCode = e.target.parentElement.children[4].children[0].children[1];
        const currency = e.target.parentElement.children[4].children[1].children[1];
        const productUnid = e.target.parentElement.children[5].children[0].children[1];
        const numBox = e.target.parentElement.children[5].children[1].children[1];
        const unidPrice= e.target.parentElement.children[6].children[0].children[1]
        const boxPrice =  e.target.parentElement.children[6].children[1].children[1];
        const iva = e.target.parentElement.children[7].children[0].children[1];
        const discount = e.target.parentElement.children[7].children[1].children[1];
        const unidSale = e.target.parentElement.children[8].children[0].children[1];
        const boxSale= e.target.parentElement.children[8].children[1].children[1];
        



        if (!productName.hasAttribute('contenteditable')) {
            productName.setAttribute('contenteditable', true);
            productName.addEventListener('input', e => {
                productNameValidation = PRODUCT_NAME_REGEX.test(e.target.innerText);
                validation(productName, productNameValidation, 'The product name should consist of letters, numbers, and spaces only. It can have a maximum of 30 characters, including spaces.', 'Successful validation.');
            });

            brand.setAttribute('contenteditable', true);
            brand.addEventListener('input', e => {
                brandValidation = BRAND_REGEX.test(e.target.innerText);
                validation(brand, brandValidation, 'The brand should consist of letters, numbers, and spaces only.', 'Successful validation.');
            });

            quantityNum.setAttribute('contenteditable', true);
            quantityNum.addEventListener('input', e => {
                quantityValidation = QUANTITY_REGEX.test(e.target.innerText);
                validation(quantityNum, quantityValidation, 'Accepts a numeric quantity, allowing for decimals (up to two decimal places) and ensuring its not zero', 'Successful validation');
            });

            quantityUnit.setAttribute('contenteditable', true);
            quantityUnit.addEventListener('input', e => {
                quantitySelectValidation = QUANTITY_SELECTED_REGEX.test(e.target.innerText);
                validation(quantityUnit, quantitySelectValidation, 'El nombre y el apellido deben comenzar con letras mayúsculas.', 'Successful validation.');
            });

            description.setAttribute('contenteditable', true);
            description.addEventListener('input', e => {
                descriptionValidation = DESCRIPTION_REGEX.test(e.target.innerText);
                validation(description, descriptionValidation, 'Accepts a product description consisting of letters, numbers, and spaces only, with a minimum length of 3 characters..', 'Successful validation.');
            });

            kindProduct.setAttribute('contenteditable', true);
            kindProduct.addEventListener('input', e => {
                kindProductValidation = KIND_PRODUCT_REGEX.test(e.target.innerText);
                validation(kindProduct, kindProductValidation, 'Accepts one of the specified product kinds, such as "Cured Meats," "Red Meats," etc..', 'Successful validation.');
            });

            barCode.setAttribute('contenteditable', true);
            barCode.addEventListener('input', e => {
                barCodeValidation = BARCODE_REGEX.test(e.target.innerText);
                validation(barCode, barCodeValidation, 'Accepts a barcode consisting of 12 to 13 digits, excluding leading zeros..', 'Successful validation.');
            });

            currency.setAttribute('contenteditable', true);
            currency.addEventListener('input', e => {
                currencyValidation = CURRENCY_SELECTED_REGEX.test(e.target.innerText);
                validation(currency, currencyValidation, 'Accepts one of the specified currencies, such as "dollar," "bolivar," or "euro."', 'Successful validation.');
            });

            productUnid.setAttribute('contenteditable', true);
            productUnid.addEventListener('input', e => {
                productBoxValidation = BOXES_REGEX.test(e.target.innerText);
                validation(productUnid, productBoxValidation, 'Accepts a positive integer for boxes (no leading zeros).', 'Successful validation.');
            });

            numBox.setAttribute('contenteditable', true);
            numBox.addEventListener('input', e => {
                numBoxValidation = BOXES_REGEX.test(e.target.innerText);
                validation(numBox, numBoxValidation, 'Accepts a positive integer for boxes (no leading zeros).', 'Successful validation.');
            });

            unidPrice.setAttribute('contenteditable', true);
            unidPrice.addEventListener('input', e => {
                unidPriceValidation = PURCHASE_PRICE_REGEX.test(e.target.innerText);
                validation(unidPrice, unidPriceValidation, 'Accepts a purchase price, allowing for decimals (up to two decimal places) and ensuring its not zero.', 'Successful validation.');
            });

            boxPrice.setAttribute('contenteditable', true);
            boxPrice.addEventListener('input', e => {
                boxPriceValidation = PURCHASE_PRICE_REGEX.test(e.target.innerText);
                validation(boxPrice, boxPriceValidation, 'Accepts a purchase price, allowing for decimals (up to two decimal places) and ensuring its not zero.', 'Successful validation.');
            });

            iva.setAttribute('contenteditable', true);
            iva.addEventListener('input', e => {
                ivaValidation = YES_NO_REGEX.test(e.target.innerText);
                validation(iva, ivaValidation, 'Accepts either "Yes" or "No" (case-sensitive)', 'Successful validation.');
            });

            discount.setAttribute('contenteditable', true);
            discount.addEventListener('input', e => {
                discountValidation = DISCOUNT_REGEX.test(e.target.innerText);
                validation(discount, discountValidation, 'Accepts a discount percentage, allowing for decimals (up to two decimal places) and ensuring its not zero.', 'Successful validation.');
            });

            unidSale.setAttribute('contenteditable', true);
            unidSale.addEventListener('input', e => {
                unidSaleValidation = SALE_PRICE_REGEX.test(e.target.innerText);
                validation(unidSale, unidSaleValidation, 'Accepts a sale price, allowing for decimals (up to two decimal places) and ensuring its not zero.', 'Successful validation.');
            });

            boxSale.setAttribute('contenteditable', true);
            boxSale.addEventListener('input', e => {
                boxSaleValidation = SALE_PRICE_REGEX.test(e.target.innerText);
                validation(boxSale, boxSaleValidation, 'Accepts a sale price, allowing for decimals (up to two decimal places) and ensuring its not zero.', 'Successful validation.');
            });

        } else {

            productName.textContent = productName.innerText; 
            productName.setAttribute('contenteditable', false);
            productName.removeAttribute('contenteditable');

            brand.textContent = brand.innerText; 
            brand.setAttribute('contenteditable', false);
            brand.removeAttribute('contenteditable');

            quantityNum.textContent = quantityNum.innerText; 
            quantityNum.setAttribute('contenteditable', false);
            quantityNum.removeAttribute('contenteditable');

            quantityUnit.textContent = quantityUnit.innerText; 
            quantityUnit.setAttribute('contenteditable', false);
            quantityUnit.removeAttribute('contenteditable');

            description.textContent = description.innerText; 
            description.setAttribute('contenteditable', false);
            description.removeAttribute('contenteditable');

            kindProduct.textContent = kindProduct.innerText; 
            kindProduct.setAttribute('contenteditable', false);
            kindProduct.removeAttribute('contenteditable');

            currency.textContent = currency.innerText; 
            currency.setAttribute('contenteditable', false);
            currency.removeAttribute('contenteditable');

            barCode.textContent = barCode.innerText; 
            barCode.setAttribute('contenteditable', false);
            barCode.removeAttribute('contenteditable');

            productUnid.textContent = productUnid.innerText; 
            productUnid.setAttribute('contenteditable', false);
            productUnid.removeAttribute('contenteditable');

            numBox.textContent = numBox.innerText; 
            numBox.setAttribute('contenteditable', false);
            numBox.removeAttribute('contenteditable');

            unidPrice.textContent = unidPrice.innerText; 
            unidPrice.setAttribute('contenteditable', false);
            unidPrice.removeAttribute('contenteditable');

            boxPrice.textContent = boxPrice.innerText; 
            boxPrice.setAttribute('contenteditable', false);
            boxPrice.removeAttribute('contenteditable');

            iva.textContent = iva.innerText; 
            iva.setAttribute('contenteditable', false);
            iva.removeAttribute('contenteditable');

            discount.textContent = discount.innerText; 
            discount.setAttribute('contenteditable', false);
            discount.removeAttribute('contenteditable');

            unidSale.textContent = unidSale.innerText; 
            unidSale.setAttribute('contenteditable', false);
            unidSale.removeAttribute('contenteditable');

            boxSale.textContent = boxSale.innerText; 
            boxSale.setAttribute('contenteditable', false);
            boxSale.removeAttribute('contenteditable');

            // await axios.patch(`/api/products/${id}`, { 
            //     productName: productName.value,
            //     description: description.value,
            //     brand: brand.value,
            //     kindProduct: kindProduct.value,
            //     quantityNum: quantityNum.value,
            //     quantityUnit: quantityUnit.value,
            //     unidBox: productUnid.value,
            //     boxes: numBox.value,
            //     barcode: barCode.value,
            //     currency: currency.value,
            //     vat: iva.value,
            //     boxPrice: boxPrice.value,
            //     boxSale: boxSale.value,
            //     unidPrice: unidPrice.value,
            //     unidSale: unidSale.value,
            //     descountNum: discount.value, });
        }
    }
});
