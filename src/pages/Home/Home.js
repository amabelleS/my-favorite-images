import React, { useContext } from 'react';
import Context from '../../context/favorites/context';

import Image from '../../components/Image';

import * as S from './style';

const Home = () => {
  const {
    favoritesState,
    handleMouseEnter,
    handleMouseLeave,
    addToFavorites,
    removeFromFavorites,
    isImageInFavorites,
    // switchFavorites,
  } = useContext(Context);
  const { favorites, hoveredImageId } = favoritesState;

  return (
    <S.Home>
      <S.Content>
        <S.Title>My Favorite Images</S.Title>
        <S.List>
          {favorites.map((image) => {
            return <Image key={image.id} {...image} add image={image} />;
          })}
        </S.List>
      </S.Content>
    </S.Home>
  );
};

export default Home;
