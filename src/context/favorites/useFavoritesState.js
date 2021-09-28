import { useReducer } from 'react';

const reducer = (state, action) => {
  switch (action.type) {
    case 'set-hoveredImageId':
      return { ...state, hoveredImageId: action.payload };
    case 'set-favorites':
      localStorage.setItem('favorites', JSON.stringify(action.payload));
      return { ...state, favorites: action.payload };
    case 'set-favoritesIDs':
      localStorage.setItem('favoritesIDs', JSON.stringify(action.payload));
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
    console.log(
      '🚀 ~ file: useFavoritesState.js ~ line 28 ~ handleMouseEnter ~ id',
      id
    );

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

  const isImageInFavorites = (id) => {
    return favoritesState.favoritesIDs.includes(id);
  };

  const editFavorite = (user, text) => {
    const uuid = user.login.uuid;

    const updatedFavorite = { ...user, freeTextInput: text };
    const updatedFavorites = [
      ...favoritesState.favorites.map((favorite) =>
        favorite.login.uuid === uuid ? updatedFavorite : favorite
      ),
    ];

    favoritesDispatch({
      type: 'set-favorites',
      payload: updatedFavorites,
    });
  };

  const switchFavorites = (user) => {
    const uuid = user.login.uuid;
    // check if user is not in favorites list
    if (!isImageInFavorites(uuid)) {
      // then add him to the list, adding freeTextInput
      const updatedFavorites = [
        ...favoritesState.favorites,
        { ...user, freeTextInput: '' },
      ];
      const updatedUUIDs = [...favoritesState.favoritesUUIDs, uuid];

      favoritesDispatch({
        type: 'set-favorites',
        payload: updatedFavorites,
      });

      favoritesDispatch({
        type: 'set-favoritesUUIDs',
        payload: updatedUUIDs,
      });
    } else {
      //remove from favorites
      const updatedFavorites = [...favoritesState.favorites].filter(
        (fav) => fav.login.uuid !== uuid
      );
      const updatedUUIDs = [...favoritesState.favoritesUUIDs].filter(
        (id) => id !== uuid
      );
      favoritesDispatch({
        type: 'set-favorites',
        payload: updatedFavorites,
      });

      favoritesDispatch({
        type: 'set-favoritesUUIDs',
        payload: updatedUUIDs,
      });
    }
  };

  return {
    favoritesState,
    favoritesDispatch,
    handleMouseEnter,
    handleMouseLeave,
    isImageInFavorites,
    switchFavorites,
    editFavorite,
  };
};

export default useFavoritesState;
