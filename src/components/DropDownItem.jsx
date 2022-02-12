import styled from 'styled-components';

const DropDownItem = styled.a`
  display: block;
  background-color: #624cab;
  width: 100%;
  padding: 3px 10px;
  transition: background-color 0.1s ease-in-out;
  text-decoration: none;
  cursor: pointer;
  color: #ececec;
  margin: 2px 0;
  &:hover {
    background-color: #ff9898;
  }
`;

export default DropDownItem;
