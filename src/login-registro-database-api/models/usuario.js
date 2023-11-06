// Crea y almacena datos del usuario registrado.
module.exports = class Usuario {
    nombreUsuario;
    nombre;
    apellido;
    contrasena;
    genero;

    constructor( nombreUsuario, nombre, apellido, contrasena, genero ) {
        this.nombreUsuario = nombreUsuario;
        this.nombre = nombre;
        this.apellido = apellido;
        this.contrasena = contrasena;
        this.genero = genero;
    }
}
