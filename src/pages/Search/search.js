import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { useImagesReducerFetch } from '../../hooks/useImagesReducerFetch';
import Image from '../../components/Image';
import Spinner from '../../components/UIElements/Spinner';
import { Modal } from '../../components/UIElements/Modal/Modal';

import * as S from './style';

const Search = () => {
  const { state, fetchImages } = useImagesReducerFetch();
  const { images, isLoading, error } = state;
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

  const list = (
    <S.List data-cy="test-list">
      {paginatedImages &&
        paginatedImages.map((image, index) => {
          return (
            <Image
              key={image.id}
              {...image}
              add={true}
              image={image}
              index={index}
            />
          );
        })}
    </S.List>
  );

  return (
    <S.SearchPage>
      <S.Content>
        <S.Header>
          <Modal
            showModal={showModal}
            setShowModal={setShowModal}
            msg={error.msg}
          />
          <S.BackIcon
            onClick={() => history.push('./')}
            data-testid="backBtn"
          />
          <S.SearchInputWrapper>
            <S.Button
              type="submit"
              onClick={handelSubmit}
              data-testid="search-btn"
            >
              <S.SearchIcon />
            </S.Button>
            <S.InputWrapper focused={searchTerm || focused}>
              <S.Input
                data-testid="search-input"
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
        {list}
        {!isLoading && (
          <S.BtnContainer>
            <S.PaginateBtn className="prev-btn" onClick={prevPage}>
              prev
            </S.PaginateBtn>
            {images.map((item, index) => {
              return (
                <S.PageBtn
                  key={index}
                  className={`${index === page ? 'active-btn' : null}`}
                  onClick={() => handlePage(index)}
                  active
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
