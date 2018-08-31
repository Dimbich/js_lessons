"use strict";

(function () {
  function r(e, n, t) {
    function o(i, f) {
      if (!n[i]) {
        if (!e[i]) {
          var c = "function" == typeof require && require;if (!f && c) return c(i, !0);if (u) return u(i, !0);var a = new Error("Cannot find module '" + i + "'");throw a.code = "MODULE_NOT_FOUND", a;
        }var p = n[i] = { exports: {} };e[i][0].call(p.exports, function (r) {
          var n = e[i][1][r];return o(n || r);
        }, p, p.exports, r, e, n, t);
      }return n[i].exports;
    }for (var u = "function" == typeof require && require, i = 0; i < t.length; i++) {
      o(t[i]);
    }return o;
  }return r;
})()({ 1: [function (require, module, exports) {
    window.addEventListener("DOMContentLoaded", function () {
      var tab = require('../parts/tab.js');
      var modal = require('../parts/modal.js');
      var ajax = require('../parts/ajax.js');
      var slider = require('../parts/slider.js');
      var slowscroll = require('../parts/slowscroll.js');
      var calc = require('../parts/calc.js');
      var timer = require('../parts/timer.js');

      tab();
      modal();
      slider();
      calc();
      ajax();
      slowscroll();
      calc();
      timer();
    });
  }, { "../parts/ajax.js": 2, "../parts/calc.js": 3, "../parts/modal.js": 4, "../parts/slider.js": 5, "../parts/slowscroll.js": 6, "../parts/tab.js": 7, "../parts/timer.js": 8 }], 2: [function (require, module, exports) {
    function ajax() {
      var message = new Object();

      message.loading = 'Загрузка';
      message.success = 'Спасибо! Скоро мы сВами свяжемся';
      message.failure = 'Что-то пошло не так...Ай';
      statusMessage = document.createElement('img');
      statusMessage.classList.add('status');

      function sendForm(elem) {
        elem.addEventListener('submit', function (event) {
          event.preventDefault();
          elem.appendChild(statusMessage);

          var input = elem.getElementsByTagName('input'),
              formData = new FormData(elem);
          //ajax
          function postData(data) {
            return new Promise(function (resolve, reject) {
              var request = new XMLHttpRequest();

              request.open("POST", 'server.php');
              request.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
              request.onreadystatechange = function () {

                if (request.readyState < 4) {
                  resolve();
                } else if (request.readyState == 4) {

                  if (request.status == 200 && request.status < 300) {
                    resolve();
                    //добавление контента на страницу
                  } else {
                    reject();
                  }
                }
              };
              request.send(data);
            });
          } //End postData

          function clearInput() {
            for (var i = 0; i < input.length; i++) {
              input[i].value = '';
            }
          }
          /////-----Pfrjyxbk pltcm	  
          postData(formData).then(function () {
            return statusMessage.src = "../img/ajax-loader.gif";
          }).then(function () {
            return statusMessage.src = "../img/success2.png";
          }).catch(function () {
            return statusMessage.src = "../img/error.png";
          }).then(clearInput);
        });
      }

      var form = document.getElementsByClassName('main-form')[0],
          form2 = document.getElementById('form');

      sendForm(form);
      sendForm(form2);
    }

    module.exports = ajax;
  }, {}], 3: [function (require, module, exports) {
    function calc() {
      var persons = document.getElementsByClassName('counter-block-input')[0],
          restDays = document.getElementsByClassName('counter-block-input')[1],
          place = document.getElementById('select'),
          totalValue = document.getElementById('total'),
          personsSum = 0,
          daysSum = 0,
          total = 0;

      totalValue.innerHTML = 0;

      persons.addEventListener('change', function () {
        personsSum = +this.value;
        total = (daysSum + personsSum) * 4000;

        if (restDays.value == '' || this.value == '') {
          totalValue.innerHTML = 0;
        } else {
          totalValue.innerHTML = total;
        }
      });

      restDays.addEventListener('change', function () {
        daysSum = +this.value;
        total = (daysSum + personsSum) * 4000;

        if (personsSum.value == '' || this.value == '') {
          totalValue.innerHTML = 0;
        } else {
          totalValue.innerHTML = total;
        }
      });

      place.addEventListener('change', function () {

        if (personsSum.value == '' || restDays.value == '') {
          totalValue.innerHTML = 0;
        } else {
          var a = tota;
          totalValue.innerHTML = a * this.options[this.selectedIndex].value;
        }
      });

      persons.removeAttribute('type');
      restDays.removeAttribute('type');

      function checkInput(elem) {
        if (/^[1-9]\d*$/i.test(elem.value)) {
          return true;
        }
        return false;
      }

      function addNumber(elem) {
        elem.value = checkInput(elem) ? elem.value : elem.value.slice(0, -1);
      }

      persons.addEventListener('input', function () {
        addNumber(this);
      });

      restDays.addEventListener('input', function () {
        addNumber(this);
      });
    }

    module.exports = calc;
  }, {}], 4: [function (require, module, exports) {
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
  }, {}], 5: [function (require, module, exports) {
    function slider() {
      var slideIndex = 1,
          slides = document.getElementsByClassName('slider-item');
      prev = document.querySelector('.prev'), next = document.querySelector('.next'), dotsWrap = document.querySelector('.slider-dots'), dots = document.getElementsByClassName('dot');

      showSlides(slideIndex);

      function showSlides(n) {

        if (n > slides.length) {
          slideIndex = 1;
        }

        if (n < 1) {
          slideIndex = slides.length;
        }

        for (var i = 0; i < slides.length; i++) {
          slides[i].style.display = 'none';
        }

        for (var _i = 0; _i < dots.length; _i++) {
          dots[_i].classList.remove('dot-active');
        }

        slides[slideIndex - 1].style.display = 'block';
        dots[slideIndex - 1].classList.add('dot-active');
      }

      function plusSlides(n) {
        showSlides(slideIndex += n);
      }

      function curentSlide(n) {
        showSlides(slideIndex = n);
      }

      prev.addEventListener('click', function () {
        plusSlides(-1);
      });

      next.addEventListener('click', function () {
        plusSlides(1);
      });

      dotsWrap.addEventListener('click', function (event) {
        for (var i = 0; i < dots.length + 1; i++) {
          if (event.target.classList.contains('dot') && event.target == dots[i - 1]) {
            curentSlide(i);
          }
        }
      });
    }

    module.exports = slider;
  }, {}], 6: [function (require, module, exports) {
    function slowScroll() {
      var menuItems = document.querySelector('header nav ul'),
          header = document.querySelector('header'),
          headerHeight = header.offsetHeight;
      //конструктор Меню
      function Menu(elem) {
        this.about = function () {
          scrollToItem('about');
        };
        this.photo = function () {
          scrollToItem('photo');
        };
        this.price = function () {
          scrollToItem('price');
        };
        this.contacts = function () {
          scrollToItem('contacts');
        };

        //переменная для сохранения контекста объекта Menu
        var self = this;

        function scrollToItem(item) {
          var itemBody = document.getElementById(item),
              scroll = document.documentElement.scrollTop,
              docHeightAllDoc = document.documentElement.scrollHeight,
              displayHeight = document.documentElement.clientHeight;
          //положение блока текста
          posItem = itemBody.offsetTop;

          //текущее положение страницы

          //если нужный блок расположен ниже, прокуричиваем вниз
          if (posItem > scroll) {
            var moveDown = function moveDown() {
              //переменная конца прокуртки
              //Если текущее положение прокрутки больше, либо равна разнице между
              //высотой всего документа и высотой эрана, то значит все прокурутили
              var isEndDoc = scroll >= docHeightAllDoc - displayHeight;
              scroll = document.documentElement.scrollTop += 15;
              if (posItem > scroll + headerHeight && !isEndDoc) {
                requestAnimationFrame(moveDown);
              } else {
                document.documentElement.scrollTop = posItem - headerHeight;
              }
            };

            requestAnimationFrame(moveDown);
            //если нужный блок расположен выше, прокручиваем вверх    
          } else if (posItem < scroll) {
            var moveUp = function moveUp() {
              scroll = document.documentElement.scrollTop -= 15;

              if (posItem < scroll + headerHeight) {
                requestAnimationFrame(moveUp);
              } else {
                document.documentElement.scrollTop = posItem - headerHeight;
              }
            };

            requestAnimationFrame(moveUp);
          }
        }
        //добалвяем прослушиватль на клик
        elem.addEventListener('click', function (e) {
          var target = e.target;
          var action = target.getAttribute('href').substring(1);
          if (action) {
            event.preventDefault();
            self[action]();
          }
        });
      }
      //создаем экземпляр объекта меню с пунктами
      var doIt = new Menu(menuItems);
    }

    module.exports = slowScroll;
  }, {}], 7: [function (require, module, exports) {
    function tab() {
      var tab = document.getElementsByClassName('info-header-tab'),
          tabContent = document.getElementsByClassName('info-tabcontent'),
          info = document.getElementsByClassName('info-header')[0];

      var hideTabContent = function hideTabContent(a) {
        for (var i = a; i < tabContent.length; i++) {
          tabContent[i].classList.remove('show');
          tabContent[i].classList.add('hide');
        };
      };

      hideTabContent(1);

      var showTabContent = function showTabContent(b) {
        if (tabContent[b].classList.contains('hide')) {
          hideTabContent(0);
          tabContent[b].classList.remove('hide');
          tabContent[b].classList.add('show');
        }
      };

      info.addEventListener('click', function (event) {
        var target = event.target;
        if (target.className == 'info-header-tab') {
          for (var i = 0; i < tab.length; i++) {
            if (target == tab[i]) {
              showTabContent(i);
              break;
            }
          }
        }
      });
    }

    module.exports = tab;
  }, {}], 8: [function (require, module, exports) {
    function timer() {
      var deadline = '2018-08-21';

      var getTimeRemaining = function getTimeRemaining(endTime) {
        if (Date.parse(endTime) - Date.parse(new Date()) > 0) {
          var t = Date.parse(endTime) - Date.parse(new Date()),
              seconds = Math.floor(t / 1000 % 60),
              minutes = Math.floor(t / 1000 / 60 % 60),
              hours = Math.floor(t / 1000 / 60 / 60);
          return {
            'total': t,
            'minutes': minutes,
            'hours': hours,
            'seconds': seconds
          };
        } else {
          return {
            'total': 0,
            'minutes': 0,
            'hours': 0,
            'seconds': 0
          };
        }
      };

      var setClock = function setClock(id, endTime) {
        var timer = document.getElementById(id),
            hours = document.querySelector('.hours'),
            minutes = document.querySelector('.minutes'),
            seconds = document.querySelector('.seconds');

        var updateClock = function updateClock() {
          var t = getTimeRemaining(endTime);

          hours.innerHTML = addZero(t.hours);
          minutes.innerHTML = addZero(t.minutes);
          seconds.innerHTML = addZero(t.seconds);

          if (t.total <= 0) {
            clearInterval(timeInterval);
          }
        };

        var addZero = function addZero(x) {
          return x < 10 ? '0' + x : x;
        };
        var timeInterval = setInterval(updateClock, 1000);
        updateClock();
      };

      setClock('timer', deadline);
    }

    module.exports = timer;
  }, {}] }, {}, [1]);