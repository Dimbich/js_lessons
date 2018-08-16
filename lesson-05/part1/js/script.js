let menu = document.querySelector('.menu');

let menuItem = document.querySelectorAll('.menu-item');

menu.insertBefore(menuItem[2], menuItem[1]);

let newMenuItem = document.createElement('li');

newMenuItem.innerHTML='Пятый пункт';

newMenuItem.classList.add("menu-item");

menu.appendChild(newMenuItem);

document.body.style.background ="url('../part1/img/apple_true.jpg') center no-repeat";

document.querySelector('#title').textContent="Мы продаем только подлинную технику Apple";

document.querySelectorAll('.column')[document.querySelectorAll('.column').length-1]
.removeChild(document.querySelector('.adv'));

document.querySelector('#prompt').innerHTML = prompt('Как вы относитесь к технике Apple?', "");