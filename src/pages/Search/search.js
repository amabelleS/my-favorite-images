import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { useImagesFetch } from '../../hooks/useImagesFetch';
import Image from '../../components/Image';
import Spinner from '../../components/UIElements/Spinner';
import { Modal } from '../../components/UIElements/Modal/Modal';

import * as S from './style';

const Search = () => {
  const { images, isLoading, error, fetchImages } = useImagesFetch();
  console.log('🚀 ~ file: search.js ~ line 12 ~ Search ~ error', error);
  const [searchTerm, setSearchTerm] = useState('');
  const [focused, SetFocused] = useState([]);
  const [showModal, setShowModal] = useState(false);
  let history = useHistory();

  // const openModal = () => {
  //   setShowModal((prev) => !prev);
  // };

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

  useEffect(() => {
    setShowModal(error.isError);
    // setShowModal((prev) => !prev);
  }, [error.isError]);

  return (
    <S.SearchPage>
      <S.Content>
        <S.Header>
          {/* <button
            style={{ width: '11rem', background: 'white' }}
            onClick={openModal}
          >
            Modal
          </button> */}
          <Modal
            showModal={showModal}
            setShowModal={setShowModal}
            msg={error.msg}
          />
          <S.BackIcon onClick={() => history.push('./')} />
          <S.SearchInputWrapper>
            <S.Button type="submit" onClick={handelSubmit}>
              <S.SearchIcon />
            </S.Button>
            <S.InputWrapper focused={searchTerm || focused}>
              <S.Input
                onFocus={focusHandler}
                onBlur={blurHandler}
                onChange={handleInputChange}
                type="text"
                value={searchTerm}
              />
            </S.InputWrapper>
          </S.SearchInputWrapper>
        </S.Header>
        <S.List>
          {images.map((image) => {
            return <Image key={image.id} {...image} add={true} image={image} />;
          })}
        </S.List>
        {isLoading && <Spinner />}
      </S.Content>
    </S.SearchPage>
  );
};

export default Search;
