const carouselImageWrapper = document.getElementById('carousel-image-wrapper')

var goToSlide = function (x) {
  const offset = --x * 100;
  carouselImageWrapper.style.transform = `translateX(-${offset}%)`;
}
