"use strict";

require("core-js/modules/es6.promise");

var promise = new Promise(function (resolve, reject) {
  setTimeout(function () {
    // переведёт промис в состояние fulfilled с результатом "result"
    resolve("result");
  }, 1000);
}); // promise.then навешивает обработчики на успешный результат или ошибку

promise.then(function (result) {
  // первая функция-обработчик - запустится при вызове resolve
  alert("Fulfilled: " + result); // result - аргумент resolve
}, function (error) {
  // вторая функция - запустится при вызове reject
  alert("Rejected: " + error); // error - аргумент reject
});