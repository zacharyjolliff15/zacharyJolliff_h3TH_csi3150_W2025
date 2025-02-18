const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");
const carouselTrack = document.getElementById("carouselTrack");
const images = carouselTrack.querySelectorAll("img");

// Number of images visible at once
const imagesVisible = 4;

// Current index for the leftmost visible image
let currentIndex = 0;

// Total number of images
const totalImages = images.length;

/**
 * The maximum "currentIndex" we can reach so that
 * there are always 4 images visible in the viewport.
 *
 * Example: If there are 8 images total, and we show 4 at a time,
 * the valid starting indices are 0,1,2,3,4 (that last one shows images 4..7).
 * So maxIndex = totalImages - imagesVisible = 8 - 4 = 4.
 */
const maxIndex = totalImages - imagesVisible;

/**
 * Shifts the carousel track by the width of "currentIndex" images.
 */
function updateCarousel() {
  // Get the width of a single image
  const singleImageWidth = images[0].clientWidth;

  // The offset is just the width of "currentIndex" images
  const offset = currentIndex * singleImageWidth;

  // Apply the translation to slide left
  carouselTrack.style.transform = `translateX(-${offset}px)`;
}

/**
 * Move to the next image if possible
 */
nextBtn.addEventListener("click", () => {
  if (currentIndex < maxIndex) {
    currentIndex++;
    updateCarousel();
  }
});

/**
 * Move to the previous image if possible
 */
prevBtn.addEventListener("click", () => {
  if (currentIndex > 0) {
    currentIndex--;
    updateCarousel();
  }
});
