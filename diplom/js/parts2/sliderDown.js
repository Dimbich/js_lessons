function sliderDown() {
//слайдер нижний
 let feedbackSlides = document.getElementsByClassName('feedback-slider-item'),
     prevSlide = document.querySelector('.feedback-slider button.main-prev-btn'),
     nextSlide = document.querySelector('.feedback-slider button.main-next-btn'),
     curSlideIndex = 1,
     timerFeedBack;

for ( let i = 0; i <feedbackSlides.length ; i++) {
  feedbackSlides[i].classList.add('fadeInLeft');
}

showFeedbackSlides(curSlideIndex);

function showFeedbackSlides(n) {

  if(n > feedbackSlides.length) {
      curSlideIndex= 1 ;
  } 

  if(n < 1) {
    curSlideIndex =  feedbackSlides.length;
  }

  for ( let i = 0 ; i <  feedbackSlides.length; i++) {
     feedbackSlides[i].style.display='none';       
  }

   
   feedbackSlides[curSlideIndex-1].style.display='block';

}

prevSlide.addEventListener('click', function() {
  clearTimeout(timerFeedBack);
  changeSlides(-1);
});

nextSlide.addEventListener('click', function() {
  clearTimeout(timerFeedBack);
  changeSlides(1);
});

function changeSlides(n) {    
  showFeedbackSlides(curSlideIndex += n);
  
  let timerID=setTimeout(function() {
      changeSlides(1);
    },5000);

  timerFeedBack = timerID;
}

window.addEventListener('DOMContentLoaded',function() {
  changeSlides(1);  
});


}

module.exports = sliderDown;