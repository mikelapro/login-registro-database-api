//#region Imports

const Usuario = require( '../models/usuario.js' );
const usuarioRepository = require( '../repositories/usuario.repository.js' );
const { getUsuarioByUserName } = require( './get-usuario-by-user-name.js' );
const userNameAlreadyExist = require( '../errors/UserNameAlreadyExist.js' );

//#endregion

//#region Usecase

/**
 * Registra el usuario especificado como nuevo usuario.
 * @param {Usuario} usuario Datos para tomar las modificaciones.
 * @returns El nuevo usuario con su nuevo id.
 */
const registrarUsuario = async ( usuario ) => {
    // TODO: 
    // Obtener el usuario correspondiente al nombreUsuario.
    // Si ya existe un usuario con ese nombre de usuario (vino algo).

    const usuarioVerificador = await getUsuarioByUserName( usuario.nombreUsuario );

    if ( usuarioVerificador == null ) {
        // No se encontro el usuario, así que pódémos registrarlo.`
        const usuarioCreado = await usuarioRepository.create( usuario );

        return usuarioCreado;
    } else {
        // Se encontró un usuario con el mismo username asi que no debemos registrarlo porque ya existe.
        throw new userNameAlreadyExist();
    }

};

//#endregion

module.exports = { registrarUsuario };
