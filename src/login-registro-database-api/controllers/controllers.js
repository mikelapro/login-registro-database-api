// Controllers = lógica de los endpoints.

//#region Imports

const asyncHandler = require( 'express-async-handler' ); // https://zellwk.com/blog/async-await-express.
const usecases = require( '../usecases/index.js' );

//#endregion

//#region Controllers

/**
 * Obtiene información del API.
 */
const getApiInfo = asyncHandler( async ( req, res ) => {
    res.status( 200 ).json( usecases.getApiInfo() );
} );

/**
 * Registra el usuario especificado como nuevo usuario.
 */
const registrarUsuario = asyncHandler( async ( req, res ) => {
    // usecases.checkApiKey( req.query.apiKey );
    res.status( 200 ).json( await usecases.registrarUsuario( req.body ) );
} );

module.exports = {
    getApiInfo,
    registrarUsuario
};
