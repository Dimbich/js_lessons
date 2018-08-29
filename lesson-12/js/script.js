window.addEventListener("DOMContentLoaded", ()=>{

 let  tab = document.getElementsByClassName('info-header-tab'),
	  tabContent = document.getElementsByClassName('info-tabcontent'),
	  info = document.getElementsByClassName('info-header')[0];
  
  let hideTabContent = (a) => {
    for(let i = a; i < tabContent.length; i++) {
	  tabContent[i].classList.remove('show');
	  tabContent[i].classList.add('hide');	
    };	
  }

  hideTabContent(1);
  
  let showTabContent = (b) => {
    if ( tabContent[b].classList.contains('hide')) {
	  hideTabContent(0);
	  tabContent[b].classList.remove('hide');
	  tabContent[b].classList.add('show');			  
	}	
  };

  info.addEventListener('click', (event) => {
    let target = event.target;
    if (target.className == 'info-header-tab') {
      for (let i = 0; i < tab.length; i++) {
        if (target ==  tab[i]) {
          showTabContent(i);
		  break;
		}			
	   }		  
     }
    }); 

    //Таймер
    let deadline = '2018-08-21';

    let getTimeRemaining = (endTime) => {
      if  (Date.parse(endTime)-Date.parse(new Date) > 0) {
          let t = Date.parse(endTime)-Date.parse(new Date), 
              seconds = Math.floor( (t/1000) % 60 ),
              minutes = Math.floor( (t/1000/60) % 60 ),
              hours = Math.floor( (t/1000/60/60) );
          return {
          'total' : t,
          'minutes' : minutes,
          'hours' : hours,
          'seconds' : seconds
      }}   else {
          return {
          'total' : 0,
          'minutes' : 0,
          'hours' : 0,
          'seconds' : 0
      }  

        
       }
          
    };

    let setClock =  (id, endTime) => {
      let timer = document.getElementById(id),
          hours = document.querySelector('.hours'),
          minutes = document.querySelector('.minutes'),
          seconds = document.querySelector('.seconds');

      let updateClock = ()=>{
        let t = getTimeRemaining(endTime);

        hours.innerHTML =addZero(t.hours);
        minutes.innerHTML = addZero(t.minutes);
        seconds.innerHTML = addZero(t.seconds);

        if (t.total <= 0) {
          clearInterval(timeInterval);
        } 
      };

     let addZero = (x) =>{
        return (x<10) ? '0'+x : x;
      }
      let timeInterval = setInterval(updateClock, 1000);
      updateClock();

      
    };

    setClock('timer',deadline);
    
    //модальное окно
    let more = document.querySelector('.more'),
        overlay = document.querySelector('.overlay'),
        close = document.querySelector('.popup-close'),
        btnTab = document.querySelectorAll('.description-btn');

// можно так использовать стрелочную функцию при назначении события
    more.addEventListener('click', (event)=>{
      let target = event.target;
      target.classList.add('more-splash');
      overlay.style.display = "block";
      document.body.style.overflow = 'hidden';
    });

    close.addEventListener('click', ()=>{
      overlay.style.display = "none";
      more.classList.remove('more-splash');
       document.body.style.overflow = '';
    })

     for(let i = 0; i < btnTab.length; i++) {
        btnTab[i].addEventListener('click', function(){
        // а можно вот так	
          let showModalWindow = ()=>{
            this.classList.add('more-splash');
            overlay.style.display = "block";
            document.body.style.overflow = 'hidden';	
          };
          showModalWindow();          
        });
     }


    //Плаваная прокрутка
  let menuItems = document.querySelector('header nav ul'),
      header = document.querySelector('header'),
      headerHeight = header.offsetHeight;
  //конструктор Меню
  function Menu(elem) {
    this.about = function() {
      scrollToItem('about');
    };
    this.photo = function() {
      scrollToItem('photo');
    };
    this.price = function() {
      scrollToItem('price');
    };
    this.contacts = function() {
      scrollToItem('contacts');
    };
  
  //переменная для сохранения контекста объекта Menu
    let self = this;

    function scrollToItem(item) {
      let itemBody = document.getElementById(item),          
          scroll=document.documentElement.scrollTop,
          docHeightAllDoc = document.documentElement.scrollHeight,
          displayHeight = document.documentElement.clientHeight; 
      //положение блока текста
      posItem = itemBody.offsetTop;
      
      //текущее положение страницы
      
      //если нужный блок расположен ниже, прокуричиваем вниз
      if (posItem > scroll) {
      function moveDown(){
        //переменная конца прокуртки
        //Если текущее положение прокрутки больше, либо равна разнице между
        //высотой всего документа и высотой эрана, то значит все прокурутили
        let isEndDoc = (scroll >= docHeightAllDoc-displayHeight);
        scroll=document.documentElement.scrollTop+=15;
      if (posItem > scroll + headerHeight  && !isEndDoc){
          requestAnimationFrame(moveDown);
        } else {
              document.documentElement.scrollTop = posItem -headerHeight; 
        }
      }
    requestAnimationFrame(moveDown);
    //если нужный блок расположен выше, прокручиваем вверх    
      } else if(posItem < scroll)  {
      function moveUp(){
          scroll=document.documentElement.scrollTop-=15;

      if (posItem < scroll + headerHeight) {
          requestAnimationFrame(moveUp);
        } else {
          document.documentElement.scrollTop = posItem - headerHeight;  
        }
      }
      requestAnimationFrame(moveUp);  
    }
    }      
    //добалвяем прослушиватль на клик
    elem.addEventListener('click', function(e) {
      var target = e.target;
      var action = target.getAttribute('href').substring(1);
      if (action) {
        event.preventDefault();
        self[action]();
      }
    });
  }
//создаем экземпляр объекта меню с пунктами
  let doIt = new Menu(menuItems);


    //Form
    let message = new Object();
    message.loading = 'Загрузка';
    message.success ='Спасибо! Скоро мы сВами свяжемся';
    message.failure = 'Что-то пошло не так...Ай';

     statusMessage = document.createElement('img');

    statusMessage.classList.add('status');

     function sendForm(elem) {
	 elem.addEventListener('submit', function(event){
      event.preventDefault();
      elem.appendChild(statusMessage);	  
      let input = elem.getElementsByTagName('input'),
          formData = new FormData(elem);


      //ajax
	  function postData(data) {
	    return new Promise(function(resolve,reject){
			
		  let request = new XMLHttpRequest();
          request.open("POST",'server.php');
          request.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
		  
		  request.onreadystatechange = function() {
			if (request.readyState < 4) {
			   resolve();
			} else if (request.readyState==4) {
			  if (request.status == 200 && request.status < 300) {
			    resolve();
				//добавление контента на страницу
			  } else {
				reject();
			  }
			}
		  }	
      	 request.send(data);	  
		});	   
	  } //End postData
	  
      function clearInput() {
		  for ( let i = 0 ; i<input.length; i++) {
			input[i].value = '';
		  }
	  }
	  /////-----Pfrjyxbk pltcm
	  
	  postData(formData)
	      .then(()=>statusMessage.src ="../img/ajax-loader.gif")
	  	  .then(()=>statusMessage.src="../img/success2.png")
	  	  .catch(()=> statusMessage.src="../img/error.png")
	  	  .then(clearInput)	  
     });     
}

	 let form = document.getElementsByClassName('main-form')[0],
         form2 = document.getElementById('form');
    
    sendForm(form);
    sendForm(form2);   

    //Слайдер
    let slideIndex =1,
    	slides = document.getElementsByClassName('slider-item');
    	prev = document.querySelector('.prev'),
    	next = document.querySelector('.next'),
    	dotsWrap = document.querySelector('.slider-dots'),
    	dots = document.getElementsByClassName('dot');

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

      for ( let i = 0 ; i < dots.length; i++) {
      	dots[i].classList.remove('dot-active');
      }

      slides[slideIndex-1].style.display='block';
      dots[slideIndex-1].classList.add('dot-active');
    }

    function plusSlides(n) {
    	showSlides(slideIndex += n);
    }


    function curentSlide(n) {
    	showSlides(slideIndex = n);		
    }

    prev.addEventListener('click', function(){
    	plusSlides(-1);
    });

    next.addEventListener('click', function(){
    	plusSlides(1);
    });

    dotsWrap.addEventListener('click', function(event){
    	for(let i = 0 ; i < dots.length+1; i++) {
    		if (event.target.classList.contains('dot') && event.target == dots[i-1]) {
               curentSlide(i);
    		}
    	}
    });

    //calc

    let persons = document.getElementsByClassName('counter-block-input')[0],
    	restDays = document.getElementsByClassName('counter-block-input')[1],
    	place = document.getElementById('select'),
    	totalValue =  document.getElementById('total'),
    	personsSum = 0,
    	daysSum = 0,
    	total = 0;

    	totalValue.innerHTML=0;

    	persons.addEventListener('change', function(){
    		personsSum = +this.value;
    		total = (daysSum + personsSum) * 4000;
    		if (restDays.value==''||this.value=='') {
    			totalValue.innerHTML = 0;
    		} else {
    			totalValue.innerHTML = total;
    		}
    	});

    	restDays.addEventListener('change', function(){
    		daysSum = +this.value;
    		total = (daysSum + personsSum) * 4000;
    		if (personsSum.value==''||this.value=='') {
    			totalValue.innerHTML = 0;
    		} else {
    			totalValue.innerHTML = total;
    		}
    	});

    	place.addEventListener('change', function(){
    		if (personsSum.value=='' || restDays.value=='') {
    			totalValue.innerHTML=  0
    		} else {
    			let a = total;
    			
    			totalValue.innerHTML = a * this.options[this.selectedIndex].value;
    		}
    	});

    	persons.removeAttribute('type');
    	restDays.removeAttribute('type');

    	function checkInput(elem){
    	 if (/^[1-9]\d*$/i.test(elem.value)) {
         	return true
         } 
          return false;    	 
    	}

    	function addNumber(elem) {
    	  elem.value = checkInput(elem) ? elem.value : elem.value.slice(0,-1);
    	}

        persons.addEventListener('input', function() {
        	addNumber(this);
        });
        
        restDays.addEventListener('input', function() {
        	addNumber(this);
        });

         // function maskPhone() {
      let phoneFields = document.querySelectorAll('input[type="tel"]');
 
      for(let i = 0; i < phoneFields.length; i++) {
        phoneFields[i].addEventListener('focus', function(){
          this.removeAttribute('type');
          this.setAttribute('placeholder','');
          this.value=mask.default;
          console.log(this.setSelectionRange);
          setStartPosition(this);
      	   
          //this.value= 'Работает';
       }); 
      }

      let mask = {
      	 sym: '_',
      	 pattern: `^\+7\((9|${this.sym})[${this.sym}\d]{2}\)\s{1}
      	 			[${this.sym}\d]{3}\s{1}
      	 			[${this.sym}\d]{2}\s{1}
      	 			[${this.sym}.sym\d]{2}$`,
      	 default:'+7(___) ___ __ __'
      }  

      function setStartPosition(elem){
      	console.log(elem);
      	let startPos = elem.value.indexOf(mask.sym);
      	elem.setSelectionRange(startPos,startPos);
      };


  });
  
