import styled from 'styled-components';
import { MdClose } from 'react-icons/md';

export const Background = styled.div`
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.8);
  position: fixed;
  top: 0;
  right: 0;
  z-index: 999;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ModalWrapper = styled.div`
  width: 88vw;
  height: 60vh;
  box-shadow: 0 5px 16px rgba(0, 0, 0, 0.2);
  /* background: #fff; */
  background: ${(props) => props.theme.text};
  color: ${(props) => props.theme.body};
  /* color: #000; */
  display: grid;
  grid-template-columns: 1fr 1fr;
  position: relative;
  z-index: 10;
  border-radius: 10px;
`;

export const ModalImg = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 10px 0 0 10px;
  background: #000;
`;

export const ModalContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  line-height: 1.8;
  /* color: #141414; */
  color: ${(props) => props.theme.body};

  p {
    padding: 1rem;
  }

  button {
    padding: 10px 24px;
    /* background: #141414; */
    /* color: #fff; */
    background: ${(props) => props.theme.body};
    color: ${(props) => props.theme.text};
    border: none;
  }

  @media screen and (max-width: 768px) {
    h1 {
      padding-left: 0.5rem;
    }
  }
`;

export const CloseModalButton = styled(MdClose)`
  cursor: pointer;
  position: absolute;
  top: 20px;
  right: 20px;
  width: 32px;
  height: 32px;
  padding: 0;
  z-index: 10;
`;
