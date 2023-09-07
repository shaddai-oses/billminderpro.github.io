// para conectar a mongo desde la dependencia moongose
const mongoose = require('mongoose');

// esto es para guardar la informacion como una tabla de sql y se le especifica que es con las primitivas de js
// para verificar el usuario desde el correo se usa verified
const sellSchema = new mongoose.Schema({
  boxOrUnid: String,
  producstId: String,
  quantity: Number,
  totalpay: Number,
  delivery: String,
  payMethods: String
});

// para recibir el id de la forma que uno conoce y lo mismo con la informacion que este encriptada como la password _v es para la version
// configurar la respuesta del usuario
sellSchema.set('toJSON', {
  transform: (document, returnedObject) => {
    returnedObject.id = returnedObject._id.toString();
    delete returnedObject._id;
    delete returnedObject.__v;
  },
});

// para usarlo en otros archivos
const Sell = mongoose.model('Sell', productSchema);

module.exports = Sell;