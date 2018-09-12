(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
"use strict";

function accordion() {
  var accordion = document.getElementById('accordion'),
      accordionBlock = document.getElementsByClassName('accordion-block'),
      accordionHeading = document.getElementsByClassName('accordion-heading');

  for (var i = 0; i < accordionBlock.length; i++) {
    accordionBlock[i].classList.add('fadeInDown');
  }

  hideAll();
  accordion.addEventListener('click', function (event) {
    var target = event.target;

    while (target != this) {
      if (target.classList.contains('accordion-heading')) {
        // нашли элемент, который нас интересует!
        showItem(target);
        return;
      }

      target = target.parentNode;
    }
  });

  function hideAll() {
    for (var _i = 0; _i < accordionBlock.length; _i++) {
      accordionBlock[_i].classList.add('hidden');
    }
  }

  function deleteStyle() {
    for (var _i2 = 0; _i2 < accordionHeading.length; _i2++) {
      accordionHeading[_i2].firstChild.style.cssText = "";
    }
  }

  function showItem(elem) {
    var accChildBlock = elem.nextElementSibling;

    if (accChildBlock.classList.contains('hidden')) {
      hideAll();
      deleteStyle();
      accChildBlock.classList.remove('hidden');
      elem.firstChild.style.cssText = 'color: rgba(178, 80, 188, 0.8); border-bottom: none';
    } else {
      accChildBlock.classList.add('hidden');
      elem.firstChild.style.cssText = "";
    }
  }
}

module.exports = accordion;
},{}],2:[function(require,module,exports){
"use strict";

require("core-js/modules/es6.regexp.replace");

require("core-js/modules/es6.regexp.match");

require("core-js/modules/es6.promise");

function ajax() {
  var message = new Object({});
  message.loading = 'Загрузка';
  message.success = 'Спасибо! Скоро мы сВами свяжемся';
  message.failure = 'Что-то пошло не так...Ай';
  var statusMessage = document.createElement('h4');
  statusMessage.classList.add('status');

  function sendForm(elem) {
    elem.addEventListener('submit', function (event) {
      var _this = this;

      event.preventDefault();
      var input = elem.getElementsByTagName('input'),
          formData = new FormData(elem); //ajax

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
                resolve(); //добавление контента на страницу
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
      } /////-----Pfrjyxbk pltcm    


      postData(formData).then(function () {
        statusMessage.src = "../img/ajax-loader.gif";
      }).then(function () {
        console.log(elem == form3);
        elem !== form3 ? clearDiv.call(_this, "success") : alert('Успешно отправленно');
      }) //.then(()=>{statusMessage.src="../img/success2.png"; console.log(this.parentElement);})
      .catch(function () {
        elem !== form3 ? clearDiv.call(_this, "error") : alert('Ошибка при оправке');
      }).then(clearInput);
    });
  }

  var form1 = document.querySelectorAll('.popup-content form')[0],
      form2 = document.querySelectorAll('.popup-content form')[1],
      form3 = document.querySelector('.consultation form');
  sendForm(form1);
  sendForm(form2);
  sendForm(form3);

  function clearDiv(type) {
    var element = this,
        key = true,
        btn;

    if (key) {
      console.log(element);

      while (!element.classList.contains('popup-content')) {
        element = element.parentElement;
      }

      key = false;
    }

    var btnClose = element.getElementsByTagName('button');

    for (var i = 0; i < btnClose.length; i++) {
      if (btnClose[i].classList.contains('popup-close')) {
        btn = btnClose[i];
        break;
      }
    }

    element.innerHTML = "";
    element.appendChild(btn);

    if (type == "success") {
      statusMessage.innerHTML = message.success;
    } else if (type == "error") {
      statusMessage.innerHTML = message.failure;
    }

    console.log(statusMessage);
    element.appendChild(statusMessage);
  }

  function checkInputForm(elem) {
    elem.addEventListener('input', function (event) {
      if (event.target.getAttribute('name') == 'phone') {
        addPhone(event.target);
      } else if (event.target.getAttribute('name') == 'name' || event.target.getAttribute('name') == 'message') {
        addWord(event.target);
      }
    });
  }

  checkInputForm(form1);
  checkInputForm(form2);
  checkInputForm(form3);

  function addWord(elem) {
    elem.value = existNotRusAbc(elem) ? elem.value : elem.value.slice(0, -1);
  }

  function existNotRusAbc(elem) {
    if (/^[а-яё\s\.,]*$/i.test(elem.value)) {
      return true;
    }

    return false;
  }

  function addPhone(elem) {
    var x = elem.value.replace(/\D/g, '').match(/(\d{0,3})(\d{0,3})(\d{0,4})/);
    console.log(x);
    elem.value = !x[2] ? x[1] : '(' + x[1] + ') ' + x[2] + (x[3] ? '-' + x[3] : '');
  }
}

module.exports = ajax;
},{"core-js/modules/es6.promise":58,"core-js/modules/es6.regexp.match":59,"core-js/modules/es6.regexp.replace":60}],3:[function(require,module,exports){
"use strict";

function burgerMenu() {
  var btnBurger = document.querySelector('.burger'),
      burgerMenu = document.querySelector('.burger-menu'),
      windowWidth = function windowWidth() {
    return document.documentElement.clientWidth;
  };

  burgerMenu.classList.toggle("hidden");
  btnBurger.addEventListener('click', function (event) {
    showMenu(windowWidth());
  });
  window.addEventListener('resize', function (event) {
    showMenu(windowWidth());
  });

  function showMenu(width) {
    if (width <= 768 && event.type == 'click') {
      burgerMenu.classList.toggle("hidden");
    } else if (event.type == 'resize' && !burgerMenu.classList.contains('hidden')) {
      burgerMenu.classList.add("hidden");
    }
  }
}

module.exports = burgerMenu;
},{}],4:[function(require,module,exports){
"use strict";

function calc() {
  var size = document.getElementById('size'),
      form = document.querySelector('section.calc form'),
      material = document.getElementById('material'),
      options = document.getElementById('options'),
      calcPrice = document.querySelector('.calc-price'),
      elemName,
      discount = 1,
      elem = {}; //добавил обрабочик на форму

  form = addEventListener('change', function (event) {
    //Если раскрываем список
    if (event.target.tagName == 'SELECT') {
      //добавляем свойтсва в объект elem по имени элемента
      elemName = event.target.id; //преорзуем в число

      elem[elemName] = +event.target.options[event.target.selectedIndex].value; //Если вводим промокод  	
    } else if (event.target.tagName == 'INPUT') {
      //Если промокод верный, то переопределяем скидку	
      discount = event.target.value === 'IWANTPOPART' ? 0.7 : 1;
    } //Определяем и рассчитываем итоговую стоимость


    var sum = (elem.size + elem.material + (elem.options ? elem.options : 0)) * discount; //Если получили число, то выводим его

    calcPrice.innerHTML = sum ? sum : 'Для расчета нужно выбрать размер картины и материал картины';
  }); //Устанавливаем цены

  setPrice(size, 500);
  setPrice(material, 500);
  setPrice(options, 500);

  function setPrice(elem, startPrice) {
    for (var i = 1; i < elem.length; i++) {
      elem.options[i].setAttribute('value', i * startPrice);
    }
  }
}

module.exports = calc;
},{}],5:[function(require,module,exports){
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
},{}],6:[function(require,module,exports){
"use strict";

require("core-js/modules/es6.regexp.replace");

function picture() {
  var allSizeImage = document.querySelectorAll('.sizes-block');

  for (var i = 0; i < allSizeImage.length; i++) {
    allSizeImage[i].addEventListener('mouseover', function () {
      var img = this.getElementsByTagName('img')[0];
      showPicture(img);
    });
    allSizeImage[i].addEventListener('mouseout', function () {
      var img = this.getElementsByTagName('img')[0];
      hidePicture(img);
    });
  }

  function showPicture(img) {
    img.src = img.src.replace(/(\d)/g, '$1-1');
    hideOrShowDiscrPict(img, event.type);
  }

  function hidePicture(img) {
    img.src = img.src.replace(/-1.png/g, '.png');
    hideOrShowDiscrPict(img, event.type);
  }

  function hideOrShowDiscrPict(img, eventType) {
    var parentDiv = img.parentNode,
        p = parentDiv.getElementsByTagName('p'),
        type = eventType == 'mouseover' ? 'none' : '';

    for (var _i = 0; _i < p.length; _i++) {
      if (p[_i].className !== 'sizes-hit') {
        p[_i].style.display = type;
      }
    }
  }
}

module.exports = picture;
},{"core-js/modules/es6.regexp.replace":60}],7:[function(require,module,exports){
"use strict";

function portfolio() {
  var portfolioMenu = document.querySelector('.portfolio-menu'),
      portfolioBlocks = document.getElementsByClassName('portfolio-block'),
      menuItem = portfolioMenu.getElementsByTagName('li'); //При загрузке показваем все работы

  showPorfolio('all'); //функция вызова текущего портфолио

  function curentPortfolio(name) {
    //При нажатии на меню выделяем выбранный
    for (var i = 0; i < menuItem.length; i++) {
      if (menuItem[i].classList.contains(name)) {
        menuItem[i].classList.add('active');
      } else {
        menuItem[i].classList.remove('active');
      }
    } //Вызываем функицию показана картин, по имени меню


    showPorfolio(name);
  } //функиця отображения картин


  function showPorfolio(name) {
    var countWork = 0,
        portfolioNo = document.querySelector('.portfolio-no'); //в цикле перебираем все картины деалем их видимыми,
    // после чего скрываем те у которых имя отличается от переданного

    for (var i = 0; i < portfolioBlocks.length; i++) {
      portfolioBlocks[i].classList.remove('hidden');

      if (!portfolioBlocks[i].classList.contains(name)) {
        portfolioBlocks[i].classList.add('hidden');
      } else {
        //подсчитываем количество отфильтрованных картин
        countWork++;
      }
    } //если картины есть и скрытый блок одержит один класс


    if (countWork !== 0 && portfolioNo.classList.length == 1) {
      //скрываем его 
      portfolioNo.classList.add('hidden');
    } else if (countWork == 0 && portfolioNo.classList.length > 1) {
      //иначе отобрааем   
      portfolioNo.classList.remove('hidden');
    }
  } //обработчик события по нажатию на элементе меню


  portfolioMenu.addEventListener('click', function (event) {
    if (event.target.tagName == 'LI') {
      //запоминаем название класса элемента меню и вызываем функцию показа картин
      var item = event.target.classList[0];
      curentPortfolio(item);
    }
  });
}

;
module.exports = portfolio;
},{}],8:[function(require,module,exports){
"use strict";

function showexamplework() {
  var btnStyles = document.querySelector('button.button-styles');
  btnStyles.addEventListener('click', function () {
    var pictureStyle = document.querySelectorAll('section.styles div.row>div');

    for (var i = 0; i < pictureStyle.length; i++) {
      if (~pictureStyle[i].className.indexOf('hidden')) {
        pictureStyle[i].className = 'col-sm-3 col-sm-offset-0 col-xs-10 col-xs-offset-1';
      }
    }

    this.style.display = 'none';
  });
}

module.exports = showexamplework;
},{}],9:[function(require,module,exports){
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
},{}],10:[function(require,module,exports){
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
},{}],11:[function(require,module,exports){

  let picture = require('../parts/picture.js');
  let showexamplework = require('../parts/showexamplework.js');
  let portfolio = require('../parts/portfolio.js');
  let calc = require('../parts/calc.js');
  let modal = require('../parts/modal.js');
  let slider = require('../parts/slider.js');
  let accordion = require('../parts/accordion.js');
  let burgerMenu = require('../parts/burgerMenu.js');
  let sliderDown = require('../parts/sliderDown.js');
  let ajax = require('../parts/ajax.js');

  picture();
  showexamplework();
  portfolio();
  calc();
  modal();
  slider();
  accordion();
  burgerMenu();
  sliderDown();
  ajax();
  

},{"../parts/accordion.js":1,"../parts/ajax.js":2,"../parts/burgerMenu.js":3,"../parts/calc.js":4,"../parts/modal.js":5,"../parts/picture.js":6,"../parts/portfolio.js":7,"../parts/showexamplework.js":8,"../parts/slider.js":9,"../parts/sliderDown.js":10}],12:[function(require,module,exports){
module.exports = function (it) {
  if (typeof it != 'function') throw TypeError(it + ' is not a function!');
  return it;
};

},{}],13:[function(require,module,exports){
module.exports = function (it, Constructor, name, forbiddenField) {
  if (!(it instanceof Constructor) || (forbiddenField !== undefined && forbiddenField in it)) {
    throw TypeError(name + ': incorrect invocation!');
  } return it;
};

},{}],14:[function(require,module,exports){
var isObject = require('./_is-object');
module.exports = function (it) {
  if (!isObject(it)) throw TypeError(it + ' is not an object!');
  return it;
};

},{"./_is-object":33}],15:[function(require,module,exports){
// getting tag from 19.1.3.6 Object.prototype.toString()
var cof = require('./_cof');
var TAG = require('./_wks')('toStringTag');
// ES3 wrong here
var ARG = cof(function () { return arguments; }()) == 'Arguments';

// fallback for IE11 Script Access Denied error
var tryGet = function (it, key) {
  try {
    return it[key];
  } catch (e) { /* empty */ }
};

module.exports = function (it) {
  var O, T, B;
  return it === undefined ? 'Undefined' : it === null ? 'Null'
    // @@toStringTag case
    : typeof (T = tryGet(O = Object(it), TAG)) == 'string' ? T
    // builtinTag case
    : ARG ? cof(O)
    // ES3 arguments fallback
    : (B = cof(O)) == 'Object' && typeof O.callee == 'function' ? 'Arguments' : B;
};

},{"./_cof":16,"./_wks":56}],16:[function(require,module,exports){
var toString = {}.toString;

module.exports = function (it) {
  return toString.call(it).slice(8, -1);
};

},{}],17:[function(require,module,exports){
var core = module.exports = { version: '2.5.7' };
if (typeof __e == 'number') __e = core; // eslint-disable-line no-undef

},{}],18:[function(require,module,exports){
// optional / simple context binding
var aFunction = require('./_a-function');
module.exports = function (fn, that, length) {
  aFunction(fn);
  if (that === undefined) return fn;
  switch (length) {
    case 1: return function (a) {
      return fn.call(that, a);
    };
    case 2: return function (a, b) {
      return fn.call(that, a, b);
    };
    case 3: return function (a, b, c) {
      return fn.call(that, a, b, c);
    };
  }
  return function (/* ...args */) {
    return fn.apply(that, arguments);
  };
};

},{"./_a-function":12}],19:[function(require,module,exports){
// 7.2.1 RequireObjectCoercible(argument)
module.exports = function (it) {
  if (it == undefined) throw TypeError("Can't call method on  " + it);
  return it;
};

},{}],20:[function(require,module,exports){
// Thank's IE8 for his funny defineProperty
module.exports = !require('./_fails')(function () {
  return Object.defineProperty({}, 'a', { get: function () { return 7; } }).a != 7;
});

},{"./_fails":23}],21:[function(require,module,exports){
var isObject = require('./_is-object');
var document = require('./_global').document;
// typeof document.createElement is 'object' in old IE
var is = isObject(document) && isObject(document.createElement);
module.exports = function (it) {
  return is ? document.createElement(it) : {};
};

},{"./_global":26,"./_is-object":33}],22:[function(require,module,exports){
var global = require('./_global');
var core = require('./_core');
var hide = require('./_hide');
var redefine = require('./_redefine');
var ctx = require('./_ctx');
var PROTOTYPE = 'prototype';

var $export = function (type, name, source) {
  var IS_FORCED = type & $export.F;
  var IS_GLOBAL = type & $export.G;
  var IS_STATIC = type & $export.S;
  var IS_PROTO = type & $export.P;
  var IS_BIND = type & $export.B;
  var target = IS_GLOBAL ? global : IS_STATIC ? global[name] || (global[name] = {}) : (global[name] || {})[PROTOTYPE];
  var exports = IS_GLOBAL ? core : core[name] || (core[name] = {});
  var expProto = exports[PROTOTYPE] || (exports[PROTOTYPE] = {});
  var key, own, out, exp;
  if (IS_GLOBAL) source = name;
  for (key in source) {
    // contains in native
    own = !IS_FORCED && target && target[key] !== undefined;
    // export native or passed
    out = (own ? target : source)[key];
    // bind timers to global for call from export context
    exp = IS_BIND && own ? ctx(out, global) : IS_PROTO && typeof out == 'function' ? ctx(Function.call, out) : out;
    // extend global
    if (target) redefine(target, key, out, type & $export.U);
    // export
    if (exports[key] != out) hide(exports, key, exp);
    if (IS_PROTO && expProto[key] != out) expProto[key] = out;
  }
};
global.core = core;
// type bitmap
$export.F = 1;   // forced
$export.G = 2;   // global
$export.S = 4;   // static
$export.P = 8;   // proto
$export.B = 16;  // bind
$export.W = 32;  // wrap
$export.U = 64;  // safe
$export.R = 128; // real proto method for `library`
module.exports = $export;

},{"./_core":17,"./_ctx":18,"./_global":26,"./_hide":28,"./_redefine":45}],23:[function(require,module,exports){
module.exports = function (exec) {
  try {
    return !!exec();
  } catch (e) {
    return true;
  }
};

},{}],24:[function(require,module,exports){
'use strict';
var hide = require('./_hide');
var redefine = require('./_redefine');
var fails = require('./_fails');
var defined = require('./_defined');
var wks = require('./_wks');

module.exports = function (KEY, length, exec) {
  var SYMBOL = wks(KEY);
  var fns = exec(defined, SYMBOL, ''[KEY]);
  var strfn = fns[0];
  var rxfn = fns[1];
  if (fails(function () {
    var O = {};
    O[SYMBOL] = function () { return 7; };
    return ''[KEY](O) != 7;
  })) {
    redefine(String.prototype, KEY, strfn);
    hide(RegExp.prototype, SYMBOL, length == 2
      // 21.2.5.8 RegExp.prototype[@@replace](string, replaceValue)
      // 21.2.5.11 RegExp.prototype[@@split](string, limit)
      ? function (string, arg) { return rxfn.call(string, this, arg); }
      // 21.2.5.6 RegExp.prototype[@@match](string)
      // 21.2.5.9 RegExp.prototype[@@search](string)
      : function (string) { return rxfn.call(string, this); }
    );
  }
};

},{"./_defined":19,"./_fails":23,"./_hide":28,"./_redefine":45,"./_wks":56}],25:[function(require,module,exports){
var ctx = require('./_ctx');
var call = require('./_iter-call');
var isArrayIter = require('./_is-array-iter');
var anObject = require('./_an-object');
var toLength = require('./_to-length');
var getIterFn = require('./core.get-iterator-method');
var BREAK = {};
var RETURN = {};
var exports = module.exports = function (iterable, entries, fn, that, ITERATOR) {
  var iterFn = ITERATOR ? function () { return iterable; } : getIterFn(iterable);
  var f = ctx(fn, that, entries ? 2 : 1);
  var index = 0;
  var length, step, iterator, result;
  if (typeof iterFn != 'function') throw TypeError(iterable + ' is not iterable!');
  // fast case for arrays with default iterator
  if (isArrayIter(iterFn)) for (length = toLength(iterable.length); length > index; index++) {
    result = entries ? f(anObject(step = iterable[index])[0], step[1]) : f(iterable[index]);
    if (result === BREAK || result === RETURN) return result;
  } else for (iterator = iterFn.call(iterable); !(step = iterator.next()).done;) {
    result = call(iterator, f, step.value, entries);
    if (result === BREAK || result === RETURN) return result;
  }
};
exports.BREAK = BREAK;
exports.RETURN = RETURN;

},{"./_an-object":14,"./_ctx":18,"./_is-array-iter":32,"./_iter-call":34,"./_to-length":52,"./core.get-iterator-method":57}],26:[function(require,module,exports){
// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
var global = module.exports = typeof window != 'undefined' && window.Math == Math
  ? window : typeof self != 'undefined' && self.Math == Math ? self
  // eslint-disable-next-line no-new-func
  : Function('return this')();
if (typeof __g == 'number') __g = global; // eslint-disable-line no-undef

},{}],27:[function(require,module,exports){
var hasOwnProperty = {}.hasOwnProperty;
module.exports = function (it, key) {
  return hasOwnProperty.call(it, key);
};

},{}],28:[function(require,module,exports){
var dP = require('./_object-dp');
var createDesc = require('./_property-desc');
module.exports = require('./_descriptors') ? function (object, key, value) {
  return dP.f(object, key, createDesc(1, value));
} : function (object, key, value) {
  object[key] = value;
  return object;
};

},{"./_descriptors":20,"./_object-dp":40,"./_property-desc":43}],29:[function(require,module,exports){
var document = require('./_global').document;
module.exports = document && document.documentElement;

},{"./_global":26}],30:[function(require,module,exports){
module.exports = !require('./_descriptors') && !require('./_fails')(function () {
  return Object.defineProperty(require('./_dom-create')('div'), 'a', { get: function () { return 7; } }).a != 7;
});

},{"./_descriptors":20,"./_dom-create":21,"./_fails":23}],31:[function(require,module,exports){
// fast apply, http://jsperf.lnkit.com/fast-apply/5
module.exports = function (fn, args, that) {
  var un = that === undefined;
  switch (args.length) {
    case 0: return un ? fn()
                      : fn.call(that);
    case 1: return un ? fn(args[0])
                      : fn.call(that, args[0]);
    case 2: return un ? fn(args[0], args[1])
                      : fn.call(that, args[0], args[1]);
    case 3: return un ? fn(args[0], args[1], args[2])
                      : fn.call(that, args[0], args[1], args[2]);
    case 4: return un ? fn(args[0], args[1], args[2], args[3])
                      : fn.call(that, args[0], args[1], args[2], args[3]);
  } return fn.apply(that, args);
};

},{}],32:[function(require,module,exports){
// check on default Array iterator
var Iterators = require('./_iterators');
var ITERATOR = require('./_wks')('iterator');
var ArrayProto = Array.prototype;

module.exports = function (it) {
  return it !== undefined && (Iterators.Array === it || ArrayProto[ITERATOR] === it);
};

},{"./_iterators":36,"./_wks":56}],33:[function(require,module,exports){
module.exports = function (it) {
  return typeof it === 'object' ? it !== null : typeof it === 'function';
};

},{}],34:[function(require,module,exports){
// call something on iterator step with safe closing on error
var anObject = require('./_an-object');
module.exports = function (iterator, fn, value, entries) {
  try {
    return entries ? fn(anObject(value)[0], value[1]) : fn(value);
  // 7.4.6 IteratorClose(iterator, completion)
  } catch (e) {
    var ret = iterator['return'];
    if (ret !== undefined) anObject(ret.call(iterator));
    throw e;
  }
};

},{"./_an-object":14}],35:[function(require,module,exports){
var ITERATOR = require('./_wks')('iterator');
var SAFE_CLOSING = false;

try {
  var riter = [7][ITERATOR]();
  riter['return'] = function () { SAFE_CLOSING = true; };
  // eslint-disable-next-line no-throw-literal
  Array.from(riter, function () { throw 2; });
} catch (e) { /* empty */ }

module.exports = function (exec, skipClosing) {
  if (!skipClosing && !SAFE_CLOSING) return false;
  var safe = false;
  try {
    var arr = [7];
    var iter = arr[ITERATOR]();
    iter.next = function () { return { done: safe = true }; };
    arr[ITERATOR] = function () { return iter; };
    exec(arr);
  } catch (e) { /* empty */ }
  return safe;
};

},{"./_wks":56}],36:[function(require,module,exports){
module.exports = {};

},{}],37:[function(require,module,exports){
module.exports = false;

},{}],38:[function(require,module,exports){
var global = require('./_global');
var macrotask = require('./_task').set;
var Observer = global.MutationObserver || global.WebKitMutationObserver;
var process = global.process;
var Promise = global.Promise;
var isNode = require('./_cof')(process) == 'process';

module.exports = function () {
  var head, last, notify;

  var flush = function () {
    var parent, fn;
    if (isNode && (parent = process.domain)) parent.exit();
    while (head) {
      fn = head.fn;
      head = head.next;
      try {
        fn();
      } catch (e) {
        if (head) notify();
        else last = undefined;
        throw e;
      }
    } last = undefined;
    if (parent) parent.enter();
  };

  // Node.js
  if (isNode) {
    notify = function () {
      process.nextTick(flush);
    };
  // browsers with MutationObserver, except iOS Safari - https://github.com/zloirock/core-js/issues/339
  } else if (Observer && !(global.navigator && global.navigator.standalone)) {
    var toggle = true;
    var node = document.createTextNode('');
    new Observer(flush).observe(node, { characterData: true }); // eslint-disable-line no-new
    notify = function () {
      node.data = toggle = !toggle;
    };
  // environments with maybe non-completely correct, but existent Promise
  } else if (Promise && Promise.resolve) {
    // Promise.resolve without an argument throws an error in LG WebOS 2
    var promise = Promise.resolve(undefined);
    notify = function () {
      promise.then(flush);
    };
  // for other environments - macrotask based on:
  // - setImmediate
  // - MessageChannel
  // - window.postMessag
  // - onreadystatechange
  // - setTimeout
  } else {
    notify = function () {
      // strange IE + webpack dev server bug - use .call(global)
      macrotask.call(global, flush);
    };
  }

  return function (fn) {
    var task = { fn: fn, next: undefined };
    if (last) last.next = task;
    if (!head) {
      head = task;
      notify();
    } last = task;
  };
};

},{"./_cof":16,"./_global":26,"./_task":50}],39:[function(require,module,exports){
'use strict';
// 25.4.1.5 NewPromiseCapability(C)
var aFunction = require('./_a-function');

function PromiseCapability(C) {
  var resolve, reject;
  this.promise = new C(function ($$resolve, $$reject) {
    if (resolve !== undefined || reject !== undefined) throw TypeError('Bad Promise constructor');
    resolve = $$resolve;
    reject = $$reject;
  });
  this.resolve = aFunction(resolve);
  this.reject = aFunction(reject);
}

module.exports.f = function (C) {
  return new PromiseCapability(C);
};

},{"./_a-function":12}],40:[function(require,module,exports){
var anObject = require('./_an-object');
var IE8_DOM_DEFINE = require('./_ie8-dom-define');
var toPrimitive = require('./_to-primitive');
var dP = Object.defineProperty;

exports.f = require('./_descriptors') ? Object.defineProperty : function defineProperty(O, P, Attributes) {
  anObject(O);
  P = toPrimitive(P, true);
  anObject(Attributes);
  if (IE8_DOM_DEFINE) try {
    return dP(O, P, Attributes);
  } catch (e) { /* empty */ }
  if ('get' in Attributes || 'set' in Attributes) throw TypeError('Accessors not supported!');
  if ('value' in Attributes) O[P] = Attributes.value;
  return O;
};

},{"./_an-object":14,"./_descriptors":20,"./_ie8-dom-define":30,"./_to-primitive":53}],41:[function(require,module,exports){
module.exports = function (exec) {
  try {
    return { e: false, v: exec() };
  } catch (e) {
    return { e: true, v: e };
  }
};

},{}],42:[function(require,module,exports){
var anObject = require('./_an-object');
var isObject = require('./_is-object');
var newPromiseCapability = require('./_new-promise-capability');

module.exports = function (C, x) {
  anObject(C);
  if (isObject(x) && x.constructor === C) return x;
  var promiseCapability = newPromiseCapability.f(C);
  var resolve = promiseCapability.resolve;
  resolve(x);
  return promiseCapability.promise;
};

},{"./_an-object":14,"./_is-object":33,"./_new-promise-capability":39}],43:[function(require,module,exports){
module.exports = function (bitmap, value) {
  return {
    enumerable: !(bitmap & 1),
    configurable: !(bitmap & 2),
    writable: !(bitmap & 4),
    value: value
  };
};

},{}],44:[function(require,module,exports){
var redefine = require('./_redefine');
module.exports = function (target, src, safe) {
  for (var key in src) redefine(target, key, src[key], safe);
  return target;
};

},{"./_redefine":45}],45:[function(require,module,exports){
var global = require('./_global');
var hide = require('./_hide');
var has = require('./_has');
var SRC = require('./_uid')('src');
var TO_STRING = 'toString';
var $toString = Function[TO_STRING];
var TPL = ('' + $toString).split(TO_STRING);

require('./_core').inspectSource = function (it) {
  return $toString.call(it);
};

(module.exports = function (O, key, val, safe) {
  var isFunction = typeof val == 'function';
  if (isFunction) has(val, 'name') || hide(val, 'name', key);
  if (O[key] === val) return;
  if (isFunction) has(val, SRC) || hide(val, SRC, O[key] ? '' + O[key] : TPL.join(String(key)));
  if (O === global) {
    O[key] = val;
  } else if (!safe) {
    delete O[key];
    hide(O, key, val);
  } else if (O[key]) {
    O[key] = val;
  } else {
    hide(O, key, val);
  }
// add fake Function#toString for correct work wrapped methods / constructors with methods like LoDash isNative
})(Function.prototype, TO_STRING, function toString() {
  return typeof this == 'function' && this[SRC] || $toString.call(this);
});

},{"./_core":17,"./_global":26,"./_has":27,"./_hide":28,"./_uid":54}],46:[function(require,module,exports){
'use strict';
var global = require('./_global');
var dP = require('./_object-dp');
var DESCRIPTORS = require('./_descriptors');
var SPECIES = require('./_wks')('species');

module.exports = function (KEY) {
  var C = global[KEY];
  if (DESCRIPTORS && C && !C[SPECIES]) dP.f(C, SPECIES, {
    configurable: true,
    get: function () { return this; }
  });
};

},{"./_descriptors":20,"./_global":26,"./_object-dp":40,"./_wks":56}],47:[function(require,module,exports){
var def = require('./_object-dp').f;
var has = require('./_has');
var TAG = require('./_wks')('toStringTag');

module.exports = function (it, tag, stat) {
  if (it && !has(it = stat ? it : it.prototype, TAG)) def(it, TAG, { configurable: true, value: tag });
};

},{"./_has":27,"./_object-dp":40,"./_wks":56}],48:[function(require,module,exports){
var core = require('./_core');
var global = require('./_global');
var SHARED = '__core-js_shared__';
var store = global[SHARED] || (global[SHARED] = {});

(module.exports = function (key, value) {
  return store[key] || (store[key] = value !== undefined ? value : {});
})('versions', []).push({
  version: core.version,
  mode: require('./_library') ? 'pure' : 'global',
  copyright: '© 2018 Denis Pushkarev (zloirock.ru)'
});

},{"./_core":17,"./_global":26,"./_library":37}],49:[function(require,module,exports){
// 7.3.20 SpeciesConstructor(O, defaultConstructor)
var anObject = require('./_an-object');
var aFunction = require('./_a-function');
var SPECIES = require('./_wks')('species');
module.exports = function (O, D) {
  var C = anObject(O).constructor;
  var S;
  return C === undefined || (S = anObject(C)[SPECIES]) == undefined ? D : aFunction(S);
};

},{"./_a-function":12,"./_an-object":14,"./_wks":56}],50:[function(require,module,exports){
var ctx = require('./_ctx');
var invoke = require('./_invoke');
var html = require('./_html');
var cel = require('./_dom-create');
var global = require('./_global');
var process = global.process;
var setTask = global.setImmediate;
var clearTask = global.clearImmediate;
var MessageChannel = global.MessageChannel;
var Dispatch = global.Dispatch;
var counter = 0;
var queue = {};
var ONREADYSTATECHANGE = 'onreadystatechange';
var defer, channel, port;
var run = function () {
  var id = +this;
  // eslint-disable-next-line no-prototype-builtins
  if (queue.hasOwnProperty(id)) {
    var fn = queue[id];
    delete queue[id];
    fn();
  }
};
var listener = function (event) {
  run.call(event.data);
};
// Node.js 0.9+ & IE10+ has setImmediate, otherwise:
if (!setTask || !clearTask) {
  setTask = function setImmediate(fn) {
    var args = [];
    var i = 1;
    while (arguments.length > i) args.push(arguments[i++]);
    queue[++counter] = function () {
      // eslint-disable-next-line no-new-func
      invoke(typeof fn == 'function' ? fn : Function(fn), args);
    };
    defer(counter);
    return counter;
  };
  clearTask = function clearImmediate(id) {
    delete queue[id];
  };
  // Node.js 0.8-
  if (require('./_cof')(process) == 'process') {
    defer = function (id) {
      process.nextTick(ctx(run, id, 1));
    };
  // Sphere (JS game engine) Dispatch API
  } else if (Dispatch && Dispatch.now) {
    defer = function (id) {
      Dispatch.now(ctx(run, id, 1));
    };
  // Browsers with MessageChannel, includes WebWorkers
  } else if (MessageChannel) {
    channel = new MessageChannel();
    port = channel.port2;
    channel.port1.onmessage = listener;
    defer = ctx(port.postMessage, port, 1);
  // Browsers with postMessage, skip WebWorkers
  // IE8 has postMessage, but it's sync & typeof its postMessage is 'object'
  } else if (global.addEventListener && typeof postMessage == 'function' && !global.importScripts) {
    defer = function (id) {
      global.postMessage(id + '', '*');
    };
    global.addEventListener('message', listener, false);
  // IE8-
  } else if (ONREADYSTATECHANGE in cel('script')) {
    defer = function (id) {
      html.appendChild(cel('script'))[ONREADYSTATECHANGE] = function () {
        html.removeChild(this);
        run.call(id);
      };
    };
  // Rest old browsers
  } else {
    defer = function (id) {
      setTimeout(ctx(run, id, 1), 0);
    };
  }
}
module.exports = {
  set: setTask,
  clear: clearTask
};

},{"./_cof":16,"./_ctx":18,"./_dom-create":21,"./_global":26,"./_html":29,"./_invoke":31}],51:[function(require,module,exports){
// 7.1.4 ToInteger
var ceil = Math.ceil;
var floor = Math.floor;
module.exports = function (it) {
  return isNaN(it = +it) ? 0 : (it > 0 ? floor : ceil)(it);
};

},{}],52:[function(require,module,exports){
// 7.1.15 ToLength
var toInteger = require('./_to-integer');
var min = Math.min;
module.exports = function (it) {
  return it > 0 ? min(toInteger(it), 0x1fffffffffffff) : 0; // pow(2, 53) - 1 == 9007199254740991
};

},{"./_to-integer":51}],53:[function(require,module,exports){
// 7.1.1 ToPrimitive(input [, PreferredType])
var isObject = require('./_is-object');
// instead of the ES6 spec version, we didn't implement @@toPrimitive case
// and the second argument - flag - preferred type is a string
module.exports = function (it, S) {
  if (!isObject(it)) return it;
  var fn, val;
  if (S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
  if (typeof (fn = it.valueOf) == 'function' && !isObject(val = fn.call(it))) return val;
  if (!S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
  throw TypeError("Can't convert object to primitive value");
};

},{"./_is-object":33}],54:[function(require,module,exports){
var id = 0;
var px = Math.random();
module.exports = function (key) {
  return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++id + px).toString(36));
};

},{}],55:[function(require,module,exports){
var global = require('./_global');
var navigator = global.navigator;

module.exports = navigator && navigator.userAgent || '';

},{"./_global":26}],56:[function(require,module,exports){
var store = require('./_shared')('wks');
var uid = require('./_uid');
var Symbol = require('./_global').Symbol;
var USE_SYMBOL = typeof Symbol == 'function';

var $exports = module.exports = function (name) {
  return store[name] || (store[name] =
    USE_SYMBOL && Symbol[name] || (USE_SYMBOL ? Symbol : uid)('Symbol.' + name));
};

$exports.store = store;

},{"./_global":26,"./_shared":48,"./_uid":54}],57:[function(require,module,exports){
var classof = require('./_classof');
var ITERATOR = require('./_wks')('iterator');
var Iterators = require('./_iterators');
module.exports = require('./_core').getIteratorMethod = function (it) {
  if (it != undefined) return it[ITERATOR]
    || it['@@iterator']
    || Iterators[classof(it)];
};

},{"./_classof":15,"./_core":17,"./_iterators":36,"./_wks":56}],58:[function(require,module,exports){
'use strict';
var LIBRARY = require('./_library');
var global = require('./_global');
var ctx = require('./_ctx');
var classof = require('./_classof');
var $export = require('./_export');
var isObject = require('./_is-object');
var aFunction = require('./_a-function');
var anInstance = require('./_an-instance');
var forOf = require('./_for-of');
var speciesConstructor = require('./_species-constructor');
var task = require('./_task').set;
var microtask = require('./_microtask')();
var newPromiseCapabilityModule = require('./_new-promise-capability');
var perform = require('./_perform');
var userAgent = require('./_user-agent');
var promiseResolve = require('./_promise-resolve');
var PROMISE = 'Promise';
var TypeError = global.TypeError;
var process = global.process;
var versions = process && process.versions;
var v8 = versions && versions.v8 || '';
var $Promise = global[PROMISE];
var isNode = classof(process) == 'process';
var empty = function () { /* empty */ };
var Internal, newGenericPromiseCapability, OwnPromiseCapability, Wrapper;
var newPromiseCapability = newGenericPromiseCapability = newPromiseCapabilityModule.f;

var USE_NATIVE = !!function () {
  try {
    // correct subclassing with @@species support
    var promise = $Promise.resolve(1);
    var FakePromise = (promise.constructor = {})[require('./_wks')('species')] = function (exec) {
      exec(empty, empty);
    };
    // unhandled rejections tracking support, NodeJS Promise without it fails @@species test
    return (isNode || typeof PromiseRejectionEvent == 'function')
      && promise.then(empty) instanceof FakePromise
      // v8 6.6 (Node 10 and Chrome 66) have a bug with resolving custom thenables
      // https://bugs.chromium.org/p/chromium/issues/detail?id=830565
      // we can't detect it synchronously, so just check versions
      && v8.indexOf('6.6') !== 0
      && userAgent.indexOf('Chrome/66') === -1;
  } catch (e) { /* empty */ }
}();

// helpers
var isThenable = function (it) {
  var then;
  return isObject(it) && typeof (then = it.then) == 'function' ? then : false;
};
var notify = function (promise, isReject) {
  if (promise._n) return;
  promise._n = true;
  var chain = promise._c;
  microtask(function () {
    var value = promise._v;
    var ok = promise._s == 1;
    var i = 0;
    var run = function (reaction) {
      var handler = ok ? reaction.ok : reaction.fail;
      var resolve = reaction.resolve;
      var reject = reaction.reject;
      var domain = reaction.domain;
      var result, then, exited;
      try {
        if (handler) {
          if (!ok) {
            if (promise._h == 2) onHandleUnhandled(promise);
            promise._h = 1;
          }
          if (handler === true) result = value;
          else {
            if (domain) domain.enter();
            result = handler(value); // may throw
            if (domain) {
              domain.exit();
              exited = true;
            }
          }
          if (result === reaction.promise) {
            reject(TypeError('Promise-chain cycle'));
          } else if (then = isThenable(result)) {
            then.call(result, resolve, reject);
          } else resolve(result);
        } else reject(value);
      } catch (e) {
        if (domain && !exited) domain.exit();
        reject(e);
      }
    };
    while (chain.length > i) run(chain[i++]); // variable length - can't use forEach
    promise._c = [];
    promise._n = false;
    if (isReject && !promise._h) onUnhandled(promise);
  });
};
var onUnhandled = function (promise) {
  task.call(global, function () {
    var value = promise._v;
    var unhandled = isUnhandled(promise);
    var result, handler, console;
    if (unhandled) {
      result = perform(function () {
        if (isNode) {
          process.emit('unhandledRejection', value, promise);
        } else if (handler = global.onunhandledrejection) {
          handler({ promise: promise, reason: value });
        } else if ((console = global.console) && console.error) {
          console.error('Unhandled promise rejection', value);
        }
      });
      // Browsers should not trigger `rejectionHandled` event if it was handled here, NodeJS - should
      promise._h = isNode || isUnhandled(promise) ? 2 : 1;
    } promise._a = undefined;
    if (unhandled && result.e) throw result.v;
  });
};
var isUnhandled = function (promise) {
  return promise._h !== 1 && (promise._a || promise._c).length === 0;
};
var onHandleUnhandled = function (promise) {
  task.call(global, function () {
    var handler;
    if (isNode) {
      process.emit('rejectionHandled', promise);
    } else if (handler = global.onrejectionhandled) {
      handler({ promise: promise, reason: promise._v });
    }
  });
};
var $reject = function (value) {
  var promise = this;
  if (promise._d) return;
  promise._d = true;
  promise = promise._w || promise; // unwrap
  promise._v = value;
  promise._s = 2;
  if (!promise._a) promise._a = promise._c.slice();
  notify(promise, true);
};
var $resolve = function (value) {
  var promise = this;
  var then;
  if (promise._d) return;
  promise._d = true;
  promise = promise._w || promise; // unwrap
  try {
    if (promise === value) throw TypeError("Promise can't be resolved itself");
    if (then = isThenable(value)) {
      microtask(function () {
        var wrapper = { _w: promise, _d: false }; // wrap
        try {
          then.call(value, ctx($resolve, wrapper, 1), ctx($reject, wrapper, 1));
        } catch (e) {
          $reject.call(wrapper, e);
        }
      });
    } else {
      promise._v = value;
      promise._s = 1;
      notify(promise, false);
    }
  } catch (e) {
    $reject.call({ _w: promise, _d: false }, e); // wrap
  }
};

// constructor polyfill
if (!USE_NATIVE) {
  // 25.4.3.1 Promise(executor)
  $Promise = function Promise(executor) {
    anInstance(this, $Promise, PROMISE, '_h');
    aFunction(executor);
    Internal.call(this);
    try {
      executor(ctx($resolve, this, 1), ctx($reject, this, 1));
    } catch (err) {
      $reject.call(this, err);
    }
  };
  // eslint-disable-next-line no-unused-vars
  Internal = function Promise(executor) {
    this._c = [];             // <- awaiting reactions
    this._a = undefined;      // <- checked in isUnhandled reactions
    this._s = 0;              // <- state
    this._d = false;          // <- done
    this._v = undefined;      // <- value
    this._h = 0;              // <- rejection state, 0 - default, 1 - handled, 2 - unhandled
    this._n = false;          // <- notify
  };
  Internal.prototype = require('./_redefine-all')($Promise.prototype, {
    // 25.4.5.3 Promise.prototype.then(onFulfilled, onRejected)
    then: function then(onFulfilled, onRejected) {
      var reaction = newPromiseCapability(speciesConstructor(this, $Promise));
      reaction.ok = typeof onFulfilled == 'function' ? onFulfilled : true;
      reaction.fail = typeof onRejected == 'function' && onRejected;
      reaction.domain = isNode ? process.domain : undefined;
      this._c.push(reaction);
      if (this._a) this._a.push(reaction);
      if (this._s) notify(this, false);
      return reaction.promise;
    },
    // 25.4.5.1 Promise.prototype.catch(onRejected)
    'catch': function (onRejected) {
      return this.then(undefined, onRejected);
    }
  });
  OwnPromiseCapability = function () {
    var promise = new Internal();
    this.promise = promise;
    this.resolve = ctx($resolve, promise, 1);
    this.reject = ctx($reject, promise, 1);
  };
  newPromiseCapabilityModule.f = newPromiseCapability = function (C) {
    return C === $Promise || C === Wrapper
      ? new OwnPromiseCapability(C)
      : newGenericPromiseCapability(C);
  };
}

$export($export.G + $export.W + $export.F * !USE_NATIVE, { Promise: $Promise });
require('./_set-to-string-tag')($Promise, PROMISE);
require('./_set-species')(PROMISE);
Wrapper = require('./_core')[PROMISE];

// statics
$export($export.S + $export.F * !USE_NATIVE, PROMISE, {
  // 25.4.4.5 Promise.reject(r)
  reject: function reject(r) {
    var capability = newPromiseCapability(this);
    var $$reject = capability.reject;
    $$reject(r);
    return capability.promise;
  }
});
$export($export.S + $export.F * (LIBRARY || !USE_NATIVE), PROMISE, {
  // 25.4.4.6 Promise.resolve(x)
  resolve: function resolve(x) {
    return promiseResolve(LIBRARY && this === Wrapper ? $Promise : this, x);
  }
});
$export($export.S + $export.F * !(USE_NATIVE && require('./_iter-detect')(function (iter) {
  $Promise.all(iter)['catch'](empty);
})), PROMISE, {
  // 25.4.4.1 Promise.all(iterable)
  all: function all(iterable) {
    var C = this;
    var capability = newPromiseCapability(C);
    var resolve = capability.resolve;
    var reject = capability.reject;
    var result = perform(function () {
      var values = [];
      var index = 0;
      var remaining = 1;
      forOf(iterable, false, function (promise) {
        var $index = index++;
        var alreadyCalled = false;
        values.push(undefined);
        remaining++;
        C.resolve(promise).then(function (value) {
          if (alreadyCalled) return;
          alreadyCalled = true;
          values[$index] = value;
          --remaining || resolve(values);
        }, reject);
      });
      --remaining || resolve(values);
    });
    if (result.e) reject(result.v);
    return capability.promise;
  },
  // 25.4.4.4 Promise.race(iterable)
  race: function race(iterable) {
    var C = this;
    var capability = newPromiseCapability(C);
    var reject = capability.reject;
    var result = perform(function () {
      forOf(iterable, false, function (promise) {
        C.resolve(promise).then(capability.resolve, reject);
      });
    });
    if (result.e) reject(result.v);
    return capability.promise;
  }
});

},{"./_a-function":12,"./_an-instance":13,"./_classof":15,"./_core":17,"./_ctx":18,"./_export":22,"./_for-of":25,"./_global":26,"./_is-object":33,"./_iter-detect":35,"./_library":37,"./_microtask":38,"./_new-promise-capability":39,"./_perform":41,"./_promise-resolve":42,"./_redefine-all":44,"./_set-species":46,"./_set-to-string-tag":47,"./_species-constructor":49,"./_task":50,"./_user-agent":55,"./_wks":56}],59:[function(require,module,exports){
// @@match logic
require('./_fix-re-wks')('match', 1, function (defined, MATCH, $match) {
  // 21.1.3.11 String.prototype.match(regexp)
  return [function match(regexp) {
    'use strict';
    var O = defined(this);
    var fn = regexp == undefined ? undefined : regexp[MATCH];
    return fn !== undefined ? fn.call(regexp, O) : new RegExp(regexp)[MATCH](String(O));
  }, $match];
});

},{"./_fix-re-wks":24}],60:[function(require,module,exports){
// @@replace logic
require('./_fix-re-wks')('replace', 2, function (defined, REPLACE, $replace) {
  // 21.1.3.14 String.prototype.replace(searchValue, replaceValue)
  return [function replace(searchValue, replaceValue) {
    'use strict';
    var O = defined(this);
    var fn = searchValue == undefined ? undefined : searchValue[REPLACE];
    return fn !== undefined
      ? fn.call(searchValue, O, replaceValue)
      : $replace.call(String(O), searchValue, replaceValue);
  }, $replace];
});

},{"./_fix-re-wks":24}]},{},[11]);
