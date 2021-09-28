import React, { useState, useEffect } from 'react';
import { useImagesFetch } from '../../hooks/useImagesFetch';
import Image from '../../components/Image';

import { FaSearch } from 'react-icons/fa';

import * as S from './style';

const Search = () => {
  const { images, isLoading, error, fetchImages } = useImagesFetch();
  console.log('🚀 ~ file: search.js ~ line 8 ~ Search ~ images', images);
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [focused, SetFocused] = useState([]);
  const [query, setQuery] = useState('');

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
    fetchImages(searchTerm);
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
        <S.List>
          {images.map((image) => {
            // console.log(
            //   '🚀 ~ file: search.js ~ line 54 ~ {images.map ~ image',
            //   image
            // );
            return <Image key={image.id} {...image} add image={image} />;
          })}
        </S.List>
        {isLoading && <h2>Loading...</h2>}
      </S.Content>
    </S.SearchPage>
  );
};

export default Search;
