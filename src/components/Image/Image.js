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

  return (
    <S.ContentImage
      img={webformatURL}
      //   onMouseEnter={handleMouseEnter}
      //   onMouseLeave={handleMouseLeave}
      onMouseEnter={() => handleMouseEnter(id)}
      onMouseLeave={handleMouseLeave}
    >
      {isImageInFavorites(id) ? (
        <S.HeartIcon
          isVisible={isImageInFavorites(id) && id === hoveredImageId}
        />
      ) : add ? (
        <S.PlusIcon
          isVisible={id === hoveredImageId && !isImageInFavorites(id)}
          onClick={handelClickedPlus}
        />
      ) : null}
      {/* {add && (
        <S.PlusIcon
          isVisible={id === hoveredImageId && !isImageInFavorites(id)}
          onClick={handelClickedPlus}
        />
      )} */}
      {/* {
        <S.HeartIcon
          isVisible={isImageInFavorites(id) && id === hoveredImageId}
        />
      } */}
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
