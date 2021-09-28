import styled, { keyframes } from 'styled-components';

const rotate360 = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

export const Spinner = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  animation: ${rotate360} 1s linear infinite;
  transform: translateZ(0);

  border-top: 2px solid yellow;
  border-right: 2px solid purple;
  border-bottom: 2px solid green;
  border-left: 4px solid blue;
  background: transparent;
  width: 4rem;
  height: 4rem;
  border-radius: 50%;
`;
