import { GetGifs } from "../../src/helpers/GetGifs";

describe('Test sobre Getgifs', () => { 
    test("Debe retornar un arreglo de gifs", async()=>{
        const gifs = await GetGifs('One Punch')

        expect( gifs.length ).toBeGreaterThan( 0 );
        expect( gifs[0] ).toEqual({
            id: expect.any( String ),
            title: expect.any( String ),
            url: expect.any( String ),
        })
    });
 });