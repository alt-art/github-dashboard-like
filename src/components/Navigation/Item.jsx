import React from 'react';
import propTypes from 'prop-types';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import DropDown from '../DropDown';

const StyledLink = styled(Link)`
  display: flex;
  justify-content: center;
  position: relative;
  align-items: center;
  background-color: #624cab;
  min-width: 40px;
  min-height: 40px;
  border-radius: 5px;
  margin: 5px;
`;

const AltText = styled.p`
  padding: 2px 5px;
  white-space: nowrap;
  text-overflow: ellipsis;
`;

function Item({ children, alt, to }) {
  const [showDropDown, setShowDropDown] = React.useState(false);

  return (
    <StyledLink
      to={to}
      onMouseEnter={() => setShowDropDown(true)}
      onMouseLeave={() => setShowDropDown(false)}
    >
      {children}
      {showDropDown && (
        <DropDown fade left={53} position="left">
          <AltText>{alt}</AltText>
        </DropDown>
      )}
    </StyledLink>
  );
}

export default Item;

Item.propTypes = {
  children: propTypes.node.isRequired,
  alt: propTypes.string.isRequired,
  to: propTypes.string.isRequired,
};
