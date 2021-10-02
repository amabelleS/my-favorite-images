import React, { useContext } from 'react';
import Context from '../../context/favorites/context';
import { abbreviateNumber } from '../../utils';

import * as S from './style';

const Image = React.memo(
  ({ webformatURL, id, user, imageSize, add, fav, image, index }) => {
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
        data-testid="catch-image"
        img={webformatURL}
        onMouseEnter={() => handleMouseEnter(id)}
        onMouseLeave={handleMouseLeave}
      >
        {fav && id === hoveredImageId ? (
          <S.Info>
            <span>{user}</span>
            <span
              data-testid={`catch-size-${imageSize}-${abbreviateNumber(
                imageSize
              )}`}
            >
              {abbreviateNumber(imageSize)}
            </span>
            <S.HeartIconNoMargin onClick={handelClickedHeart} />
          </S.Info>
        ) : null}
        {add && id === hoveredImageId && isImageInFavorites(id) ? (
          <S.HeartIcon onClick={handelClickedHeart} />
        ) : null}
        {add && id === hoveredImageId && !isImageInFavorites(id) ? (
          <S.PlusIcon
            onClick={handelClickedPlus}
            data-testid={`plus-icon-${index}`}
          />
        ) : null}
      </S.ContentImage>
    );
  }
);

export default Image;
