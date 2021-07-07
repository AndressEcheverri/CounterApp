import React from 'react';
import '@testing-library/jest-dom';
//import { render } from '@testing-library/react';
import PrimeraApp from '../PrimeraApp';

import { shallow } from 'enzyme';

describe('Pruebas en primeraApp.js', () => {

   // test('debe mostrar el mensaje "hola, soy pipe" ', () => {
        
     //   const saludo = 'Hola,soy pipe';

       // const { getByText } = render( <PrimeraApp saludo={ saludo } />);

       // expect( getByText(saludo) ).toBeInTheDocument();

    //})

    test('debe mostrar <PrimeraApp /> correctamente', () => {

        const saludo = 'hola, soy pipe';
        const wrapper = shallow(<PrimeraApp saludo = { saludo } />);

        expect( wrapper ).toMatchSnapshot();
        
    });


    test('debe mostrar el subtitulo enviado por props', () => {

        const saludo = 'hola, soy pipe';
        const subtitulo = 'hola, soy un subtitulo';

        const wrapper = shallow(
                <PrimeraApp 
                
                    saludo = { saludo }
                    subtitulo = { subtitulo }
                
                />
        );


        const textoParrafo = wrapper.find('p').text();

        expect( textoParrafo ).toBe( subtitulo );
            
    });

   
    
    
    
});
