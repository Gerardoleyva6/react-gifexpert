//Tarea ver ejecicio de la seccion 8 penultima calse PRUEBAS DE TAREA video de 4min //SIN SOLUCION//
import { render, screen } from '@testing-library/react'
import { GifExpertApp } from '../src/GifExpertApp'

describe('Pruebsa en el componente GifExpertApp', () => {
    test('should', () => {
        render(<GifExpertApp />)
        screen.debug()
    })
})