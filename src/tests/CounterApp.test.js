import React from 'react';
import '@testing-library/jest-dom';

import CounterApp from '../CounterApp';

import { shallow } from 'enzyme';


describe('Pruebas en el counter', () => {

    let wrapper = shallow( <CounterApp />);

    beforeEach( () => {

        wrapper = shallow( <CounterApp />);

    });

    test('Debe mostrar counterApp correctamente ', () => {

        expect( wrapper ).toMatchSnapshot();
        
    });


    test('Debo mostrar el valor de 100 por defecto', () => {

        const wrapper = shallow(<CounterApp value  = { 100 } />);

        const counterText =  wrapper.find('h2').text().trim(); // el trim sirve para que no halla espacios a la hora de imprimir algo por pantalla.

        expect( counterText ).toBe( '100' );
        
    });
    

    test('Debe incrementar contador', () => {

        wrapper.find('button').at(0).simulate('click');

        const counterText =  wrapper.find('h2').text().trim();

        expect( counterText ).toBe('11');
        
    });


    test('Debe decrementar contador', () => {

        wrapper.find('button').at(2).simulate('click');

        const counterText =  wrapper.find('h2').text().trim();

        expect( counterText ).toBe('9');
        
    });


    test('Debe resetear al valor por defecto ', () => {

        const wrapper = shallow( <CounterApp value = { 105 } /> );

         wrapper.find('button').at(0).simulate('click');
         wrapper.find('button').at(0).simulate('click');
         wrapper.find('button').at(1).simulate('click');

         const counterText = wrapper.find('h2').text().trim();

         expect( counterText ).toBe('105');
         
    });
    
    
    
    
    
});
