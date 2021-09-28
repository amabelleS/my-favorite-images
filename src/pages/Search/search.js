import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useImagesFetch } from '../../hooks/useImagesFetch';
import Image from '../../components/Image';

import * as S from './style';

const Search = () => {
  const { images, isLoading, error, fetchImages } = useImagesFetch();
  const [searchTerm, setSearchTerm] = useState('');
  const [focused, SetFocused] = useState([]);

  let history = useHistory();

  const handleInputChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const focusHandler = () => {
    SetFocused(true);
  };
  const blurHandler = () => {
    SetFocused(false);
  };
  const handelSubmit = (e) => {
    e.preventDefault();
    fetchImages(searchTerm);
  };

  return (
    <S.SearchPage>
      <S.Content>
        <S.Header>
          <S.BackIcon onClick={() => history.push('./')} />
          <S.InputWrapper focused={searchTerm || focused}>
            <S.Input
              onFocus={focusHandler}
              onBlur={blurHandler}
              onChange={handleInputChange}
              type="text"
              value={searchTerm}
            />
            <S.Button type="submit" onClick={handelSubmit}>
              <S.SearchIcon />
            </S.Button>
          </S.InputWrapper>
        </S.Header>
        <S.List>
          {images.map((image) => {
            return <Image key={image.id} {...image} add={true} image={image} />;
          })}
        </S.List>
        {isLoading && <h2>Loading...</h2>}
      </S.Content>
    </S.SearchPage>
  );
};

export default Search;
