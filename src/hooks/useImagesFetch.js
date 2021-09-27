import { useState, useEffect } from "react";
import axios from "axios";

export const usePeopleFetch = () => {
  const [images, setImages] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);

  async function fetchImages() {
    setIsLoading(true);
    setError(false);
    const response = await axios.get(
      `https://pixabay.com/api/?key=${process.env.REACT_APP_PIXABAY_API_KEY}=yellow+flowers&image_type=photo`
    //   `https://pixabay.com/api/`
    );
    setImages((prev) => {
      return [...prev, ...response.data.results];
    });
    
    setIsLoading(false);
  }

  useEffect(() => {
    fetchImages();
  }, []);

  return {
    images,
    isLoading,
    error,
  };
};
