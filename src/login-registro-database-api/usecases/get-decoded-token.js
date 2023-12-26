const jwt = require( 'jsonwebtoken' );

/**
 * Obtiene el token decodificado.
 * @param {String} token Un jwt. 
 * @param {String} secret Secret para encodear el token.
 * @throws {JsonWebTokenError} Cuando el token es inválido. https://github.com/auth0/node-jsonwebtoken#jsonwebtokenerror
 * @throws {TokenExpiredError} Cuando el token está expirado. https://github.com/auth0/node-jsonwebtoken#tokenexpirederror
 * @returns El token decodificado.
 */
const getDecodedToken = ( token, secret ) => {
    let decoded2;

    jwt.verify( token, secret, ( err, decoded ) => {
        decoded2 = decoded;

        if ( err ) {
            throw err;
        }
    } );

    return decoded2;
};

module.exports = { getDecodedToken };
