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
let choose_items = document.querySelector("#items");
let choose_time = document.querySelector("#time");
let budget = document.querySelector("#budget");

//Получить все имена сотрудников
let employers = document.querySelectorAll(".hire-employers-item");

open.addEventListener('click',() => {
  do {
    mounthBudget = +prompt("Ваш бюджет на месяц?", ""); 
  }  while(!mounthBudget);

  budgetValue.textContent = mounthBudget;
  nameValue.textContent = prompt("Название вашего магазина?", "").toUpperCase();
 
});

goods_btn.addEventListener('click' ,() =>{
  for( let i = 0; i < goods_item.length; i++) {

    let a =goods_item[i].value;

    if (check(a)){
      mainList.shopGoods.push(a);
      goodsValue.textContent = mainList.shopGoods;
    } else {
      i--;
    }
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
  budget.value=  mounthBudget/30;
})

employer_btn.addEventListener('click', () => {
  for (let i=0; i<employers.length; i++) {
    let name=employers[i].value;
    mainList.employers[i]=name; 
    employersValue.textContent+=mainList.employers[i]+", ";
  }
})

let	mounthBudget,
	  price;

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


