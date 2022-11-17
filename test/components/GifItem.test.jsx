const { render, screen } = require("@testing-library/react");
const { GifItem } = require("../../src/components/GifItem");


describe('Pruebas en GetGif', () => {

    const title = 'Saitama';
    const url = 'https://one-punch.com/saitama.jpg';

    test('el codigo deberia ser igual al snapshot', () => {


        const { container } = render(<GifItem title={title} url={url} />)
        expect(container).toMatchSnapshot();


    });

    test('Debe mostrar la imagen con el URL y el ALT indicado', () =>{
        render( <GifItem title={title} url={url} />);
        //screen.debug();

       /* Una forma facil de hacer un expect: 
        expect( screen.getByRole('img').src).toBe( url );
        expect( screen.getByRole('img').alt ).toBe( title ); 
        
        forma mas profesional:
        */
        const { src, alt } = screen.getByRole('img');
        expect( src ).toBe( url );
        expect( alt ).toBe( alt );
    });

    test('debe mostrar el titulo en el componente', ()=>{
        render( <GifItem title={ title } url={url} />)
    })
});