import { useEffect } from "react";
import ImageLoaderService from "../services/ImageLoaderService";
import { useAppActions, useAppState } from "../reducers/AppReducer";

async function storeNewImages(images) {
  if (!Object.keys(images).length) {
    return null;
  }
  const imageLoader = new ImageLoaderService();
  imageLoader.setImagesToLoad(images);
  const loaded = await imageLoader.loadImages();
  if (!Object.keys(loaded).length) {
    return null;
  }
  return loaded;
}

export default function useImageLoader(loadImages, updateExisting) {
  const { addImages } = useAppActions();
  const { images } = useAppState();

  useEffect(() => {
    const notLoadedImages = {};
    for (let key in loadImages) {
      if (updateExisting || !images[key]) {
        notLoadedImages[key] = loadImages[key];
      }
    }
    storeNewImages(notLoadedImages).then(
      (loaded) => loaded && addImages(loaded)
    );
  }, [loadImages, images, addImages, updateExisting]);

  return null;
}
