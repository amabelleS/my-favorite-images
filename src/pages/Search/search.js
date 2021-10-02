import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
// import { useImagesFetch } from '../../hooks/useImagesFetch';
import { useImagesReducerFetch } from '../../hooks/useImagesReducerFetch';
import Image from '../../components/Image';
import Spinner from '../../components/UIElements/Spinner';
import { Modal } from '../../components/UIElements/Modal/Modal';

// import axios from 'axios';
// import { paginate } from '../../utils';

import * as S from './style';

const Search = () => {
  // const { images, isLoading, error, fetchImages } = useImagesFetch();
  const { state, dispatch, fetchImages } = useImagesReducerFetch();
  const { images, isLoading, error } = state;
  console.log('🚀 ~ file: search.js ~ line 15 ~ Search ~ images', state.images);
  const [searchTerm, setSearchTerm] = useState('');
  const [focused, SetFocused] = useState([]);
  const [showModal, setShowModal] = useState(false);
  let history = useHistory();
  const [page, setPage] = useState(0);
  const [paginatedImages, setPaginatedImages] = useState([]);

  // ----- sending dispatch down to avoid re-rendering and pass the tests, hopefully..
  // async function fetchImages(searchTerm) {
  //   dispatch({
  //     type: 'set-loading',
  //     payload: true,
  //   });
  //   dispatch({
  //     type: 'set-error',
  //     payload: { isError: null, msg: '' },
  //   });

  //   try {
  //     const response = await axios.get(
  //       `https://pixabay.com/api/?key=${
  //         process.env.REACT_APP_PIXABAY_API_KEY
  //       }&q=${searchTerm || ''}&per_page=120&image_type=photo`
  //     );
  //     console.log(
  //       '🚀 ~ file: useImagesFetch.js ~ line 19 ~ fetchImages ~ response',
  //       response
  //     );
  //     if (+response.data.totalHits > 0) {
  //       dispatch({
  //         type: 'set-images',
  //         payload: paginate(response.data.hits),
  //       });
  //     } else {
  //       dispatch({
  //         type: 'set-error',
  //         payload: {
  //           isError: true,
  //           msg: 'No Hits. Please try differnt key word for your search, or check your spelling',
  //         },
  //       });
  //     }
  //   } catch (error) {
  //     console.log(
  //       '🚀 ~ file: useImagesFetch.js ~ line 26 ~ fetchImages ~ error',
  //       error
  //     );
  //     dispatch({
  //       type: 'set-error',
  //       payload: { isError: true, msg: '' },
  //     });
  //   }
  //   dispatch({
  //     type: 'set-loading',
  //     payload: false,
  //   });
  // }

  // useEffect(() => {
  //   fetchImages();
  //   console.log(
  //     '🚀 ~ file: useImagesReducerFetch.js ~ line 103 ~ fetchImages ~ state',
  //     state
  //   );
  // }, []);

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
        {list}
        {/* <S.List>
          {paginatedImages &&
            paginatedImages.map((image) => {
              return (
                <Image key={image.id} {...image} add={true} image={image} />
              );
            })}
        </S.List> */}
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
                  // data-test-target="plus-icon"
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
