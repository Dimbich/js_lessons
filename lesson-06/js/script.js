// кнопка
let open = document.getElementById('open-btn');

// все поля с левого меню
let nameValue  = document.getElementsByClassName("name-value")[0];
let budgetValue  = document.getElementsByClassName("budget-value")[0];
let goodsValue  = document.getElementsByClassName("goods-value")[0];
let itemsValue  = document.getElementsByClassName("items-value")[0];
let employersValue  = document.getElementsByClassName("employers-value")[0];
let discountValue  = document.getElementsByClassName("discount-value")[0];
let isOpenValue  = document.getElementsByClassName("isopen-value")[0];

//категории товаров
let goods_item = document.getElementsByClassName("goods-item");

//получил три кнопки с левого меню
let goods_btn = document.querySelector('div.main-functions').getElementsByTagName("button")[0];
let budget_btn = document.querySelector('div.main-functions').getElementsByTagName("button")[1];
let employer_btn = document.querySelector('div.main-functions').getElementsByTagName("button")[2];


//Получить все поля из правого меню
let choose_items = document.querySelector(".choose-item");
let choose_time = document.querySelector(".time-value");
let budget = document.querySelector(".count-budget-value");

//Получить поле промокода
let promoCodeField = document.querySelector(".promo-code-value");

//Получить все имена сотрудников
let employers = document.querySelectorAll(".hire-employers-item");

//Получить все кнопки в правом меню
let rigthMenuBtn = document.querySelectorAll(".main-functions button");

//Получить все кнопки в правом меню
let rigthMenuInput = document.querySelectorAll(".main-functions input");

//Признак могу ли я вносить измениния в поля в правом меню
let canChangeField = false;

//----Начало обработчиков событий
open.addEventListener('click',() => {
  do {
    mounthBudget = +prompt("Ваш бюджет на месяц?", ""); 
  }  while(!mounthBudget);

  budgetValue.textContent = mounthBudget;
  nameValue.textContent = prompt("Название вашего магазина?", "").toUpperCase();
  canChangeField = true;
  budget_btn.disabled = false;

//Если перед открытием магазина были заданы категории, кнопка 'Утвердить' активна
  for (let i = 0; i < goods_item.length; i++){
    if (!!goods_item[i].value) {
       countFillField1++;  
    }     
  }

  if (countFillField1>0) {
      goods_btn.disabled=false;
  }
//Если перед открытием магазина были заданы категории, кнопка 'Нанять' активна
  for (let i = 0; i < employers.length; i++){
    if (!!employers[i].value) {
       countFillField2++;  
    }     
  }

  if (countFillField2>0) {
    employer_btn.disabled=false;
  }

});

goods_btn.addEventListener('click' ,() =>{
  for( let i = 0; i < goods_item.length; i++) {

    let a =goods_item[i].value;

    if (check(a)){
      mainList.shopGoods.push(a);
      goodsValue.textContent = mainList.shopGoods;
    }/* else {
      i--;
    }*/
  }     
});

choose_items.addEventListener('change',() => {
  let items = choose_items.value;

  if (isNaN(items) && items!="") {
      mainList.shopItems = items.split(",")
      mainList.shopItems.sort();

      itemsValue.textContent = mainList.shopItems;
    } 

});

choose_time.addEventListener('change',()=>{
  let time = choose_time.value;
  switch(true) {
    case (time < 0):
      console.log('Такого не может быть');
      mainList.open=false;
      break;
    case (time > 8 && time < 20):
      console.log('Время работать!');
      mainList.open=true;

      break;
    case (time < 24):
      console.log('Уже слишком поздно!');
      mainList.open=false;
      break;      
    default:
    console.log('В сутках только 24 часа!');
    mainList.open=false;
  }

  if (mainList.open == true) {
    isOpenValue.style.backgroundColor = 'green'
  } else {
    isOpenValue.style.backgroundColor = 'red'  
  }
});

budget_btn.addEventListener('click',() => {
  budget.value = mounthBudget/30;
})

employer_btn.addEventListener('click', () => {
  for (let i=0; i<employers.length; i++) {
    let name=employers[i].value;
    if (!!name) {
      mainList.employers[i]=name; 
    }    
  }

  for (let nameEmploy in mainList.employers) {
    employersValue.textContent+=mainList.employers[nameEmploy]+", ";
  }
})


//При загрузке страницы отключаем все кнопки в правом меню, делаем поле "Расчет дневного бюджета",
// генерируем номер купона
document.addEventListener('DOMContentLoaded',() => {
    let countNum = 4;
    let i = 0;
      while (i<countNum) {
        promoCode+=Math.round(Math.random()*9);
      i++;
  }
  console.log(promoCode);
  //отключил кнопки в правом меню
  for (let i = 0 ; i<rigthMenuBtn.length ; i++) {
    rigthMenuBtn[i].disabled = true;
  }
  //
  budget.readOnly = true;
});

//Проверяем что номер купона верный и даем скидку
promoCodeField.addEventListener('change',() => {
  let items = promoCodeField.value;

  if (items==promoCode) {
      mainList.discount = true;
      discountValue.style.backgroundColor='green';
      discountValue.textContent = 'Вам предоствалена скида 25%';

    } else {
      mainList.discount = false;
      alert('Введеный промокод не верный');
      discountValue.style.backgroundColor='red';
      discountValue.textContent = 'Скидки нет';
    }

});

//Добавляем событие на поля ввода вправом меню
for (let i = 0 ; i<rigthMenuInput.length ; i++) {

  let rigthMenuInputClass = rigthMenuInput[i].classList;  
  //только для полей ввода сотрудников или ктаегорий
  if(rigthMenuInputClass.contains('goods-item')||rigthMenuInputClass.contains('hire-employers-item')) {
    //обратчики для полей категорий
    if (rigthMenuInput[i].className =="goods-item") {
      //обработчик на ввод данных
      rigthMenuInput[i].addEventListener('input',(e) => {
        if (canChangeField) {
          goods_btn.disabled = false; 
        }
      });
      //обработчик на изменение
      rigthMenuInput[i].addEventListener('change',(e) => {
//проверяем что поле с пустое
//и в случае что все поля пустые делаем кнопку не активной
        if (e.target.value.length == 0 && canChangeField) {
          countFillField1--;  
        } else if (canChangeField) {
          countFillField1++     
        } 
        if(countFillField1==0){
            goods_btn.disabled = true;
        }  
      });
    } else {
       //обратчики для полей сотрудников
       //обработчик на ввод данных
      rigthMenuInput[i].addEventListener('input',(e) => {
        if (canChangeField) {
          employer_btn.disabled = false; 
        }
      });
      //обработчик на изменение
      rigthMenuInput[i].addEventListener('change',(e) => {
//проверяем что поле с пустое
//и в случае что все поля пустые делаем кнопку не активной
        if (e.target.value.length == 0 && canChangeField) {
          countFillField2--;  
        } else if (canChangeField) {
          countFillField2++     
        } 
        if(countFillField2==0){
            employer_btn.disabled = true;
        }  
      });
    }
  }
}
//------завершение обработчиков событий
//количество заполненных полей категории
let countFillField1 = 0;
//количество заполненных  полей сотрудников
let countFillField2 = 0;

let	mounthBudget,
	  price;

let promoCode = "";


let mainList= {
  objNameShop: "",
  Budget: mounthBudget,
  shopGoods: [],
  employers: {},
  open: false,
  discount: false,
  shopItems: [],
  
  makeDiscount: function(price) {
	let totalPrice = this.discount ? price*0.8 : price;
	return totalPrice;
  },

};

function check(goods) {
  return (typeof(goods) ==='string' && goods != '' && goods.length < 50);
}

//mainList.chooseShopItems();

//workTime(15);

/*for ( let key in mainList) {
	console.log("Наш магазин включает"+key+": "+mainList[key]);
}
*/


