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
  //   const [images, setImages] = useState([]);
  //   const [isLoading, setIsLoading] = useState(false);
  //   const [error, setError] = useState({ isError: false, msg: '' });

  async function fetchImages(searchTerm) {
    dispatch({
      type: 'set-loading',
      payload: true,
    });
    dispatch({
      type: 'set-error',
      payload: { isError: null, msg: '' },
    });
    // setIsLoading(true);
    // setError({ isError: false, msg: '' });
    try {
      const response = await axios.get(
        `https://pixabay.com/api/?key=${
          process.env.REACT_APP_PIXABAY_API_KEY
        }&q=${searchTerm || ''}&per_page=120&image_type=photo`
      );
      console.log(
        '🚀 ~ file: useImagesFetch.js ~ line 19 ~ fetchImages ~ response',
        response
      );
      // if (response.data.hits.length > 0) {
      if (+response.data.totalHits > 0) {
        dispatch({
          type: 'set-images',
          payload: paginate(response.data.hits),
        });
        // setImages(paginate(response.data.hits));
      } else {
        dispatch({
          type: 'set-error',
          payload: {
            isError: true,
            msg: 'No Hits. Please try differnt key word for your search, or check your spelling',
          },
        });
        // setError({
        //   isError: true,
        //   msg: 'No Hits. Please try differnt key word for your search, or check your spelling',
        // });
      }
    } catch (error) {
      console.log(
        '🚀 ~ file: useImagesFetch.js ~ line 26 ~ fetchImages ~ error',
        error
      );
      dispatch({
        type: 'set-error',
        payload: { isError: true, msg: '' },
      });
      //   setError({ isError: true, msg: '' });
    }
    dispatch({
      type: 'set-loading',
      payload: false,
    });
    // setIsLoading(false);
  }

  useEffect(() => {
    fetchImages();
    console.log(
      '🚀 ~ file: useImagesReducerFetch.js ~ line 103 ~ fetchImages ~ state',
      state
    );
  }, []);

  return {
    state,
    dispatch,
    fetchImages,
    // images,
    // fetchImages,
    // isLoading,
    // error,
  };
};
