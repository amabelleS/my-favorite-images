import React, { useState } from 'react';
import { useImagesFetch } from '../../hooks/useImagesFetch';

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
          <S.SearchIcon />
        </S.InputWrapper>
      </S.Content>
    </S.SearchPage>
  );
};

export default Search;
