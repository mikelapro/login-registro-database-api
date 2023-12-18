/**
 * Error personalizado para lanzar cuando las credenciales son invalidas.
*/ 
module.exports = class InvalidCredentials extends Error {
    // eslint-disable-next-line no-unused-vars
    constructor( message ) {
        super( 'Credenciales incorrectas.' );
        this.errorCode = 'InvalidCredentials';
    }
};
