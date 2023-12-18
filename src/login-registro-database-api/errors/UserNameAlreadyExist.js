// Códigos de respuesta http: https://www.semrush.com/blog/http-status-codes/.

/**
 * Error personalizado para lanzar cuando el nombre de usuario ya existe en la base de datos.
 */
module.exports = class UserNameAlreadyExist extends Error {
    // eslint-disable-next-line no-unused-vars
    constructor( message ) {
        super( 'Este nombre de usuario ya existe.' );
        this.errorCode = 'UserNameAlreadyExist';
    }
};
