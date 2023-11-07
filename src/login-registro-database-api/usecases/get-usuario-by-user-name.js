//#region Imports

const Usuario = require( '../models/usuario.js' );
const usuarioRepository = require( '../repositories/usuario.repository.js' );

//#endregion

//#region Usecase

/**
 * Obtiene el usuario correspondiente al userName especificado.
 * @param {String} userName El userName a buscar. 
 * @returns El usuario correspondiente o null. 
 */
const getUsuarioByUserName = async ( userName ) => {
    const usuario = await usuarioRepository.getByUserName( userName );

    return usuario;
};

//#endregion

module.exports = { getUsuarioByUserName };
