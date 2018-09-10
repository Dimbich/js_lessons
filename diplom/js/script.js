

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
    popupGift = document.querySelector('.popup-gift'),
    isEndDoc = false,
    isOpen = false;
    giftWasShowed = false;
    
popupGift.classList.add('hidden');

for (let i = 0 ; i < closeButtons.length ; i++) {
  closeButtons[i].addEventListener('click', function(){	
    document.body.style.overflow = '';
});	
}

popupGift.addEventListener('click', function(event){
  hideModal.call(this, event); 

});	


gift.addEventListener('click', function(){
  showModal(popupGift);
});

//orderModal
let btnOrder = document.getElementsByClassName('button-design'),
    popupDesign = document.querySelector('.popup-design');

popupDesign.classList.add('hidden');

for (let i = 0 ; i < btnOrder.length ; i++) {
  btnOrder[i].addEventListener('click', function(){
  showModal(popupDesign);
  });
}

popupDesign.addEventListener('click', function(event){
  hideModal.call(this, event); 

}); 

//modalConsultation
let btnConsultation = document.getElementsByClassName('button-consultation'),
     popupConsultation = document.querySelector('.popup-consultation');

popupConsultation.classList.add('hidden');

for (let i = 0 ; i < btnConsultation.length ; i++) {
  btnConsultation[i].addEventListener('click', function(){
    showModal(popupConsultation);
  });
}

popupConsultation.addEventListener('click', function(event){
  hideModal.call(this, event); 

}); 

function hideModal(event) {
 if (this.classList.contains('popup-gift')) {
   giftWasShowed = true;	
 }
//если клик на подложке или на кнопке закрыть 	
  if (this == event.target || event.target.tagName == 'BUTTON') {
  	//скрываем подложку
	this.classList.add('hidden');
	//отображаем прокрутку
	document.body.style.overflow = '';
	//Если закрываем модальное окно подарка или конец документа
    if (giftWasShowed) {
  	  //скрываем подарок
      gift.classList.add('hidden');
      //иначе  если была нажата кнопка отображаем подарок
    }  else {
  	 gift.classList.remove('hidden');
    }	
  }	
  isOpen = false;
}

function showModal(event) {
  
  event.classList.remove('hidden');    
  document.body.style.overflow = 'hidden';
  gift.classList.add('hidden');
  isOpen = true;
}

//прокрутка
window.addEventListener('scroll', () => {
  let scroll = window.pageYOffset || document.documentElement.scrollTop;
      docHeightAllDoc = document.documentElement.scrollHeight,
      displayHeight = document.documentElement.clientHeight, 
      isEndDoc = (scroll >= docHeightAllDoc-displayHeight);	
  if (isEndDoc && !countClick) {
  	countClick++;
  	showModal(popupGift);
  } 
  
});

let allButtons = document.getElementsByTagName('button'),
    countClick = 0;
for (let i = 0 ; i < allButtons.length ; i++) {
	allButtons[i].addEventListener('click', () => {
	  countClick++;	
	});
}


//60 sec
window.addEventListener('DOMContentLoaded', ()=>{
let start=  Date.now();
let timer = setInterval(function() {
  // вычислить сколько времени прошло с начала анимации
  let timePassed = Date.now() - start;
 //если прошло 60 секунд
  if (timePassed >= 60000) {
  	//и не открыто моальное окно
  	if (!isOpen) {
  	  //показываем окно	
      showModal(popupConsultation);
    } 
    //останавливаем таймер
  	clearInterval(timer);
  }  
}, 500);	
});


//слайдер
  let   slideIndex =1,
      slides = document.getElementsByClassName('main-slider-item');
      prev = document.querySelector('.main-prev-btn'),
      next = document.querySelector('.main-next-btn');
     /*p dotsWrap = document.querySelector('.main-next-btn'),
      dots = document.getElementsByClassName('dot');
*/

for ( let i = 0; i <slides.length ; i++) {
  slides[i].classList.add('slideInDown');
}

  showSlides(slideIndex);

  function showSlides(n) {

    if(n > slides.length) {
      slideIndex = 1 ;
    } 

    if(n < 1) {
      slideIndex = slides.length;
    }

    for ( let i = 0 ; i < slides.length; i++) {
      slides[i].style.display='none';       
    }

   /* for ( let i = 0 ; i < dots.length; i++) {
      dots[i].classList.remove('dot-active');
    }*/

    slides[slideIndex-1].style.display='block';
    /*dots[slideIndex-1].classList.add('dot-active');*/

  }

  prev.addEventListener('click', function(){
    clearTimeout(timer);
    plusSlides(-1);
  });

  next.addEventListener('click', function(){
    clearTimeout(timer);
    plusSlides(1);
  });

    function plusSlides(n) {
    
    showSlides(slideIndex += n);
    let timerID=setTimeout(()=>{
      plusSlides(1)
    },5000);
    timer = timerID;
  }

  function curentSlide(n) {
    showSlides(slideIndex = n);   
  }

 window.addEventListener('DOMContentLoaded',()=>{
    plusSlides(1);  
  });






