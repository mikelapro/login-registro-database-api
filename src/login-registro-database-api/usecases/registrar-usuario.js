//#region Imports

const usuarioRepository = require( '../repositories/usuario.repository.js' );
const { getUsuarioByUserName } = require( './get-usuario-by-user-name.js' );
const UserNameAlreadyExist = require( '../errors/UserNameAlreadyExist.js' );
const bcrypt = require( 'bcryptjs' );

//#endregion

//#region Usecase

const encriptarPassword = async ( password ) => {
    const hash = await bcrypt.hash( password, 1 );
    return hash;
};

/**
 * Registra el usuario especificado como nuevo usuario. 
 * @param {Usuario} usuario Datos para tomar las modificaciones.
 * @returns El nuevo usuario con su nuevo id.
 * @throws {UserNameAlreadyExist} Cuando el nombre de usuario ya existe en la base de datos.
 */
const registrarUsuario = async ( usuario ) => { 

    // Verifica si ya existe buscándolo primero en la dase de datos.
    const usuarioVerificador = await getUsuarioByUserName( usuario.nombreUsuario );

    if ( usuarioVerificador == null ) {
        let passwordEncriptada = await encriptarPassword( usuario.contrasena );
        usuario.contrasena = passwordEncriptada;
        
        // No se encontro el usuario, así que podémos registrarlo.`
        const usuarioCreado = await usuarioRepository.create( usuario );

        return usuarioCreado;
    } else {
        // Se encontró un usuario con el mismo username asi que no debemos registrarlo porque ya existe.
        throw new UserNameAlreadyExist();
    }
};

//#endregion

module.exports = { registrarUsuario };
