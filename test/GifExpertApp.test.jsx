import { render, screen } from "@testing-library/react";
import { GifExpertApp } from "../src/GifExpertApp";

describe('Pruebas sobre <GifExpertApp />', () => { 
    test('Deberia hacer match con el snapshot', () => { 

        const {container} = render( <GifExpertApp /> );
        
        expect(container).toMatchSnapshot();
     });

     test('Debe añadir categorias', ()=>{
        render(<GifExpertApp />);

        screen.debug();
     });
 });