import loadImage from "utils/loadImage";

export default class ImageLoaderService {
  constructor(imagesToLoad = {}) {
    this.isLoading = false;
    this.setImagesToLoad(imagesToLoad);
  }

  setImagesToLoad(imagesToLoad) {
    this.imagesToLoad = imagesToLoad;
  }

  async loadImages() {
    if (!this.imagesToLoad) {
      this.images = {};
      return this.images;
    }
    if (this.isLoading) {
      return this.images;
    }

    this.isLoading = true;
    this.images = {};
    const promises = [];

    for (let key in this.imagesToLoad) {
      promises.push(
        loadImage(this.imagesToLoad[key]).then(
          (img) => (this.images[key] = img)
        )
      );
    }
    await Promise.all(promises);
    this.imagesToLoad = {};
    this.isLoading = false;
    return this.images;
  }
}
