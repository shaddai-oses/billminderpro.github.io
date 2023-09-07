// para conectar a mongo desde la dependencia moongose
const mongoose = require('mongoose');

// esto es para guardar la informacion como una tabla de sql y se le especifica que es con las primitivas de js
// para verificar el usuario desde el correo se usa verified
const productSchema = new mongoose.Schema({
  productName: String,
  description: String,
  brand: String,
  kindProduct: String,
  quantityNum: Number, 
  quantityUnit: String,
  unidBox: Number,
  boxes: Number,
  barcode: Number,
  currency: String,
  vat: String,
  boxPrice: Number,
  boxProfit: Number,
  boxSale: Number,
  unidPrice: Number,
  unidProfit: Number,
  unidSale: Number,
  descount: String,
  descountNum: Number,
});

// para recibir el id de la forma que uno conoce y lo mismo con la informacion que este encriptada como la password _v es para la version
// configurar la respuesta del usuario
productSchema.set('toJSON', {
  transform: (document, returnedObject) => {
    returnedObject.id = returnedObject._id.toString();
    delete returnedObject._id;
    delete returnedObject.__v;
  },
});

// para usarlo en otros archivos
const Product = mongoose.model('Product', productSchema);

module.exports = Product;