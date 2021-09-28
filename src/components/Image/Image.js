import React, { useContext } from 'react';
import Context from '../../context/favorites/context';

import * as S from './style';

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
          <span>{imageSize}</span>
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
