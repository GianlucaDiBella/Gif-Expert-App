import React from 'react';
const { GifGrid } = require("../../components/GifGrid")
const { shallow } = require("enzyme")
import '@testing-library/jest-dom'
import { useFetchGifs } from '../../hooks/useFetchGifs';
jest.mock('../../hooks/useFetchGifs')

describe('Pruebas en el componente <GifGrid />', () => {
    const category = 'Bob Esponja'
    
    const gifs = [{
        id: 'ABC',
        url: 'https://localhost/imagen.png',
        title: 'Titulo'
    },
    {
        id: 'CBA',
        url: 'https://localhost/imagen.png',
        title: 'Titulo'
    }
]

    useFetchGifs.mockReturnValue({
        data: gifs,
        loading: false
    });

    let wrapper = shallow(<GifGrid category={category}/>)

    beforeEach ( () => {
        let wrapper = shallow(<GifGrid category={category}/>)
    })

   test('El componente debe mostrarse correctamente', () => { 
    //    const wrapper = shallow(<GifGrid category={category}/>)
       expect(wrapper).toMatchSnapshot()
   })

   test('debe de mostrar items cuando se cargan imagenes con useFetchGifs', () => {

        expect(wrapper.find('p').exists()).toBe(false)
        expect(wrapper.find('GifGridItem').length).toBe( gifs.length)
   })
   
    
})
