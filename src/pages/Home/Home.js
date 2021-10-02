import React, { useContext } from 'react';
import { useHistory } from 'react-router-dom';
import Context from '../../context/favorites/context';
import Image from '../../components/Image';

import * as S from './style';

const Home = () => {
  const { favoritesState } = useContext(Context);
  const { favorites } = favoritesState;
  let history = useHistory();

  return (
    <S.Home>
      <S.Content>
        <S.Title>My Favorite Images</S.Title>
        <S.List>
          {favorites.map((image, index) => {
            return (
              <Image
                key={image.id}
                {...image}
                image={image}
                fav
                data-testid={`img-${index}`}
              />
            );
          })}
          <S.NavigationBox onClick={() => history.push('./search')}>
            <S.NavigationBoxText>Add Image</S.NavigationBoxText>
          </S.NavigationBox>
        </S.List>
      </S.Content>
    </S.Home>
  );
};

export default Home;
