function portfolio(){
	
let portfolioMenu = document.querySelector('.portfolio-menu'),
    portfolioBlocks = document.getElementsByClassName('portfolio-block'),
    menuItem =portfolioMenu.getElementsByTagName('li');

//При загрузке показваем все работы
showPorfolio('all');

//функция вызова текущего портфолио
function curentPortfolio(name) {
  //При нажатии на меню выделяем выбранный
  for ( let i = 0 ; i < menuItem.length; i++) {

    if (menuItem[i].classList.contains(name)) {
      menuItem[i].classList.add('active');  
    } else {
      menuItem[i].classList.remove('active');
    }
  }
  //Вызываем функицию показана картин, по имени меню
  showPorfolio(name);
}


//функиця отображения картин
function showPorfolio(name) {
   let countWork = 0,
       portfolioNo = document.querySelector('.portfolio-no');

 //в цикле перебираем все картины деалем их видимыми,
 // после чего скрываем те у которых имя отличается от переданного
  for ( let i = 0 ; i < portfolioBlocks.length; i++) {
     portfolioBlocks[i].classList.remove('hidden');

    if(!portfolioBlocks[i].classList.contains(name)) {
      portfolioBlocks[i].classList.add('hidden');      
    }  else {
      //подсчитываем количество отфильтрованных картин
      countWork++; 
    }    
   
  }
  //если картины есть и скрытый блок одержит один класс
  if (countWork !== 0 && portfolioNo.classList.length == 1) {
   //скрываем его 
    portfolioNo.classList.add('hidden');
  } else if (countWork == 0 && portfolioNo.classList.length > 1) {
   //иначе отобрааем   
    portfolioNo.classList.remove('hidden');  
  }
}

//обработчик события по нажатию на элементе меню
portfolioMenu.addEventListener('click', function(event) {
  if (event.target.tagName == 'LI') {
    //запоминаем название класса элемента меню и вызываем функцию показа картин
    let item = event.target.classList[0];
    curentPortfolio(item);
  }
});	
};

module.exports = portfolio;