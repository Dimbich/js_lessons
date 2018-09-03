"use strict";

function slowScroll() {
  var menuItems = document.querySelector('header nav ul'),
      header = document.querySelector('header'),
      headerHeight = header.offsetHeight; //конструктор Меню

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
    }; //переменная для сохранения контекста объекта Menu


    var self = this;

    function scrollToItem(item) {
      var itemBody = document.getElementById(item),
          scroll = document.documentElement.scrollTop,
          docHeightAllDoc = document.documentElement.scrollHeight,
          displayHeight = document.documentElement.clientHeight,
          //положение блока текста
      posItem = itemBody.offsetTop; //текущее положение страницы
      //если нужный блок расположен ниже, прокуричиваем вниз

      if (posItem > scroll) {
        function moveDown() {
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
        }

        requestAnimationFrame(moveDown); //если нужный блок расположен выше, прокручиваем вверх    
      } else if (posItem < scroll) {
        function moveUp() {
          scroll = document.documentElement.scrollTop -= 15;

          if (posItem < scroll + headerHeight) {
            requestAnimationFrame(moveUp);
          } else {
            document.documentElement.scrollTop = posItem - headerHeight;
          }
        }

        requestAnimationFrame(moveUp);
      }
    } //добалвяем прослушиватль на клик


    elem.addEventListener('click', function (e) {
      var target = e.target;
      var action = target.getAttribute('href').substring(1);

      if (action) {
        event.preventDefault();
        self[action]();
      }
    });
  } //создаем экземпляр объекта меню с пунктами


  var doIt = new Menu(menuItems);
}

module.exports = slowScroll;