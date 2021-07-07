import '@testing-library/jest-dom';

import { getUser, getUsuarioActivo } from "../../base/05-funciones";


describe('Pruebas en funciones.test.js', () => {

    test('getUser debe retornar un objeto', () => {

        const userTest = {
            uid: 'ABC123',
        username: 'Pipe_1234'

        }

        const user = getUser();

        expect( user ).toEqual(userTest)
        
    });

    test('getUsuarioActivo debe retornar un objeto', () => {

        const nombre = 'Pipe';
        const user = getUsuarioActivo(nombre);

        expect( user ).toEqual( {
            uid: 'ABC567',
            username: nombre
        });
        
    });
    
    
    
})
