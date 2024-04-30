import React from 'react'
import { Container, Estado, Row, HeartIcon, Price, Card, ButtonCard, Button } from '../ProductoVenta/styles'

export const ProductoVenta = () => {
    return (
        <Container>
            <Estado>Nuevo | 2 vendidos</Estado>

            <Row>
                <h1>Kit Elvive Reparación Total 5 Shampoo + Acond Cabello Dañado</h1>
                <HeartIcon />
            </Row>
            <Price>$30.800</Price>
            <Card>
            <div>
                <p>Envío a nivel nacional</p>
                <p>Conoce los tiempos y las formas de envío.</p>
                <a href="#">Calcular cuándo llega </a>
                <h3><strong>Stock disponible</strong></h3>
                <p>Cantidad: <strong>1 unidad</strong> (+50 disponibles)</p>
            </div>
            </Card>
            <ButtonCard>
                <Button className='solid'>Comprar ahora</Button>
                <Button>Agregar al carrito</Button>
            </ButtonCard>
        </Container>
    )
}
