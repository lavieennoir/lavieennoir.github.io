import { SET_LOADING, SET_IMAGES, ADD_IMAGES } from "./actions";

export const appReducer = (state, action) => {
  switch (action.type) {
    case SET_LOADING:
      return { ...state, isLoading: action.payload };
    case SET_IMAGES:
      return { ...state, images: action.payload };
    case ADD_IMAGES:
      return {
        ...state,
        images: {
          ...state.images,
          ...action.payload,
        },
      };
    default:
      return state;
  }
};
