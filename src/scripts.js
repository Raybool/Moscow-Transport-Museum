const carousel = document.getElementById("carousel");
const nextButton = document.getElementById("turnRight");
const prevButton = document.getElementById("turnLeft");

let currentIndex = 0;
let carouselWidth = 0;
const cardWidth = 580;
// const defButton = prevButton.offsetWidth;

// const setMainPosition = () => {
//   if (currentIndex === 0) {
//     carousel.style.transform = `translateX( ${defButton}px )`;
//   }
// };

const slideRoundToIndex = (side) => {
  switch (side) {
    case "left":
      if (currentIndex > 0) {
        currentIndex--;
      } else {
        currentIndex = carousel.children.length - 2;
      }
      break;

    case "right":
      if (currentIndex < carousel.children.length - 2) {
        currentIndex++;
      } else {
        currentIndex = 0;
      }
      break;
  }
};

const setWidthByIndex = (side) => {
  carouselWidth = (cardWidth + 15) * currentIndex;
};

const setCarouselWidth = () => {
  carousel.style.transform = `translateX( -${carouselWidth}px)`;
};

nextButton.addEventListener("click", () => {
  slideRoundToIndex("right");

  setWidthByIndex("right");

  setCarouselWidth();
});

prevButton.addEventListener("click", () => {
  slideRoundToIndex("left");

  setWidthByIndex("left");

  setCarouselWidth();
});
