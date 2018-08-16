

// кнопка
let button = document.getElementById('open-btn');

// все поля с левого меню
let nameValue  = document.getElementsByClassName("name-value")[0];
let budgetValue  = document.getElementsByClassName("budget-value")[0];
let goodsValue  = document.getElementsByClassName("goods-value")[0];
let itemsValue  = document.getElementsByClassName("items-value")[0];
let employersValue  = document.getElementsByClassName("employers-value")[0];
let discountValue  = document.getElementsByClassName("discount-value")[0];
let isOpenValue  = document.getElementsByClassName("isopen-value")[0];

//категории товаров
let goodsCategory = document.getElementsByClassName("goods-item");

//получил три кнопки с левого меню
let goods_btn = document.querySelector('div.main-functions').getElementsByTagName("button")[0];
let budget_btn = document.querySelector('div.main-functions').getElementsByTagName("button")[1];
let employer_btn = document.querySelector('div.main-functions').getElementsByTagName("button")[2];


//Получить все поля из правого меню
let items = document.querySelector("#items");
let time = document.querySelector("#time");
let budget = document.querySelector("#budget");

//Получить все имена сотрудников
let employers = document.querySelectorAll(".main-functions>input.hire-employers-item");




//вывод в консоль
console.log(button);

console.log(nameValue);
console.log(budgetValue);
console.log(goodsValue);
console.log(itemsValue);
console.log(employersValue);
console.log(discountValue);
console.log(isOpenValue);
console.log(goodsCategory);

console.log(goods_btn);
console.log(budget_btn);
console.log(employer_btn);

console.log(items);
console.log(time);
console.log(budget);

console.log(employers);