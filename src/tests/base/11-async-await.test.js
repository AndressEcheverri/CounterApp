import '@testing-library/jest-dom';
import { getImagen } from '../../base/11-async-await';


describe('Pruebas en async-await.js', () => {

    test('debe retornar la url de la imagen ', async () => {

        const url = await getImagen();

        expect( typeof url ).toBe('string');
        
    })
    
    
})
