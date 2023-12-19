const InvalidCredentials = require( '../errors/InvalidCredentials.js' );
const { getUsuarioByUserName } = require( './get-usuario-by-user-name.js' );

/**
 * Verifica que las credenciales especificadas sean validas, si lo son, devuelve un token 
 * jwt.
 * @param {Object} credenciales Credenciales ingresadas por el usuario. 
 * @returns Un token jwt.
 * @throws {InvalidCredentials} Cuando las credenciales son incorrectas.
 */
const login = async ( credenciales ) => {

    if ( Object.keys( credenciales ).length === 0 ) {
        throw new InvalidCredentials(); // Ok.
    }
    
    const usuario = await getUsuarioByUserName( credenciales.nombreUsuario );
    
    if ( usuario == undefined || usuario == null || usuario == {} ) {
        throw new InvalidCredentials(); // Ok.
    } else if ( credenciales.nombreUsuario == usuario.nombreUsuario && credenciales.contrasena == usuario.contrasena ) {
        return 'ljkcfgmljfcjgmjlfcngódjfgjfuidjguidfjgudfjífgjfdugjhfudgjfu';// ok.
    } else if ( credenciales.nombreUsuario == usuario.nombreUsuario && credenciales.contrasena != usuario.contrasena ) {
        throw new InvalidCredentials();// ok.
    } else {
        throw new InvalidCredentials();
    }

};

module.exports = { login };
