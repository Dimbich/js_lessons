'use strict';

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