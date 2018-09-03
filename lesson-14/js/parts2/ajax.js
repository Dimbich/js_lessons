"use strict";

require("core-js/modules/es6.promise");

function ajax() {
  var message = new Object({});
  message.loading = 'Загрузка';
  message.success = 'Спасибо! Скоро мы сВами свяжемся';
  message.failure = 'Что-то пошло не так...Ай';
  var statusMessage = document.createElement('img');
  statusMessage.classList.add('status');

  function sendForm(elem) {
    elem.addEventListener('submit', function (event) {
      event.preventDefault();
      elem.appendChild(statusMessage);
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