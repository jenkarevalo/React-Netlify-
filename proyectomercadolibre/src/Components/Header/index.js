import React from 'react';
import Logo from "../../img/Logo.png";
import { Container, Wrapper } from './styles';

export const Header = () => {
  return (
    <Container>
      <Wrapper>
        <img src={Logo} alt="logo" />
      </Wrapper>
    </Container>
  )
}
