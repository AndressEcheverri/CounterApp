import '@testing-library/jest-dom';
import { getHeroeById, getHeroesByOwner } from '../../base/08-imp-exp';
import heroes from '../../data/heroes';




describe('Pruebas en imp-exp.js', () => {
    
    test('Debe retornar un heroe por ID ', () => {

        const id = 1;
        const heroe = getHeroeById( id );

        const heroeData = heroes.find( h => h.id === id );

        expect( heroe ).toEqual( heroeData );
        
    });

    test('debe retornar undefined si el heroe no existe', () => {

        const id = 18;
        const heroe = getHeroeById(id);

        expect( heroe ).toBe( undefined );
        
    });

    //debe retornar un array de los heroes de dc
    //owner
    //toEqual al array filter
    //retonar array con los heroes de marvel
    //length = 2 toBe
    test('retonar array de los heroes de DC', () => {

        const owner = 'DC';
        const heroe = getHeroesByOwner( owner );
        const heroeData = heroe.filter( h => h.owner === owner );

        expect( heroe ).toEqual( heroeData );
        
    });

    test('retonar array de los heroes de Marvel', () => {

        const owner = 'Marvel';
        const heroe = getHeroesByOwner( owner );

        expect( heroe.length ).toBe(2);
        
    });
    
    
})
