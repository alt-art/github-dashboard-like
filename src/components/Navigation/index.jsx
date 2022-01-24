import React from 'react';
import styled from 'styled-components';
import Item from './Item';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #ff9898;
  width: 50px;
  height: 100vh;
`;

function Navigation() {
  return (
    <Container>
      <Item />
      <Item />
      <Item />
      <Item />
    </Container>
  );
}

export default Navigation;
