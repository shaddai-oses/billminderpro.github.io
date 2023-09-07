const productsRouter = require('express').Router( );
const Product = require('../models/product');


productsRouter.post('/', async (request, response) => {
    const { productName, description, brand, kindProduct, quantityNum, quantityUnit, unidBox, boxes, barcode, currency, vat, boxPrice, boxProfit, boxSale, unidPrice, unidProfit, unidSale, descount, descountNum } = request.body;
    console.log(productName, description, brand, kindProduct, quantityNum, quantityUnit, unidBox, boxes, barcode, currency, vat, boxPrice, boxProfit, boxSale, unidPrice, unidProfit, unidSale, descount, descountNum);

  if ( !productName || !description || !brand || !kindProduct || !quantityNum || !quantityUnit || !unidBox || !boxes || !barcode || !currency || !vat || !boxPrice || !boxProfit || !boxSale || !unidPrice || !unidProfit || !unidSale || !descount || !descountNum ) {
    return response.status(400).json({error: 'All fields are required.' });
  } 

//   // para verificar si ya existe ese mismo producto 
//   const productExist = await product.find({ productName, brand, kindProduct, quantityUnit });
//   if (productExist) {
//     return response.status(400).json({error: 'This product already exist.'})
//   }

  const newProduct = new Product({
    productName,
    description,
    brand,
    kindProduct,
    quantityNum,
    quantityUnit,
    unidBox,
    boxes,
    barcode,
    currency,
    vat,
    boxPrice,
    boxProfit,
    boxSale,
    unidPrice,
    unidProfit,
    unidSale,
    descount,
    descountNum,
  });

// para guardar al nuevo usuario
  const savedProduct = await newProduct.save();
  console.log(savedProduct);

// 201 es creado
return response.status(201).json('Product created. For more information look in the inventary page');
});

// para encontrar todos los productos
productsRouter.get('/', async (request, response) => {
    try {
        const products = await Product.find(); // Obtiene todos los productos
        response.json(products); // Envía los productos como respuesta
        console.log(products);
    } catch (error) {
        response.status(500).json({ error: 'An error occurred while fetching products.' });
    }
});

// para encontrar un solo producto por el id
productsRouter.get('/:id', async (request, response) => {
  try {
    console.log(request.params.id);
    const productId = request.params.id;
    // Busca el producto por su ID en la base de datos
    const product = await Product.findById(productId);
    // Devuelve los detalles del producto como respuesta
    return response.status(200).json(product);
  } catch (error) {
    console.log(error);
    response.status(500).json({ error: 'An error occurred while fetching the product.' });
  }
});

// para borrar el producto
productsRouter.delete('/:id', async (request, response) =>{
  try {
    // se solicita el id
    const productId = request.params.id;

    // Eliminar el producto por su id
    await Product.findByIdAndDelete(productId);

    //para una respuesta exitosa
    return response.sendStatus(204);
  } catch (error) {
    console.log(error);
    return response.status(500).json({ error: "Error while deleting the product." });
  }
});

// Editar el producto 
productsRouter.patch('/:id', async (request, response) => {
  try {
      const productId = request.params.id;
      const { productName, description, brand, kindProduct, quantityNum, quantityUnit, 
              boxes, unidBox, barcode, currency, vat, boxPrice, boxSale, unidPrice, 
              unidSale, descountNum } = request.body;

      // se busca el producto por su id en la base de datos y se encuentran por el id y se actualiza
      const product = await Product.findByIdAndUpdate(productId, {
          productName, description, brand, kindProduct, quantityNum, quantityUnit, 
          boxes, unidBox, barcode, currency, vat, boxPrice, boxSale, unidPrice, 
          unidSale, descountNum
      });

      // devuelve el producto editado como una respuesta 
      return response.status(200).json(product);
  } catch (error) {
      console.error("Error while editing the producto:", error);
      return response.status(500).json({ error: "Error al editar el producto" });
  }
});

  

// // para exportar de una vez el router
module.exports = productsRouter;