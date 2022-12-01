// (function () {
//   let firstSlider = document.querySelector('.first-slider-main-page-hotel');
//   let firstSliderButtonNext = firstSlider.querySelector('.slick-next');
//   let firstSliderButtonPrev = firstSlider.querySelector('.slick-prev');
//   let secondSlider = document.querySelector('.second-slider-main-page-hotel');
//   let secondSliderButtonNext = secondSlider.querySelector('.slick-next');
//   let secondSliderButtonPrev = secondSlider.querySelector('.slick-prev');
//   secondSliderButtonPrev.addEventListener('click', function () {
//     firstSliderButtonPrev.click();
//   });
//   secondSliderButtonNext.addEventListener('click', function () {
//     firstSliderButtonNext.click();
//   });
//   (function () {
//     firstSliderButtonPrev.classList.toggle('is-hidden');
//     firstSliderButtonNext.classList.toggle('is-hidden');
//   })();
// })();

// second slider
(function () {
  let firstSlider = document.querySelector(
    '.first-slider-main-page-restaurant'
  );
  let firstSliderButtonNext = firstSlider.querySelector('.slick-next');
  let firstSliderButtonPrev = firstSlider.querySelector('.slick-prev');
  let secondSlider = document.querySelector(
    '.second-slider-main-page-restaurant'
  );
  let secondSliderButtonNext = secondSlider.querySelector('.slick-next');
  let secondSliderButtonPrev = secondSlider.querySelector('.slick-prev');
  // let mainButtons = document.querySelector('.restaurant-about-main-buttons');
  let mainLeftButtons = document.querySelector(
    '.restaurant-about-slider__button--left'
  );
  let mainRightButtons = document.querySelector(
    '.restaurant-about-slider__button--right'
  );
  // secondSliderButtonPrev.addEventListener('click', function () {
  //   firstSliderButtonPrev.click();
  // });
  // secondSliderButtonNext.addEventListener('click', function () {
  //   firstSliderButtonNext.click();
  // });
  mainLeftButtons.addEventListener('click', function () {
    firstSliderButtonPrev.click();
    secondSliderButtonPrev.click();
  });
  mainRightButtons.addEventListener('click', function () {
    firstSliderButtonNext.click();
    secondSliderButtonNext.click();
  });
  // mainButtonNext.addEventListener('click', function () {
  //   secondSliderButtonNext.click();
  // });
  // mainButtonPrev.addEventListener('click', function () {
  //   firstSliderButtonPrev.click();
  // });
  // mainButtonPrev.addEventListener('click', function () {
  //   secondSliderButtonPrev.click();
  // });
  (function () {
    firstSliderButtonPrev.classList.toggle('is-hidden');
    firstSliderButtonNext.classList.toggle('is-hidden');
    secondSliderButtonPrev.classList.toggle('is-hidden');
    secondSliderButtonNext.classList.toggle('is-hidden');
  })();
})();
