import { renderHook, waitFor } from "@testing-library/react"
import { useFetchGifs } from "../../src/hooks/useFetchGifs"

describe('Pruebas en el hook useFetchGifs', () => {
    test('debe de regresar el estado incial ', () => {

        const { result } = renderHook(() => useFetchGifs('Vegueta'))
        const { images, isLoading } = result.current
        //console.log(result)
        expect(images.length).toBe(0)
        expect(isLoading).toBeTruthy()
    })
    test('debe de regresar un arrglo de imagenes y el isLoading en false', async() => { ///Evaluaciond e hook

        const { result } = renderHook(() => useFetchGifs('Vegueta'))
        await waitFor(
            ()=> expect( result.current.images.length).toBeGreaterThan(0)
            /*{
                timeout: 700
            }*/
        )
        
        const { images, isLoading } = result.current
        expect(images.length).toBeGreaterThan(0)
        expect(isLoading).toBeFalsy()
    })

})