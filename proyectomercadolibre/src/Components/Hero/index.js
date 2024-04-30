import React from 'react'
import { Container, Row } from './styles'

export const Hero = () => {
  return (
    <Container>
      <Row>
        <a href="#">Maquillaje</a>
        <a href="#">Accesorios de Belleza</a>
        <a href="#" className='volver'>Volver al Listado</a>
        <a href="#">Esmaltes</a>
        <a href="#">Hombres</a>
      </Row>
      <Row>
        <a href="#">Compartir</a>
        <a href="#">Vender una igual</a>  
      </Row>
    </Container>
  )
}


