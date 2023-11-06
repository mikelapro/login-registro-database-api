// eslint-disable-next-line no-unused-vars
const globalErrorHandler = ( err, req, res, next ) => {
    // Responde un json, pero indicando que es un error.
    // Códigos de respuesta http: https://www.semrush.com/blog/http-status-codes/.

    switch ( err.name ) {
        case 'UserNameAlreadyExist':
            res.status( 403 ).json( {
                status: 'error',
                message: 'Este nombre de usuario ya existe.'
            } );
            break;

    }
};

module.exports = {
    globalErrorHandler
};
