import React, { useState } from 'react';

import * as S from './style';

const Image = ({ webformatURL, likes, tags, user, imageSize, add, fav }) => {
  const [isVisible, setIsvisible] = useState(false);

  const handleMouseEnter = () => {
    setIsvisible(true);
  };
  const handleMouseLeave = () => {
    setIsvisible(false);
  };

  return (
    <S.ContentImage
      img={webformatURL}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {add && <S.PlusIcon isVisible={isVisible} />}
      {fav ? (
        <>
          <h4>{user}</h4>
          <h4>{imageSize}</h4>
        </>
      ) : null}
    </S.ContentImage>
  );
};

export default Image;
