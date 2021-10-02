// I re-Wrote useFetch Images to use reducer for state managment, because I thought it could help with
// the re-rendering isues I run to while debugging.

import { useEffect, useReducer } from 'react';
import axios from 'axios';
import { paginate } from '../utils';

const reducer = (state, action) => {
  switch (action.type) {
    case 'set-images':
      return { ...state, images: action.payload };
    case 'set-Loading':
      return { ...state, isLoading: action.payload };
    case 'set-error':
      return { ...state, error: action.payload };

    default:
      return state;
  }
};

const initialSate = {
  images: [],
  isLoading: false,
  error: { isError: null, msg: '' },
};

export const useImagesReducerFetch = () => {
  const [state, dispatch] = useReducer(reducer, initialSate);

  async function fetchImages(searchTerm) {
    dispatch({
      type: 'set-loading',
      payload: true,
    });
    dispatch({
      type: 'set-error',
      payload: { isError: null, msg: '' },
    });
    try {
      const response = await axios.get(
        `https://pixabay.com/api/?key=${
          process.env.REACT_APP_PIXABAY_API_KEY
        }&q=${searchTerm || ''}&per_page=120&image_type=photo`
      );
      if (+response.data.totalHits > 0) {
        dispatch({
          type: 'set-images',
          payload: paginate(response.data.hits),
        });
      } else {
        dispatch({
          type: 'set-error',
          payload: {
            isError: true,
            msg: 'No Hits. Please try differnt key word for your search, or check your spelling',
          },
        });
      }
    } catch (error) {
      console.log(
        '🚀 ~ file: useImagesFetch.js ~ line 26 ~ fetchImages ~ error',
        error
      );
      dispatch({
        type: 'set-error',
        payload: {
          isError: true,
          msg: `Something went wrong. Could not fetch images.`,
        },
      });
    }
    dispatch({
      type: 'set-loading',
      payload: false,
    });
  }

  useEffect(() => {
    fetchImages();
  }, []);

  return {
    state,
    dispatch,
    fetchImages,
  };
};
