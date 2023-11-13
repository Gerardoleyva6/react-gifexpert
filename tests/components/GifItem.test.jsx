import { render, screen } from "@testing-library/react"
import { GifItem } from "../../src/components/GifItem"


describe('Pruebas en el nombre del coponente ', () => {

    const title = 'Gerardo'
    const url = 'https://gera.com/loquesea.jpg'

    test('debe de hacer match con el snapshot', () => {
        const { container } = render( <GifItem title={title} url={url} /> )
        expect(container).toMatchSnapshot();
    })
    test('debe de mostrar la imagen con el URL y el ALT indicado', () => {
        render( <GifItem title={title} url={url} /> )
        //screen.debug()
        //expect(screen.getByRole('img').src).toBe(url)
        //expect(screen.getByRole('img').alt).toBe(title)
        const {src,alt}= screen.getByRole('img')
        expect(src).toBe(url)
        expect(alt).toBe(alt)
    })
    test('debe de mostrar el titulo en el coponente', () => {
        render( <GifItem title={title} url={url} /> )
        expect(screen.getByText(title)).toBeTruthy();
    })
})