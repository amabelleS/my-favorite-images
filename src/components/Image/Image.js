import React, { useState, useContext } from 'react';
import Context from '../../context/favorites/context';

import * as S from './style';

const Image = ({
  webformatURL,
  id,
  tags,
  user,
  imageSize,
  add,
  fav,
  image,
}) => {
  const [isVisible, setIsvisible] = useState(false);

  const {
    favoritesState,
    favoritesDispatch,
    handleMouseEnter,
    handleMouseLeave,
    addToFavorites,
    removeFromFavorites,
    isImageInFavorites,
    switchFavorites,
    editFavorite,
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
      {add && isImageInFavorites(id) ? (
        <S.HeartIcon
          isVisible={id === hoveredImageId}
          onClick={handelClickedHeart}
        />
      ) : (
        <S.PlusIcon
          isVisible={id === hoveredImageId}
          onClick={handelClickedPlus}
        />
      )}
      {/* {isImageInFavorites(id) ? (
        <S.HeartIcon
          isVisible={isImageInFavorites(id) && id === hoveredImageId}
          onClick={handelClickedHeart}
        />
      ) : add ? (
        <S.PlusIcon
          isVisible={id === hoveredImageId && !isImageInFavorites(id)}
          onClick={handelClickedPlus}
        />
      ) : null} */}
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
