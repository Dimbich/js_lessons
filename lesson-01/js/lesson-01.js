let mountBudget = +prompt("Ваш бюджет на месяц?", "");
let nameShop = prompt("Название вашего магазина?", "");
let mainList= {
  objNameShop: nameShop,
  Budget: mountBudget,
  shopGoods: [],
  employers: {},
  open: true
};

function showNameShop(shop) {
        alert(shop.objNameShop +" открыт!");
      }

function addTypeGoods(){
  let typeGoods=prompt("Какой тип товаров будем продавать?","");
  mainList.shopGoods.push(typeGoods);
}

for (let i = 1; i <= 3;i++){
  addTypeGoods();
}

alert("Бюджет на день составляет: "+
      Math.round((mountBudget/30)*100)/100+" руб.");
