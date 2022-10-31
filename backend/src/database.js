const mongoose = require("mongoose");
const URI = process.env.MONGODB_URI
  ? process.env.MONGODB_URI
  : "mongodb+srv://yanitza:yanitza@cluster0.ddsljbh.mongodb.net/transporte_publico_ensenada";

console.log(URI);
mongoose.connect(URI, (err, db) => {
  if (err) throw "database- " + err;
  console.log("Database created!");
});

// connection.on('connected', ()=> {console.log('Conexion correcta a MongoDB')})
// connection.on('error', ()=> {console.log('Error en la conexion a MongoDB')})

const connection = mongoose.connection;

connection.once("open", () => {
  console.log("DB is connected");
});

module.exports = mongoose;
