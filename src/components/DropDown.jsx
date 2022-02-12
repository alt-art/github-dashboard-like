import styled, { css, keyframes } from 'styled-components';

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

const DropDown = styled.div`
  background-color: #624cab;
  color: #ececec;
  font-weight: 500;
  position: absolute;
  ${({ fade }) => fade
    && css`
      animation: ${fadeIn} 0.3s ease-in-out;
    `}
  border-radius: 5px;
  border: 1px solid #ff9898;
  margin: 5px;
  ${({ position }) => position === 'top'
    && css`
      min-width: 160px;
    `}
  ${({ top }) => top !== undefined
    && css`
      top: ${top}px;
    `}
  ${({ bottom }) => bottom !== undefined
    && css`
      bottom: ${bottom}px;
    `}
  ${({ left }) => left !== undefined
    && css`
      left: ${left}px;
    `}
  ${({ right }) => right !== undefined
    && css`
      right: ${right}px;
    `}
  &::before {
    content: '';
    display: block;
    position: absolute;
    width: 0px;
    height: 0px;
    border: 10px solid transparent;
    ${({ position }) => position === 'top'
      && css`
        top: -20px;
        right: 13px;
      `}
    ${({ position }) => position === 'left'
      && css`
        top: 4px;
        left: -20px;
      `}
    ${({ position }) => position === 'top'
      && css`
        border-bottom: 10px solid #ff9898;
      `}
    ${({ position }) => position === 'left'
      && css`
        border-right: 10px solid #ff9898;
      `}
  }
  &::after {
    content: '';
    display: block;
    position: absolute;
    ${({ position }) => position === 'top'
      && css`
        top: -18.5px;
        right: 13px;
      `}
    ${({ position }) => position === 'left'
      && css`
        top: 4px;
        left: -18.5px;
      `}
    width: 0px;
    height: 0px;
    border: 10px solid transparent;
    ${({ position }) => position === 'top'
      && css`
        border-bottom: 10px solid #624cab;
      `}
    ${({ position }) => position === 'left'
      && css`
        border-right: 10px solid #624cab;
      `}
  }
`;

export default DropDown;
