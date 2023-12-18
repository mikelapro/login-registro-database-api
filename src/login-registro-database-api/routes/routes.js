//#region Imports

const controllers = require( '../controllers/controllers.js' );
const { Router } = require( 'express' );

//#endregion

//#region Declarations

const router = Router();

//#endregion

//#region Routes

// Endpoint: GET / - Ej: http://localhost:3000
router.get( '/', controllers.getApiInfo );

// Endpoint: POST /usuarios
router.post( '/usuarios', controllers.registrarUsuario );

// Endpoint: POST /login
router.post( '/login', controllers.login );

//#endregion

module.exports = router;
