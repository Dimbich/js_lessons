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