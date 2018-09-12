"use strict";

function sliderDown() {
  //слайдер нижний
  var feedbackSlides = document.getElementsByClassName('feedback-slider-item'),
      prevSlide = document.querySelector('.feedback-slider button.main-prev-btn'),
      nextSlide = document.querySelector('.feedback-slider button.main-next-btn'),
      curSlideIndex = 1,
      timerFeedBack;

  for (var i = 0; i < feedbackSlides.length; i++) {
    feedbackSlides[i].classList.add('fadeInLeft');
  }

  showFeedbackSlides(curSlideIndex);

  function showFeedbackSlides(n) {
    if (n > feedbackSlides.length) {
      curSlideIndex = 1;
    }

    if (n < 1) {
      curSlideIndex = feedbackSlides.length;
    }

    for (var _i = 0; _i < feedbackSlides.length; _i++) {
      feedbackSlides[_i].style.display = 'none';
    }

    feedbackSlides[curSlideIndex - 1].style.display = 'block';
  }

  prevSlide.addEventListener('click', function () {
    clearTimeout(timerFeedBack);
    changeSlides(-1);
  });
  nextSlide.addEventListener('click', function () {
    clearTimeout(timerFeedBack);
    changeSlides(1);
  });

  function changeSlides(n) {
    showFeedbackSlides(curSlideIndex += n);
    var timerID = setTimeout(function () {
      changeSlides(1);
    }, 5000);
    timerFeedBack = timerID;
  }

  window.addEventListener('DOMContentLoaded', function () {
    changeSlides(1);
  });
}

module.exports = sliderDown;