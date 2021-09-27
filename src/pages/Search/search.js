import React, { useState } from 'react';
import { useImagesFetch } from '../../hooks/useImagesFetch';

import * as S from './style';

const Search = () => {
  const { images, isLoading, error } = useImagesFetch();
  console.log('🚀 ~ file: search.js ~ line 8 ~ Search ~ images', images);
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  const handleInputChange = (e) => {
    setSearchTerm(e.target.value);
  };

  return (
    <S.SearchPage>
      <S.Title>Serach Your Favorite Images</S.Title>
    </S.SearchPage>
  );
};

export default Search;
