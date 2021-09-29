import React from 'react';

import * as S from './style';

export default function ConfirmationModalImpl(props) {
  const {
    handleClose, // renderProp fn expects truthy or falsey
    show, // boolean - visible/invisible
    headerText, // text
    detailText, // html / inner text
    openPos, // placement choice
  } = { ...props };

  const sendYes = () => handleClose(true);

  const sendNo = () => handleClose(false);

  return (
    // <S.Model show={show}>
    //   <S.Container openPos={openPos}>
    //     <S.Header>{headerText}</S.Header>
    //     <S.HBar />
    //     <S.Slot>{detailText}</S.Slot>
    //     <S.ButtonBar>
    //       <S.Button onClick={sendYes} primary={true}>
    //         Yes
    //       </S.Button>
    //       <S.Button onClick={sendNo} primary={false}>
    //         No
    //       </S.Button>
    //     </S.ButtonBar>
    //   </S.Container>
    // </S.Model>
  );
}
