export default function loadImage(src) {
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.onload = function () {
      resolve(img);
    };
    img.onerror = function (e) {
      reject(img, e);
    };
    img.src = src;
  });
}
