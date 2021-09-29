import React, { useRef, useEffect, useCallback } from 'react';
import { useSpring, animated } from 'react-spring';
import ReactDOM from 'react-dom';

import * as S from './style';

export const Modal = ({ showModal, setShowModal, imgUrl, msg }) => {
  const modalRef = useRef();
  const defaultUrl =
    'https://cdn.pixabay.com/photo/2015/09/23/08/16/thunder-953118_960_720.jpg';
  const animation = useSpring({
    config: {
      duration: 250,
    },
    opacity: showModal ? 1 : 0,
    transform: showModal ? `translateY(0%)` : `translateY(-100%)`,
  });

  const closeModal = (e) => {
    if (modalRef.current === e.target) {
      setShowModal(false);
    }
  };

  const keyPress = useCallback(
    (e) => {
      if (e.key === 'Escape' && showModal) {
        setShowModal(false);
        console.log('I pressed');
      }
    },
    [setShowModal, showModal]
  );

  useEffect(() => {
    document.addEventListener('keydown', keyPress);
    return () => document.removeEventListener('keydown', keyPress);
  }, [keyPress]);

  return ReactDOM.createPortal(
    <>
      {showModal ? (
        <S.Background onClick={closeModal} ref={modalRef}>
          <animated.div style={animation}>
            <S.ModalWrapper showModal={showModal}>
              <S.ModalImg src={imgUrl || defaultUrl} alt="modal-image" />
              <S.ModalContent>
                <h1>An Error Accurred</h1>
                <p>{msg && msg}.</p>
                <button onClick={() => setShowModal((prev) => !prev)}>
                  Close
                </button>
              </S.ModalContent>
              <S.CloseModalButton
                aria-label="Close modal"
                onClick={() => setShowModal((prev) => !prev)}
              />
            </S.ModalWrapper>
          </animated.div>
        </S.Background>
      ) : null}
    </>,
    document.getElementById('modal-hook')
  );
};
