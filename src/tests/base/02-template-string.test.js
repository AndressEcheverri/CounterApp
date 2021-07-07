import '@testing-library/jest-dom';

import { getSaludo } from "../../base/02-template-string"


describe('Pruebas en template-string.test.js', () => {

    test('getSaludo debe retornar Hola Andres!', () => {

        const nombre = 'Andres';

        const saludo = getSaludo( nombre );

        expect( saludo ).toBe('Hola ' + nombre + '!' );
     
    });
    
    //getSaludo debe retornar Hola Felipe! si no hay argumento nombre

    test('getSaludo debe retornar Hola Felipe! si no hay argumento nombre', () => {

        const saludo = getSaludo();

        expect( saludo ).toBe('Hola Felipe!');

    });
    
    
})
