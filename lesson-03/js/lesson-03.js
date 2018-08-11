const countGoods=5;
let nameShop,
	mounthBudget,
	time,
	price;

let mainList= {
  objNameShop: nameShop,
  Budget: mounthBudget,
  shopGoods: [],
  employers: {},
  open: true,
  discount: true
};

function start(){  
  nameShop = prompt("Название вашего магазина?", "").toUpperCase();
  time=21;
  do {
    mounthBudget = +prompt("Ваш бюджет на месяц?", "");	
  }  while(!mounthBudget);
  dayBudget();
}

start();
/*function showNameShop(shop) {
  alert(shop.objNameShop +" открыт!");
}*/

//добавление товара
function addTypeGoods() {
  let typeGoods=prompt("Какой тип товаров будем продавать?","");
  check(typeGoods)?mainList.shopGoods.push(typeGoods):
  (confirm("Товар не был добавлен!\nПовторить?")?addTypeGoods():alert("Тип товара не добавлен!"));
}

//проверка товара
function check(goods) {
  return (typeof(goods) ==='string'&& typeof(goods) != null && goods != '' && goods.length < 50);
}

//время работы магазина
function workTime(time) {
  switch(true) {
    case (time < 0):
      console.log('Такого не может быть');
      break;
    case (time > 8 && time < 20):
      console.log('Время работать!');
      break;
    case (time < 24):
      console.log('Уже слишком поздно!');
      break;      
    default:
	  console.log('В сутках только 24 часа!');
  }
}

workTime(15);

function dayBudget(){
  alert("Бюджет на день составляет: "+
      Math.round((mounthBudget/30)*100)/100+" руб.");
}

function getDiscount(price){
  let totalPrice = mainList.discount ? price*0.8 : price;
  return totalPrice;
}

function joinEmployer(numEmployer, nameEmployer) {
  return check(nameEmployer) ? mainList.employers["empl_"+numEmployer]={number:numEmployer, name:nameEmployer}:
  		 alert("Имя сотрудника задано не верно!");	
}

for (let i=1; i<5; i++) {
  let newEmployer=prompt("Введите имя сотрудника");
  joinEmployer(i, newEmployer);
}


/*for (let i = 1; i <= countGoods;i++){
  addTypeGoods();
}*/

//Еще два способа доваления товара в цикле
/*let i=1;
while (i <= countGoods){
  addTypeGoods();
  i++;	
}

do {
  addTypeGoods();
  i++
} while (i <=countGoods);*/

/*alert("Бюджет на день составляет: "+
      Math.round((mountBudget/30)*100)/100+" руб.");*/
