'use strict';

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