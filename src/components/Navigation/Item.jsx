import React from 'react';
import propTypes from 'prop-types';
import styled from 'styled-components';
import DropDown from '../DropDown';

const Container = styled.div`
  display: flex;
  justify-content: center;
  position: relative;
  align-items: center;
  background-color: #624cab;
  width: 40px;
  height: 40px;
  border-radius: 5px;
  cursor: pointer;
  margin: 5px;
`;

const AltText = styled.p`
  padding: 2px 5px;
  white-space: nowrap;
  text-overflow: ellipsis;
`;

function Item({ children, alt }) {
  const [showDropDown, setShowDropDown] = React.useState(false);

  return (
    <Container
      onMouseEnter={() => setShowDropDown(true)}
      onMouseLeave={() => setShowDropDown(false)}
    >
      {children}
      {showDropDown && (
        <DropDown fade left={53} position="left">
          <AltText>{alt}</AltText>
        </DropDown>
      )}
    </Container>
  );
}

export default Item;

Item.propTypes = {
  children: propTypes.node.isRequired,
  alt: propTypes.string.isRequired,
};
