const InvalidCredentials = require( '../errors/InvalidCredentials.js' );
const { getUsuarioByUserName } = require( './get-usuario-by-user-name.js' );
const jwt = require( 'jsonwebtoken' );
const bcrypt = require( 'bcryptjs' );
require( 'dotenv' ).config();

/**
 * Obtiene un token con el payload especificado.
 * @param {Object} payload Objeto que se va a guardar dentro del token para luego poder leerlo.
 * @param {String} expiresIn Tiempo de expiración expresado en string. Ej: "2 days", "10h",
 *  "7d".
 * @returns 
*/
const getToken = ( payload, expiresIn ) => {

    const token = jwt.sign( payload, process.env.JWT_SECRET, { expiresIn: expiresIn } );

    return token;
};

const verificarPassword = async ( password, passwordEncriptada ) => {
    const resultado = await bcrypt.compare( password, passwordEncriptada );
    return resultado;
};

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
    } else if ( credenciales.nombreUsuario == usuario.nombreUsuario 
             && await verificarPassword( credenciales.contrasena, usuario.contrasena ) ) {

        const token = getToken( { nombreUsuario: usuario.nombreUsuario }, '12h' );
        return token; 

    } else if ( credenciales.nombreUsuario == usuario.nombreUsuario && credenciales.contrasena != usuario.contrasena ) {
        throw new InvalidCredentials();// ok.
    } else {
        throw new InvalidCredentials();
    }

};

module.exports = { login };
