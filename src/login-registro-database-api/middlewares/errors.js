// eslint-disable-next-line no-unused-vars
const globalErrorHandler = ( err, req, res, next ) => {
    // Responde un json, pero indicando que es un error.
    // Códigos de respuesta http: https://www.semrush.com/blog/http-status-codes/.

    switch ( err.errorCode ) {
        case 'UserNameAlreadyExist':
            res.status( 403 ).json( {
                status: 'error',
                message: 'Este nombre de usuario ya existe.',
                errorCode: err.errorCode,
            } );
            break;

        case 'InvalidCredentials':
            res.status( 401 ).json( {
                status: 'error',
                message: err.message,
                errorCode: err.errorCode,
            } );
            break;
        
        default:
            res.status( 500 ).json( {
                status: 'error',
                message: err.message
            } );
            break;
    }

};

module.exports = {
    globalErrorHandler
};
