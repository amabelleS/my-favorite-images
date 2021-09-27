import React, { useState } from 'react';
import { useImagesFetch } from '../../hooks/useImagesFetch';
import Image from '../../components/Image';

import { FaSearch } from 'react-icons/fa';

import * as S from './style';

const Search = () => {
  const { images, isLoading, error } = useImagesFetch();
  console.log('🚀 ~ file: search.js ~ line 8 ~ Search ~ images', images);
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [focused, SetFocused] = useState([]);

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
    console.log(
      '🚀 ~ file: search.js ~ line 28 ~ handelSubmit ~ searchTerm',
      searchTerm
    );
  };

  return (
    <S.SearchPage>
      <S.Content>
        {/* <S.Title>Serach Your Favorite Images</S.Title> */}
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
        <S.ImagesContainer>
          <S.List>
            {images.map((image, index) => {
              return <Image key={image.id} {...image} />;
            })}
          </S.List>
        </S.ImagesContainer>
        {isLoading && <h2>Loading...</h2>}
      </S.Content>
    </S.SearchPage>
  );
};

export default Search;
