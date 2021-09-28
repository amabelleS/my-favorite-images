import { useReducer } from 'react';

const reducer = (state, action) => {
  switch (action.type) {
    case 'set-hoveredImageId':
      return { ...state, hoveredImageId: action.payload };
    case 'set-favorites':
      // localStorage.setItem('favorites', JSON.stringify(action.payload));
      return { ...state, favorites: action.payload };
    case 'set-favoritesIDs':
      return { ...state, favoritesIDs: action.payload };

    default:
      return state;
  }
};

const useFavoritesState = () => {
  const initialSate = {
    favorites: JSON.parse(localStorage.getItem('favorites')) || [],
    favoritesIDs: JSON.parse(localStorage.getItem('favoritesIDs')) || [],
    hoveredImageId: null,
  };
  const [favoritesState, favoritesDispatch] = useReducer(reducer, initialSate);

  const handleMouseEnter = (id) => {
    favoritesDispatch({
      type: 'set-hoveredImageId',
      payload: id,
    });
  };

  const handleMouseLeave = () => {
    favoritesDispatch({
      type: 'set-hoveredImageId',
      payload: null,
    });
  };

  const addToFavorites = (image) => {
    const updatedIDs = [...favoritesState.favoritesIDs, image.id];
    const updatedImages = [...favoritesState.favorites, image];
    localStorage.setItem('favorites', JSON.stringify(updatedImages));
    localStorage.setItem('favoritesIDs', JSON.stringify(updatedIDs));

    favoritesDispatch({
      type: 'set-favoritesIDs',
      payload: updatedIDs,
    });

    favoritesDispatch({
      type: 'set-favorites',
      payload: updatedImages,
    });
  };

  const removeFromFavorites = (id) => {
    console.log('trying tp remove the bastard');
    const updatedFavorites = [...favoritesState.favorites].filter(
      (fav) => fav.id !== id
    );
    const updatedIDs = [...favoritesState.favoritesIDs].filter(
      (currId) => currId !== id
    );

    localStorage.setItem('favorites', JSON.stringify(updatedFavorites));
    localStorage.setItem('favoritesIDs', JSON.stringify(updatedIDs));

    favoritesDispatch({
      type: 'set-favorites',
      payload: updatedFavorites,
    });

    favoritesDispatch({
      type: 'set-favoritesIDs',
      payload: updatedIDs,
    });
  };

  const isImageInFavorites = (id) => {
    return favoritesState.favoritesIDs.includes(id);
  };

  const switchFavorites = (image) => {
    // check if image is not in favorites list
    if (!isImageInFavorites(image.id)) {
      // then add to the list
      addToFavorites(image);
    } else {
      //remove from favorites
      removeFromFavorites(image.id);
    }
  };

  return {
    favoritesState,
    favoritesDispatch,
    handleMouseEnter,
    handleMouseLeave,
    addToFavorites,
    removeFromFavorites,
    isImageInFavorites,
    switchFavorites,
  };
};

export default useFavoritesState;
