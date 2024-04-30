import React from 'react'
import { InfoVendedor } from '../InfoVendedor'
import { ProductoVenta } from '../ProductoVenta'
import { Container, Panel, Column, Galeria, Description, Section  } from '../Producto/styles'

export const Producto = () => {
  return (
    <Container>
      <Panel>
        <Column>
          <Galeria>
            <img src='https://exitocol.vteximg.com.br/arquivos/ids/22519318/OF-ShampooAcond-Cab-Danado-ELVIVE-740-ml-3134848_a.jpg' alt='elviveRojo' />
          </Galeria>
          <Info />
        </Column>
        <Column>
          <ProductoVenta />
          <InfoVendedor />
          <Garantia />
        </Column>
      </Panel>
    </Container>
  )
}

const Info = () => {
  return (
    <Description>
      <h4>Descripción</h4>
      <p>RECIBES SHAMPOO ELVIVE REPARACIÓN TOTAL 5 200ML + ACONDICIONADOR ELVIVE REPARACIÓN TOTAL 5 200ML</p>
    </Description>
  )
}

const Garantia = () => {
  return (
    <Section>
      <h5>Garantía</h5>
      <div>
        <span>
          <p className='title'>Compra protegida con Mercado Pago</p>
          <p className='description'>Recibe el producto que esperabas o te devolvemos tu dinero</p>
        </span>
        <span>
          <p className='title'>Garantía del Vendedor</p>
          <p className='description'>Garantía del vendedor: 2 meses</p>
        </span>
        <a href='#'>Conocer más sobre garatía</a>
      </div>
    </Section>
  )
}
