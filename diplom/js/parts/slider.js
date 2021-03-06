"use strict";

function slider() {
  var slideIndex = 1,
      slides = document.getElementsByClassName('main-slider-item'),
      prev = document.querySelector('.main-prev-btn'),
      next = document.querySelector('.main-next-btn'),
      timer;

  for (var i = 0; i < slides.length; i++) {
    slides[i].classList.add('slideInDown');
  }

  showSlides(slideIndex);

  function showSlides(n) {
    if (n > slides.length) {
      slideIndex = 1;
    }

    if (n < 1) {
      slideIndex = slides.length;
    }

    for (var _i = 0; _i < slides.length; _i++) {
      slides[_i].style.display = 'none';
    }

    slides[slideIndex - 1].style.display = 'block';
  }

  prev.addEventListener('click', function () {
    clearTimeout(timer);
    plusSlides(-1);
  });
  next.addEventListener('click', function () {
    clearTimeout(timer);
    plusSlides(1);
  });

  function plusSlides(n) {
    showSlides(slideIndex += n);
    var timerID = setTimeout(function () {
      plusSlides(1);
    }, 5000);
    timer = timerID;
  }

  function curentSlide(n) {
    showSlides(slideIndex = n);
  }

  window.addEventListener('DOMContentLoaded', function () {
    plusSlides(1);
  });
}

module.exports = slider;