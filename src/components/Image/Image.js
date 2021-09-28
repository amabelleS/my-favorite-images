import React, { useContext } from 'react';
import Context from '../../context/favorites/context';
import { abbreviateNumber } from '../../utils';

import * as S from './style';

const Image = ({ webformatURL, id, user, imageSize, add, fav, image }) => {
  const {
    favoritesState,
    handleMouseEnter,
    handleMouseLeave,
    addToFavorites,
    removeFromFavorites,
    isImageInFavorites,
  } = useContext(Context);
  const { hoveredImageId } = favoritesState;

  const handelClickedPlus = () => {
    if (isImageInFavorites(id)) return;
    else addToFavorites(image);
  };

  const handelClickedHeart = () => {
    isImageInFavorites(id) ? removeFromFavorites(id) : addToFavorites(image);
  };

  return (
    <S.ContentImage
      img={webformatURL}
      onMouseEnter={() => handleMouseEnter(id)}
      onMouseLeave={handleMouseLeave}
    >
      {fav ? (
        <S.Info isVisible={id === hoveredImageId}>
          <span>{user}</span>
          <span>{abbreviateNumber(imageSize)}</span>
          <S.HeartIconNoMargin
            isVisible={id === hoveredImageId}
            onClick={handelClickedHeart}
          />
        </S.Info>
      ) : null}
      {add && isImageInFavorites(id) ? (
        <S.HeartIcon
          isVisible={id === hoveredImageId}
          onClick={handelClickedHeart}
        />
      ) : null}
      {add && !isImageInFavorites(id) ? (
        <S.PlusIcon
          isVisible={id === hoveredImageId}
          onClick={handelClickedPlus}
        />
      ) : null}
    </S.ContentImage>
  );
};

export default Image;
