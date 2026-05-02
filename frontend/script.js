const bar = document.getElementById("bar");

const nav = document.getElementById("navbar");

const close = document.getElementById("close");

if (bar) {
  bar.addEventListener("click", () => {
    nav.classList.toggle("active");
  });
}

if (close) {
  close.addEventListener("click", () => {
    nav.classList.remove("active");
  });
}

// Image change for the product page.

const mainImage = document.querySelector(".img1");
const smallImages = document.querySelectorAll(".small-img-col img");

smallImages.forEach((smallImage) => {
  smallImage.addEventListener("click", () => {
    mainImage.src = smallImage.src;
  });
});
