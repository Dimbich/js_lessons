const countGoods=5;

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

//добавление товара
function addTypeGoods() {
  let typeGoods=prompt("Какой тип товаров будем продавать?","");
  checkGood(typeGoods)?mainList.shopGoods.push(typeGoods):
  (confirm("Товар не был добавлен!\nПовторить?")?addTypeGoods():alert("Тип товара не добавлен!"));
}

//проверка товара
function checkGood(goods) {
  return (typeof(goods) ==='string'&& typeof(goods) != null && goods != '' && goods.length < 50);
}

for (let i = 1; i <= countGoods;i++){
  addTypeGoods();
}

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
