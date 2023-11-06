// Repository: Controla la persistencia (lectura y escritura (insertar, actualizar y eliminar)) 
// de datos en una base de datos. Cada colección debe tener su propio repository.

//* NOTA: Para que funcione este repository, hay que conectarse a la base de datos primero.
//* Ver: db-connection.js.

//#region Imports

const mongoose = require( 'mongoose' );

//#endregion

//#region Declarations

const dataModelName = 'Usuario'; // Nombre del modelo de base de datos.
const collectionName = 'usuarios'; // Nombre de la collection de la base de datos (igual al que está en la base de datos).
const schema = new mongoose.Schema( {}, { strict: false, versionKey: false } ); // Mongoose Schema (sin schema, libre!).
const Mongoose = mongoose.model( dataModelName, schema, collectionName ); // Mongoose model (da operaciones de la base de datos).

//#endregion

//#region Methods

const create = async ( usuario ) => {
    const usuarioCreatedDoc = await Mongoose.create( usuario );

    // Convierte a POJOS.
    // https://mongoosejs.com/docs/api/document.html#Document.prototype.toObject().
    const usuarioCreated = usuarioCreatedDoc.toObject();

    return usuarioCreated;
};

const getByUserName = async ( userName ) => {
    const usuario = await Mongoose.findOne( { nombreUsuario:userName } ).lean().exec();
    return usuario;
};

//#endregion

module.exports = {
    create,
    getByUserName
};
