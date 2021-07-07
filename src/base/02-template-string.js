


const nombre   = 'Andres';
const apellido = 'Echeverri';


// const nombreCompleto = nombre + ' ' + apellido;
const nombreCompleto = `${ nombre } ${ apellido }`;

//console.log( nombreCompleto );


export function getSaludo( nombre = 'Felipe' ) {
    return 'Hola ' + nombre + '!';
}

//console.log( `Este es un texto: ${ getSaludo( nombre ) }  ` );