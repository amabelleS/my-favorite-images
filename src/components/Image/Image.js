import React, { useContext } from 'react';
import Context from '../../context/favorites/context';

import * as S from './style';

function abbreviateNumber(value) {
  let newValue = value;
  if (value >= 1000) {
    let suffixes = ['', 'k', 'm', 'b', 't'];
    let suffixNum = Math.floor(('' + value).length / 3);
    let shortValue = '';
    for (let precision = 2; precision >= 1; precision--) {
      shortValue = parseFloat(
        (suffixNum !== 0
          ? value / Math.pow(1000, suffixNum)
          : value
        ).toPrecision(precision)
      );
      const dotLessShortValue = (shortValue + '').replace(
        /[^a-zA-Z 0-9]+/g,
        ''
      );
      if (dotLessShortValue.length <= 2) {
        break;
      }
    }
    if (shortValue % 1 !== 0) shortValue = shortValue.toFixed(1);
    newValue = shortValue + suffixes[suffixNum];
  }
  return newValue;
}

const Image = ({ webformatURL, id, user, imageSize, add, fav, image }) => {
  const {
    favoritesState,
    // favoritesDispatch,
    handleMouseEnter,
    handleMouseLeave,
    addToFavorites,
    removeFromFavorites,
    isImageInFavorites,
    // switchFavorites,
  } = useContext(Context);
  const { hoveredImageId } = favoritesState;

  //   const handleMouseEnter = () => {
  //     setIsvisible(true);
  //   };
  //   const handleMouseLeave = () => {
  //     setIsvisible(false);
  //   };

  const handelClickedPlus = () => {
    if (isImageInFavorites(id)) return;
    else addToFavorites(image);
    console.log(favoritesState);
  };

  const handelClickedHeart = () => {
    isImageInFavorites(id) ? removeFromFavorites(id) : addToFavorites(image);
  };

  return (
    <S.ContentImage
      img={webformatURL}
      //   onMouseEnter={handleMouseEnter}
      //   onMouseLeave={handleMouseLeave}
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
