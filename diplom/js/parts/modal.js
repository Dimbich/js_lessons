"use strict";

function modal() {
  //модальное окно
  var gift = document.querySelector('.fixed-gift'),
      closeButtons = document.querySelectorAll('.popup-close'),
      popupGift = document.querySelector('.popup-gift'),
      isEndDoc = false,
      isOpen = false,
      giftWasShowed = false;
  popupGift.classList.add('hidden');

  for (var i = 0; i < closeButtons.length; i++) {
    closeButtons[i].addEventListener('click', function () {
      document.body.style.overflow = '';
    });
  }

  popupGift.addEventListener('click', function (event) {
    hideModal.call(this, event);
  });
  gift.addEventListener('click', function () {
    showModal(popupGift);
  }); //orderModal

  var btnOrder = document.getElementsByClassName('button-design'),
      popupDesign = document.querySelector('.popup-design');
  popupDesign.classList.add('hidden');

  for (var _i = 0; _i < btnOrder.length; _i++) {
    btnOrder[_i].addEventListener('click', function () {
      showModal(popupDesign);
    });
  }

  popupDesign.addEventListener('click', function (event) {
    hideModal.call(this, event);
  }); //modalConsultation

  var btnConsultation = document.getElementsByClassName('button-consultation'),
      popupConsultation = document.querySelector('.popup-consultation');
  popupConsultation.classList.add('hidden');

  for (var _i2 = 0; _i2 < btnConsultation.length; _i2++) {
    btnConsultation[_i2].addEventListener('click', function () {
      showModal(popupConsultation);
    });
  }

  popupConsultation.addEventListener('click', function (event) {
    hideModal.call(this, event);
  });

  function hideModal(event) {
    if (this.classList.contains('popup-gift')) {
      giftWasShowed = true;
    } //если клик на подложке или на кнопке закрыть   


    if (this == event.target || event.target.classList.contains('popup-close')) {
      //скрываем подложку
      this.classList.add('hidden'); //отображаем прокрутку

      document.body.style.overflow = ''; //Если закрываем модальное окно подарка или конец документа

      if (giftWasShowed) {
        //скрываем подарок
        gift.classList.add('hidden'); //иначе  если была нажата кнопка отображаем подарок
      } else {
        gift.classList.remove('hidden');
      }
    }

    isOpen = false;
  }

  function showModal(event) {
    event.classList.remove('hidden');
    document.body.style.overflow = 'hidden';
    gift.classList.add('hidden');
    isOpen = true;
  } //прокрутка


  window.addEventListener('scroll', function () {
    var scroll = window.pageYOffset || document.documentElement.scrollTop,
        docHeightAllDoc = document.documentElement.scrollHeight,
        displayHeight = document.documentElement.clientHeight,
        isEndDoc = scroll >= docHeightAllDoc - displayHeight;

    if (isEndDoc && !countClick) {
      countClick++;
      showModal(popupGift);
    }
  });
  var allButtons = document.getElementsByTagName('button'),
      countClick = 0;

  for (var _i3 = 0; _i3 < allButtons.length; _i3++) {
    allButtons[_i3].addEventListener('click', function () {
      countClick++;
    });
  } //60 sec


  window.addEventListener('DOMContentLoaded', function () {
    var start = Date.now();
    var timer = setInterval(function () {
      // вычислить сколько времени прошло с начала анимации
      var timePassed = Date.now() - start; //если прошло 60 секунд

      if (timePassed >= 60000) {
        //и не открыто моальное окно
        if (!isOpen) {
          //показываем окно	
          showModal(popupConsultation);
        } //останавливаем таймер


        clearInterval(timer);
      }
    }, 500);
  });
}

module.exports = modal;