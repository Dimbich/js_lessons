

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


//--------Калькулятор
let size = document.getElementById('size'),
	form = document.querySelector('section.calc form'),
    material = document.getElementById('material'),
    options = document.getElementById('options'),
    calcPrice = document.querySelector('.calc-price'),
    elemName,
    discount  = 1,
    elem = {};

//добавил обрабочик на форму

form = addEventListener('change', function(event) {
//Если раскрываем список
  if (event.target.tagName == 'SELECT') {
  	//добавляем свойтсва в объект elem по имени элемента
    elemName = event.target.id;
    //преорзуем в число
    elem[elemName] =+event.target.options[event.target.selectedIndex].value;
  //Если вводим промокод  	
  } else if (event.target.tagName == 'INPUT') { 
  //Если промокод верный, то переопределяем скидку	
  	discount = (event.target.value === 'IWANTPOPART') ? 0.7 : 1;  	  	  
  }

 //Определяем и рассчитываем итоговую стоимость
  let sum =( elem.size + elem.material+(elem.options ? elem.options : 0 )) * discount ;
 //Если получили число, то выводим его
  calcPrice.innerHTML = sum ? sum : 'Для расчета нужно выбрать размер картины и материал картины';

});

//Устанавливаем цены
  setPrice(size,500);
  setPrice(material,500);
  setPrice(options,500);
  	
function setPrice(elem, startPrice) {
 for (let i = 1 ; i< elem.length; i++) {
    elem.options[i].setAttribute('value', i * startPrice);
 } 
}


//модальное окно

let gift = document.querySelector('.fixed-gift'),
    closeButtons= document.querySelectorAll('.popup-close'),
    popupGift = document.querySelector('.popup-gift');
    

for (let i = 0 ; i < closeButtons.length ; i++) {
  closeButtons[i].addEventListener('click', function(){
	popupGift.classList.add('hidden');
    document.body.style.overflow = '';
});	
}

popupGift.addEventListener('click', function(event){
  hideGiftModal.call(this, event); 

});	


gift.addEventListener('click', function(){
  showGiftModal();
});

function showGiftModal() {
    countClick++;
    popupGift.classList.remove('hidden');
    gift.classList.add('hidden');
    document.body.style.overflow = 'hidden';
  	
}

function hideGiftModal(event) {
  console.log(this);
  console.log(event.target);
  if (this == event.target || event.target.tagName == 'BUTTON') {
	this.classList.add('hidden');
	document.body.style.overflow = '';	
  }	
}

//прокрутка
window.addEventListener('scroll', () => {
  let scroll = window.pageYOffset || document.documentElement.scrollTop;
      docHeightAllDoc = document.documentElement.scrollHeight,
      displayHeight = document.documentElement.clientHeight, 
      isEndDoc = (scroll >= docHeightAllDoc-displayHeight);	
  if (isEndDoc && !countClick) {
  	showGiftModal();
  } 
  
});

let allButtons = document.getElementsByTagName('button'),
    countClick = 0;
for (let i = 0 ; i < allButtons.length ; i++) {
	allButtons[i].addEventListener('click', () => {
	  countClick++;	
	});
}

