const InvalidCredentials = require( '../errors/InvalidCredentials.js' );

/**
 * 
 */
const login = ( credenciales ) => {
    if ( credenciales == undefined || credenciales == null || credenciales == {} ) {
        throw new InvalidCredentials();
    } else if ( credenciales.nombreUsuario == 'Mike' && credenciales.contrasena == '12345' ) {
        return 'ljkcfgmljfcjgmjlfcngódjfgjfuidjguidfjgudfjífgjfdugjhfudgjfu';
    } else if ( credenciales.nombreUsuario == 'Mike' && credenciales.contrasena != '12345' ) {
        throw new InvalidCredentials();
    } else if ( credenciales.nombreUsuario != 'Mike' ) {
        throw new InvalidCredentials();
    } else {
        throw new InvalidCredentials();
    }

};

module.exports = { login };
