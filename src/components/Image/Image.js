import React, { useContext, useState } from 'react';
import Context from '../../context/favorites/context';
import { abbreviateNumber } from '../../utils';
import { FaPlus, FaHeart } from 'react-icons/fa';

import * as S from './style';

const Image = ({ webformatURL, id, user, imageSize, add, fav, image }) => {
  const [isVisible, setIsVisible] = useState(false);
  const {
    favoritesState,
    // favoritesDispatch,
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

  //   const IconHeart = ({ isVisible, children }) => {
  //     return (
  //       <S.HeartIcon
  //         isVisible={id === hoveredImageId}
  //         onClick={handelClickedHeart}
  //       >
  //         {children}
  //       </S.HeartIcon>
  //     );
  //   };

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
      ) : // <S.IconWrapper
      //   isVisible={id === hoveredImageId}
      //   onClick={handelClickedHeart}
      // >
      //   <FaHeart />
      // </S.IconWrapper>
      null}
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
