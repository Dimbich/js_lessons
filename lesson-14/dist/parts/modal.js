'use strict';

function modal() {
  var more = document.querySelector('.more'),
      overlay = document.querySelector('.overlay'),
      close = document.querySelector('.popup-close'),
      btnTab = document.querySelectorAll('.description-btn');

  // можно так использовать стрелочную функцию при назначении события
  more.addEventListener('click', function (event) {
    var target = event.target;
    target.classList.add('more-splash');
    overlay.style.display = "block";
    document.body.style.overflow = 'hidden';
  });

  close.addEventListener('click', function () {
    overlay.style.display = "none";
    more.classList.remove('more-splash');
    document.body.style.overflow = '';
  });

  for (var i = 0; i < btnTab.length; i++) {
    btnTab[i].addEventListener('click', function () {
      var _this = this;

      // а можно вот так	
      var showModalWindow = function showModalWindow() {
        _this.classList.add('more-splash');
        overlay.style.display = "block";
        document.body.style.overflow = 'hidden';
      };
      showModalWindow();
    });
  }
}
module.exports = modal;