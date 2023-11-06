//#region Imports

const Usuario = require( '../models/usuario.js' );
const usuarioRepository = require( '../repositories/usuario.repository.js' );

//#endregion

//#region Usecase

/**
 */
const getUsuarioByUserName = async ( nombreUsuario ) => {
    const usuario = await usuarioRepository.getByUserName( nombreUsuario );

    return usuario;
};

//#endregion

module.exports = { getUsuarioByUserName };
