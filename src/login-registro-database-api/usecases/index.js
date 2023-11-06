const { getApiInfo } = require( './get-api-info.js' );
const { registrarUsuario } = require( './registrar-usuario.js' );
const { getUsuarioByUserName } = require( './get-usuario-by-user-name.js' );

module.exports = {
    getApiInfo,
    registrarUsuario,
    getUsuarioByUserName
};
