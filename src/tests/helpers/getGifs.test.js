const { getGifs } = require("../../helpers/getGifs");

describe('Pruebas con getGifts Fetch', () => {
    
    test('Debe de traer 10 elementos', async() => {
        
        const gifs = await getGifs('Bob Esponja');

        expect(gifs.length).toBe(10)

    })
    
    test('No debe de traer elementos', async() => {
        
        const gifs = await getGifs('');

        expect(gifs.length).toBe(0)

    })


})

