

  let allSizeImage = document.querySelectorAll('.sizes-block');
  
  for (let i = 0 ; i < allSizeImage.length ; i++) {
	  allSizeImage[i].addEventListener('mouseover', function() {
		  let img = this.getElementsByTagName('img')[0];
		  showPicture(img);
	  });
	  allSizeImage[i].addEventListener('mouseout', function() {
		  let img = this.getElementsByTagName('img')[0];
		  hidePicture(img);
	  });
  }
  
  
  function showPicture(img){
    img.src=img.src.replace(/(\d)/g,'$1-1');
    hideOrShowDiscrPict(img,event.type);
  }
  
  function hidePicture(img){	
    img.src=img.src.replace(/-1.png/g,'.png');
    hideOrShowDiscrPict(img,event.type);
  }
  
  
  function hideOrShowDiscrPict(img,eventType) {
   let parentDiv = img.parentNode,
	   p = parentDiv.getElementsByTagName('p'),
       type = (eventType == 'mouseover') ? 'none' : '';
  
    for (let i=0 ; i < p.length; i++) {
      if (p[i].className!=='sizes-hit') {
			  p[i].style.display = type;
	  }		
    } 		
  }

////-------------------

let btnStyles = document.querySelector('button.button-styles');

btnStyles.addEventListener('click', function() {
 
 let pictureStyle = document.querySelectorAll('section.styles div.row>div');

 for (let i =0 ; i < pictureStyle.length ; i++) {

   if (~pictureStyle[i].className.indexOf('hidden')) {
     pictureStyle[i].className = 'col-sm-3 col-sm-offset-0 col-xs-10 col-xs-offset-1'; 
   }

 }

 this.style.display='none';

});


//--------Калькулятор
/*let size = document.getElementById('size'),
    material = document.getElementById('material'),
    options = document.getElementById('options'),
    promocode = document.querySelector('.promocode'),
    calcPrice = document.querySelector('.calc-price');
  personsSum = 0,
  daysSum = 0,
  total = 0;*/

//----

//--меню
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