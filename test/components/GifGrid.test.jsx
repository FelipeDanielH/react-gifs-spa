const { render, screen } = require("@testing-library/react");
const { GifGrid } = require("../../src/components/GifGrid");
const { useFetchGifs } = require("../../src/hooks/useFetchGifs");

jest.mock('../../src/hooks/useFetchGifs');

describe('Pruebas en <GifGrid />', () => {
    const category = 'One Punch'
    
    test('de mostrar el loading inicialmente', () => {

        useFetchGifs.mockReturnValue({
            images: [],
            isLoading: true
        })

        render( <GifGrid category={category} />)
        //screen.debug();

        expect( screen.getByText('Cargando...') );
        expect( screen.getByText( category ) );
    });

    test('debe mostrar items condo se cargan las imagenes mediante useFetchGif', () => { 
        const gifs = [
            {
                id: 'ABC',
                title: 'Saitama',
                url: 'https://localhost/saitama.jpg',
            },
            {
                id: 'ABC',
                title: 'Saitama',
                url: 'https://localhost/saitama.jpg',
            }
        ]
        
        useFetchGifs.mockReturnValue({
            images: gifs,
            isLoading: false
        })
        
        render( <GifGrid category={category } /> );

        expect( screen.getAllByRole('img').length).toBe(2);
    });
});