export const SET_LOADING = "APP/SET_LOADING";
export const SET_IMAGES = "APP/SET_IMAGES";
export const ADD_IMAGES = "APP/ADD_IMAGES";

export function setLoading(isLoading) {
  return {
    type: SET_LOADING,
    payload: isLoading,
  };
}
export function setImages(images) {
  return {
    type: SET_IMAGES,
    payload: images,
  };
}
export function addImages(images) {
  return {
    type: ADD_IMAGES,
    payload: images,
  };
}
