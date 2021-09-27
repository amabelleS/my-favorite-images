import React from 'react';
import ReactDOM from 'react-dom';

import * as S from './style';

const Backdrop = props => {
  return ReactDOM.createPortal(
    <S.Backdrop onClick={props.onClick}></S.Backdrop>,
    document.getElementById('backdrop-hook')
  );
};

export default Backdrop;
