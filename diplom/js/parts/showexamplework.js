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