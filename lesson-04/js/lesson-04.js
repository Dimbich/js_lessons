let nameShop,
	mounthBudget,
	time,
	price;

let mainList= {
  objNameShop: nameShop,
  Budget: mounthBudget,
  shopGoods: [],
  employers: {},
  open: false,
  discount: false,
  shopItems: [],

  chooseGoods: function() {
  				  for( let i=1; i < 5; i++) {
				    let typeGoods=prompt("Какой тип товаров будем продавать?","");
				    check(typeGoods)?mainList.shopGoods.push(typeGoods):
				    (confirm("Товар не был добавлен!\nПовторить?")?chooseGoods():alert("Тип товара не добавлен!"));
				  }    
  },

  workTime: function(time) {
			  switch(true) {
			    case (time < 0):
			      console.log('Такого не может быть');
			      break;
			    case (time > 8 && time < 20):
			      console.log('Время работать!');
			      this.open=true;
			      break;
			    case (time < 24):
			      console.log('Уже слишком поздно!');
			      break;      
			    default:
				  console.log('В сутках только 24 часа!');
			  }
  },

  dayBudget: function() {
    alert("Бюджет на день составляет: "+
    Math.round((mounthBudget/30)*100)/100+" руб.");
  },

  makeDiscount: function(price) {
	let totalPrice = this.discount ? price*0.8 : price;
	return totalPrice;
  },

  hireEmployer: function() {
				  for (let i=1; i<5; i++) {
				    let name=prompt("Введите имя сотрудника");
				    return check(name) ? this.employers[i]=name:
				    alert("Имя сотрудника задано не верно!");	
				}
   
  },

  chooseShopItems: function(){
  	let items = prompt("Перечислите через запятую товары", "");
  	this.shopItems=check(items)? items.split(",") : alert("Данные введены не верно!");
  	if (!!this.shopItems) {
  	  let nextGood = prompt("Подождите еще","");  	  
  	  check(nextGood) ? this.shopItems.push(nextGood): alert("Данные введены не верно!");
  	  this.shopItems.forEach(function(element,item,arr){
  	  						  arr[item]=element.trim();
  	 						  }
  	  );   	
  	  this.shopItems.sort();
  	}  
  } 
};

/*function start(){  
  nameShop = prompt("Название вашего магазина?", "").toUpperCase();
  time=21;
  do {
    mounthBudget = +prompt("Ваш бюджет на месяц?", "");	
  }  while(!mounthBudget);
  mainList.dayBudget();
}*/

//start();

function check(goods) {
  return (typeof(goods) ==='string'&& typeof(goods) != null && goods != '' && goods.length < 50);
}

mainList.chooseShopItems();

//workTime(15);
mainList.shopItems.forEach(function(element,item){
  item++;
  document.write("<p>У нас вы можете купить "+ item+": "+element+"</p>");
});

for ( let key in mainList) {
	console.log("Наш магазин включает"+key+": "+mainList[key]);
}

