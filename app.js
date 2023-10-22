const express = require( 'express' );
require( 'dotenv' ).config();

const api = express();
const port = process.env.PORT;

api.get( '/', ( req, res ) => {
    res.send( 'Hola  api' );

} );


// Oreja escuchando en el puerto {port} los request al api.
api.listen( port, () => {
    console.log( `API listening on port ${port}` );
    console.log( `Http://localhost:${port}` );
} );

