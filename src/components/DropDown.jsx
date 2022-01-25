import styled, { css } from 'styled-components';

const DropDown = styled.div`
  background-color: #ff9898;
  color: #ececec;
  font-weight: 500;
  position: absolute;
  border-radius: 5px;
  border: 1px solid #624cab;
  margin: 5px;
  padding: 5px 0;
  min-width: 160px;
  ${(props) => props.top !== undefined
    && css`
      top: ${props.top}px;
    `}
  ${(props) => props.bottom !== undefined
    && css`
      bottom: ${props.bottom}px;
    `}
  ${(props) => props.left !== undefined
    && css`
      left: ${props.left}px;
    `}
  ${(props) => props.right !== undefined
    && css`
      right: ${props.right}px;
    `}
  &::before {
    content: '';
    display: block;
    position: absolute;      
    top: -20px;
    right: 13px;
    width: 0px;
    height: 0px;                
    border: 10px solid transparent;
    border-bottom: 10px solid #624cab;
  }
  &::after {
    content: '';
    display: block;
    position: absolute;
    top: -17px;
    right: 14px;
    width: 0px;
    height: 0px;
    border: 9px solid transparent;
    border-bottom: 9px solid #ff9898;
  }
`;

export default DropDown;
