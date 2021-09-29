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
  const [page, setPage] = useState(0);
  const [paginatedImages, setPaginatedImages] = useState([]);

  useEffect(() => {
    if (isLoading) return;
    setPaginatedImages(images[page]);
  }, [isLoading, page, images]);

  const nextPage = () => {
    setPage((oldPage) => {
      let nextPage = oldPage + 1;
      if (nextPage > images.length - 1) {
        nextPage = 0;
      }
      return nextPage;
    });
  };
  const prevPage = () => {
    setPage((oldPage) => {
      let prevPage = oldPage - 1;
      if (prevPage < 0) {
        prevPage = images.length - 1;
      }
      return prevPage;
    });
  };

  const handlePage = (index) => {
    setPage(index);
  };
  // const openModal = () => {
  //   setShowModal((prev) => !prev);
  // };

  const onKeydownHandle = (e) => e.key === 'Enter' && handelSubmit(e);

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
  }, [error.isError]);

  return (
    <S.SearchPage>
      <S.Content>
        <S.Header>
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
                onKeyDown={onKeydownHandle}
              />
            </S.InputWrapper>
          </S.SearchInputWrapper>
        </S.Header>
        <S.List>
          {paginatedImages &&
            paginatedImages.map((image) => {
              return (
                <Image key={image.id} {...image} add={true} image={image} />
              );
            })}
        </S.List>
        {!isLoading && (
          <S.BtnContainer>
            <S.PaginateBtn className="prev-btn" onClick={prevPage}>
              prev
            </S.PaginateBtn>
            {images.map((item, index) => {
              return (
                <S.PageBtn
                  key={index}
                  // className={`page-btn ${index === page ? 'active-btn' : null}`}
                  onClick={() => handlePage(index)}
                >
                  {index + 1}
                </S.PageBtn>
              );
            })}
            <S.PaginateBtn onClick={nextPage}>next</S.PaginateBtn>
          </S.BtnContainer>
        )}
        {isLoading && <Spinner />}
      </S.Content>
    </S.SearchPage>
  );
};

export default Search;
