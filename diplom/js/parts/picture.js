"use strict";

require("core-js/modules/es6.regexp.replace");

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