//#region Imports

const Usuario = require( '../models/usuario.js' );
const usuarioRepository = require( '../repositories/usuario.repository.js' );
// const characterRepository = require( '../repositories/character.repository.js' );

//#endregion

//#region Usecase

/**
 * Registra el usuario especificado como nuevo usuario.
 * @param {Usuario} usuario Datos para tomar las modificaciones.
 * @returns El nuevo usuario con su nuevo id.
 */
const registrarUsuario = ( usuario ) => {
    const usuarioCreado = usuarioRepository.create( usuario );
}

module.exports = { registrarUsuario };
