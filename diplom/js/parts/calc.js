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