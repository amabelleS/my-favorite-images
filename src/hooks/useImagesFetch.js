import { useState, useEffect } from 'react';
import axios from 'axios';

export const useImagesFetch = () => {
  const [images, setImages] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);

  async function fetchImages(searchTerm) {
    setIsLoading(true);
    setError(false);
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
      setImages(response.data.hits);
      // setImages((prev) => {
      //   return [...prev, ...response.data.hits];
      // });
    } catch (error) {
      console.log(
        '🚀 ~ file: useImagesFetch.js ~ line 26 ~ fetchImages ~ error',
        error
      );
      setError(true);
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
