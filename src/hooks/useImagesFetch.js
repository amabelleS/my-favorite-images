import { useState, useEffect } from 'react';
import axios from 'axios';
import { paginate } from '../utils';

export const useImagesFetch = () => {
  const [images, setImages] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState({ isError: false, msg: '' });

  async function fetchImages(searchTerm) {
    setIsLoading(true);
    setError({ isError: false, msg: '' });
    try {
      const response = await axios.get(
        `https://pixabay.com/api/?key=${
          process.env.REACT_APP_PIXABAY_API_KEY
        }&q=${searchTerm || ''}&per_page=30&image_type=photo`
        // `https://pixabay.com/api/?key=${process.env.REACT_APP_PIXABAY_API_KEY}&image_type=photo`
        //   `https://pixabay.com/api/`
      );
      console.log(
        '🚀 ~ file: useImagesFetch.js ~ line 16 ~ fetchImages ~ response',
        response.data.hits
      );
      if (response.data.hits.length > 0) {
        // paginate(response.data.hits);
        setImages(paginate(response.data.hits));
      } else {
        setError({
          isError: true,
          msg: 'Please try differnt key word for your search, or check your spelling',
        });
      }
      // setImages((prev) => {
      //   return [...prev, ...response.data.hits];
      // });
    } catch (error) {
      console.log(
        '🚀 ~ file: useImagesFetch.js ~ line 26 ~ fetchImages ~ error',
        error
      );
      setError({ isError: true, msg: '' });
    }

    setIsLoading(false);
  }

  useEffect(() => {
    fetchImages();
  }, []);

  return {
    images,
    fetchImages,
    isLoading,
    error,
  };
};
