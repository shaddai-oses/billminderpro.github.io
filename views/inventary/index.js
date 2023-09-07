import { createNotification, hideNotification } from "../components/notification.js";

const reloadButton = document.querySelector('#reloadButton');
const ulCuredMeats = document.querySelector('#ul-cured-meats');
const divCuredMeats = document.querySelector('#div-cured-meats');
const ulRedMeats = document.querySelector('#ul-red-meats');
const divRedMeats = document.querySelector('#div-red-meats');
const ulWhiteMeats = document.querySelector('#ul-white-meats');
const divWhiteMeats = document.querySelector('#div-white-meats');
const ulVegetables = document.querySelector('#ul-vegetables');
const divVegetables = document.querySelector('#div-vegetables');
const ulDairyProducts = document.querySelector('#ul-dairy-products');
const divDairyProducts = document.querySelector('#div-dairy-products');
const ulFruits = document.querySelector('#ul-fruits');
const divFruits = document.querySelector('#div-fruits');
const ulGrainsCereal = document.querySelector('#ul-grains-cereal');
const divGrainsCereal = document.querySelector('#div-grains-cereal');
const ulOilsFats = document.querySelector('#ul-oils-fats');
const divOilsFats = document.querySelector('#div-oils-fats');
const ulNuts = document.querySelector('#ul-nuts');
const divNuts = document.querySelector('#div-nuts');
const ulBeverages = document.querySelector('#ul-beverages');
const divBeverages = document.querySelector('#div-beverages');
const ulBakeryProducts = document.querySelector('#ul-bakery-products');
const divBakeryProducts = document.querySelector('#div-bakery-products');
const ulSauce = document.querySelector('#ul-sauces');
const divSauce = document.querySelector('#div-sauces');
const selectInventary = document.querySelector('#select-inventary');
const allOption = document.querySelector('#all-option');
const availableOption= document.querySelector('#available-option');
const descountOption = document.querySelector('#descount-option');
const outOfStockOption = document.querySelector('#out-of-stock-option');
const productsLength = document.querySelector('#products-length');
const searchInput = document.querySelector('#search-input');


(async ( ) => {    
  try {
    const {data} = await axios.get('/api/products');
    data.forEach(product => {
      const listItem = document.createElement('li');
      listItem.id = product.id
      // console.log(product.kindProduct);
      listItem.classList.add('flex', 'flex-col', 'border-b-[0.1rem]', 'border-[#535355]', 'pl-8', 'p-2', 'relative')
      listItem.innerHTML = `
      <a href="/product-page/${listItem.id}">
      <button class="absolute top-3 left-1">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-6 h-6 text-white pointer-events-none">
              <path class="pointer-events-none" fill-rule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z" clip-rule="evenodd" />
            </svg>  
      </button>                    
      <div class="flex gap-1">
        <h3 class="product-name text-white font-semibold text-lg">${product.productName}</h3>
        <p class="brand text-white font-semibold text-lg">${product.brand}</p>
        <p class="quantity-num text-white font-semibold text-lg">${product.quantityNum}</p>
        <p class="quantity-unit text-white font-semibold text-lg">${product.quantityUnit}</p>
      </div>     
          <div class="flex gap-1">
              <p class="text-white text-xs">Code:</p>
              <p class="text-white text-xs">${product.barcode}</p>
          </div>
  </a>
      `;

      if (product.kindProduct === 'Cured Meats') {
        divCuredMeats.classList.remove('hidden');
        divCuredMeats.classList.add('flex')
        ulCuredMeats.append(listItem);
      }

      if (product.kindProduct === 'Red Meats') {
        divRedMeats.classList.remove('hidden');
        divRedMeats.classList.add('flex')
        ulRedMeats.append(listItem);
      }

      if (product.kindProduct === 'White Meats') {
        divWhiteMeats.classList.remove('hidden');
        divWhiteMeats.classList.add('flex')
        ulWhiteMeats.append(listItem);
      }

      if (product.kindProduct === 'Vegetables') {
        divVegetables.classList.remove('hidden');
        divVegetables.classList.add('flex')
        ulVegetables.append(listItem);
      }

      if (product.kindProduct === 'Dairy Products') {
        divDairyProducts.classList.remove('hidden');
        divDairyProducts.classList.add('flex')
        ulDairyProducts.append(listItem);
      }

      if (product.kindProduct === 'Fruits') {
        divFruits.classList.remove('hidden');
        divFruits.classList.add('flex')
        ulFruits.append(listItem);
      }

      if (product.kindProduct === 'Grains and Cereal') {
        divGrainsCereal.classList.remove('hidden');
        divGrainsCereal.classList.add('flex')
        ulGrainsCereal.append(listItem);
      }

      if (product.kindProduct === 'Oils and Fats') {
        divOilsFats.classList.remove('hidden');
        divOilsFats.classList.add('flex')
        ulOilsFats.append(listItem);
      }

      if (product.kindProduct === 'Nuts') {
        divNuts.classList.remove('hidden');
        divNuts.classList.add('flex')
        ulNuts.append(listItem);
      }

      if (product.kindProduct === 'Beverages') {
        divBeverages.classList.remove('hidden');
        divBeverages.classList.add('flex')
        ulBeverages.append(listItem);
      }

      if (product.kindProduct === 'Bakery products') {
        divBakeryProducts.classList.remove('hidden');
        divBakeryProducts.classList.add('flex')
        ulBakeryProducts.append(listItem);
      }

      if (product.kindProduct === 'Sauces') {
        divSauce.classList.remove('hidden');
        divSauce.classList.add('flex')
        ulSauce.append(listItem);
      }
  });

  } catch (error) {
    console.log(error);
  }
})();

const {data} = await axios.get('/api/products');
const dataLength = data.length;
productsLength.innerText = ` ${dataLength}`;

searchInput.addEventListener('input', async e => { 
  const searchText = searchInput.value
  const filterProducts = data.filter( product => product.productName.startsWith(searchText));
  console.log(filterProducts);

  // if (filterProducts.length >10 ) {
  //   createNotification('please specify more', false);
  //   setTimeout(() => {
  //     hideNotification()
  //   }, 3000);
  // }

  // if (filterProducts.length >= 1 && filterProducts.length < 10) {
  //   for (let index = 0; index < array.length; index++) {
  //     const element = array[index];
      
  //   }
  // };
});


reloadButton.addEventListener('click', () => {
  window.location.reload();
});


// const allProducts = document.querySelectorAll('li');
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