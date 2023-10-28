// Crea y almacena datos del usuario registrado.
module.exports = class Usuario {
    usuario;
    nombre;
    apellido;
    contrasena;
    genero;

    constructor( usuario, nombre, apellido, contrasena, genero ) {
        this.usuario = usuario;
        this.nombre = nombre;
        this.apellido = apellido;
        this.contrasena = contrasena;
        this.genero = genero;
    }
}
