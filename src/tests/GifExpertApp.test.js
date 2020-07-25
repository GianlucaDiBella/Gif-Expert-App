import React from 'react';
import '@testing-library/jest-dom';
import { GifExpertApp } from '../GifExpertApp';
import { shallow } from 'enzyme';

describe('Pruebas en el componente de GifExpertApp', () => {
    test('se debe mostrar el componente correctamente', () => {
        
        const wrapper = shallow(<GifExpertApp/>)
        expect(wrapper).toMatchSnapshot()

    })

    test('debe de mostrar una lista de categorias', () => {
        const categories = ['Sponge Bob', 'Patricio']
        const wrapper = shallow(<GifExpertApp defaultCategories={categories}/>);
        expect(wrapper).toMatchSnapshot();
        expect(wrapper.find('GifGrid').length).toBe(categories.length)
        
    })
    
})
