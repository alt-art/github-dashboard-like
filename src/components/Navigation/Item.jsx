import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  background-color: #c3dbc5;
  width: 40px;
  height: 40px;
  border-radius: 5px;
  margin: 5px;
`;

function Item() {
  return <Container />;
}

export default Item;
