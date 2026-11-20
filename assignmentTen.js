"use strict";

const boxing = "https://www.wbaboxing.com/wp-content/uploads/2024/02/Muhammad-Ali.webp";
const wrestling = "https://upload.wikimedia.org/wikipedia/commons/4/47/WrestlingUSAF_Flag.jpg?utm_source=en.wikipedia.org&utm_campaign=imageinfo&utm_content=thumbnail_unscaled";
const storage = "currentImageState";
const img = document.getElementById("image");
const button = document.getElementById("toggle-image");

function changeImage(imageState) {
  if (imageState === "wrestling") {
    img.src = wrestling;
  } else {
    img.src = boxing;
  }
}

let current = localStorage.getItem(storage) === "wrestling" ? "wrestling" : "boxing";
changeImage(current);

button.addEventListener("click", function () {
  current = current === "boxing" ? "wrestling" : "boxing";
  changeImage(current);
  localStorage.setItem(storage, current);
});
