import React from 'react'
import { Container } from './styles'

const ItemsMenu = ({ src, title }) => {
  return (
    <Container>
      <img src={src} alt="" />
      <p>{title}</p>
    </Container>
  )
}

export default ItemsMenu