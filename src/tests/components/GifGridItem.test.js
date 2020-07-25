import React from 'react';
import { GifGridItem } from '../../components/GifGridItem';
import {shallow} from 'enzyme';
import '@testing-library/jest-dom';

describe('Pruebas en GifGridItem', () => {

    const title='Un titulo'
    const url = 'https://localhost/algo.png'

    const wrapper = shallow(<GifGridItem title={title} url={url}/>)


    test('Debe mostrar el componente <GifGridItem /> correctamente', () => {
       
                
        expect(wrapper).toMatchSnapshot();
    
    })
    test('Debe de tener un parrafo con el title', () => {
        
        const p = wrapper.find('p');
        expect(p.text().trim()).toBe( title )

    })
    test('La imagen debe tener un src y un alt', () => {
        
        const img = wrapper.find('img');
        // console.log(img.props('src'))
        expect(img.prop('src')).toBe(url)
        expect( img.prop('alt')).toBe(title)

    })
    test('la clase debe tener animate__fadeIn', () => {
        const div = wrapper.find('div');
        const className = div.prop('className')
        //console.log(div.prop('className))
        expect( className.includes('animate__fadeIn')).toBe(true)
    })
    
    
    
    
})
