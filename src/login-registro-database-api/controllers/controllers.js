// Controllers = lógica de los endpoints.

//#region Imports

const asyncHandler = require( 'express-async-handler' ); // https://zellwk.com/blog/async-await-express.
const usecases = require( '../usecases/index.js' );
//const { use } = require( '../routes/routes.js' );
require( 'dotenv' ).config();

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

/**
 * 
 */
const login = asyncHandler( async ( req, res ) => {
    res.status( 200 ).json( await usecases.login( req.body ) );
} );

/**
 * 
 */
const getUsuario = asyncHandler( async ( req, res ) => {
    const accessToken =  req.headers.authorization;
    const decodedToken = usecases.getDecodedToken( accessToken, process.env.JWT_SECRET );
    const userName = decodedToken.nombreUsuario;

    res.status( 200 ).json( await usecases.getUsuarioByUserName( userName ) );
} );

module.exports = {
    getApiInfo,
    registrarUsuario,
    login,
    getUsuario
};
