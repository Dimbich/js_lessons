/*
//вывод в консоль
console.log(button);

console.log(nameValue);
console.log(budgetValue);
console.log(goodsValue);
console.log(itemsValue);
console.log(discountValue);
console.log(discountValue);
console.log(goodsCategory);

console.log(buttons);

console.log(items);
console.log(time);
console.log(budget);

console.log(employers);*/

// кнопка
let button = document.getElementById('open-btn');

// все поля с левого меню
let nameValue  = document.getElementsByClassName("name-value");
let budgetValue  = document.getElementsByClassName("budget-value");
let goodsValue  = document.getElementsByClassName("goods-value");
let itemsValue  = document.getElementsByClassName("items-value");
let employersValue  = document.getElementsByClassName("employers-value");
let discountValue  = document.getElementsByClassName("discount-value");

//категории товаров
let goodsCategory = document.getElementsByClassName("goods-item");

//получил три кнопки с левого меню
let buttons = document.querySelector('div.main-functions').getElementsByTagName("button");

//Получить все поля из правого меню
let items = document.querySelector("#items");
let time = document.querySelector("#time");
let budget = document.querySelector("#budget");

//Получить все имена сотрудников
let employers = document.querySelectorAll(".main-functions>input.hire-employers-item");



