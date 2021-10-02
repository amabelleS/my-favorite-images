// Not in use...
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
        }&q=${searchTerm || ''}&per_page=120&image_type=photo`
      );

      if (+response.data.totalHits > 0) {
        setImages(paginate(response.data.hits));
      } else {
        setError({
          isError: true,
          msg: 'No Hits. Please try differnt key word for your search, or check your spelling',
        });
      }
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
