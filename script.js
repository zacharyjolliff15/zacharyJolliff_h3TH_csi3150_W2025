const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");
const carouselTrack = document.getElementById("carouselTrack");
const images = carouselTrack.querySelectorAll("img");

const imagesVisible = 4;

let currentIndex = 0;

const totalImages = images.length;

const maxIndex = totalImages - imagesVisible;

function updateCarousel() {
  const singleImageWidth = images[0].clientWidth;

  const offset = currentIndex * singleImageWidth;

  carouselTrack.style.transform = `translateX(-${offset}px)`;
}

nextBtn.addEventListener("click", () => {
  if (currentIndex < maxIndex) {
    currentIndex++;
    updateCarousel();
  }
});

prevBtn.addEventListener("click", () => {
  if (currentIndex > 0) {
    currentIndex--;
    updateCarousel();
  }
});
