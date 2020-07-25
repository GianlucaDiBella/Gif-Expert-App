import React from 'react';
import '@testing-library/jest-dom';
const { shallow } = require("enzyme")
const { AddCategory } = require("../../components/AddCategory")

describe('Pruebas en el componente AddCategory', () => {

    const setCategories = jest.fn();
    let wrapper = shallow( <AddCategory setCategories={setCategories}/>);

    beforeEach(()=> {
        jest.clearAllMocks();
        wrapper = shallow( <AddCategory setCategories={setCategories}/>);
    })


    test('Debe de mostrarse correctamente', () => {

        expect(wrapper).toMatchSnapshot()

    })
    test('Debe de cambiar la caja de texto', () => {

        const input = wrapper.find( 'input' );
        const value = 'Hola mundo'
        input.simulate('change', { target: { value }  } );
        expect(wrapper.find('p').text().trim()).toBe(value)

    })
    
    test('NO debe de postear la informacion onSubmit', () => {
         
        wrapper.find('form').simulate('submit', { preventDefault(){} } );
    
        expect(setCategories).not.toHaveBeenCalled();
    })
    test('Debe de llamar el setCategories y limpiar la caja de texto', () => {
        
        //Simulacion del input change
        const input = wrapper.find( 'input' );
        const value = 'Hola mundo'
        input.simulate('change', { target: { value }  } );

        //Simulacion del submit
        wrapper.find('form').simulate('submit', { preventDefault(){} } );
        expect(setCategories).toHaveBeenCalledWith( expect.any(Function) );
                           
        //Verificacion de que el input este vacio
        expect(input.prop('value')).toBe('')
        

    })
    

})
