import useImageLoader from "hooks/useImageLoader";
import imagesToLoad from "constants/images";
import { useAppState, useAppActions } from "../../reducers/AppReducer";
import { useEffect } from "react";

export default function ImageLoader() {
  useImageLoader(imagesToLoad);
  const { isLoading, images } = useAppState();
  const { setLoading } = useAppActions();

  useEffect(() => {
    if (images && Object.keys(images).length && isLoading) {
      setLoading(false);
    }
  }, [images, isLoading, setLoading]);

  return null;
}
