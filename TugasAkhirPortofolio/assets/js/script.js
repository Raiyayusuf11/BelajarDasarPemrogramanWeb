let slideIndex = 0;
const slides = document.querySelector(".slides");
const totalSlide = slides.children.length;

function showSlide(index) {
  if (index >= totalSlide) slideIndex = 0;
  if (index < 0) slideIndex = totalSlide - 1;
  slides.style.transform = `translateX(${-slideIndex * 100}%)`;
}

document.querySelector(".next").addEventListener("click", () => {
  slideIndex++;
  showSlide(slideIndex);
});

document.querySelector(".prev").addEventListener("click", () => {
  slideIndex--;
  showSlide(slideIndex);
});

showSlide(slideIndex);
