const { useFetchGifs } = require("../../hooks/useFetchGifs")
const { renderHook } = require("@testing-library/react-hooks")

describe('Pruebas en el hook useFetchGifs', () => {
    test('debe de retornar el estado inicial', async() => {
        const category = 'Bob esponja'

        const { result, waitForNextUpdate } = renderHook( () => useFetchGifs (category))
        const {data, loading} = result.current;
        // const { data: images, loading} = useFetchGifs(category);
        // console.log(images, loading)
        await waitForNextUpdate();

        
        expect(data).toEqual([])
        expect(loading).toBe(true)
    })
    test('debe de retornar un arreglo de imagenes y loading en falso', async() => {
        const category = 'Bob esponja'
        const { result, waitForNextUpdate } = renderHook( () => useFetchGifs (category))
        await waitForNextUpdate();

        const {data, loading} = result.current;

        expect(data.length).toBe(10)
        expect(loading).toBe(false)

    })
    
})
