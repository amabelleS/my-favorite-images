import React from 'react';

import * as S from './style';

const Image = ({ webformatURL, likes, tags }) => {
  console.log('🚀 ~ file: Image.js ~ line 6 ~ Image ~ props', webformatURL);
  return (
    <S.ImageContainer>
      <S.Image src={webformatURL} alt={tags} />
    </S.ImageContainer>
  );
};

export default Image;
