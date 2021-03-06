window.addEventListener("DOMContentLoaded", function() {

 let  tab = document.getElementsByClassName('info-header-tab'),
    tabContent = document.getElementsByClassName('info-tabcontent'),
    info = document.getElementsByClassName('info-header')[0];
  
  function hideTabContent(a) {
    for(let i = a; i < tabContent.length; i++) {
    tabContent[i].classList.remove('show');
    tabContent[i].classList.add('hide');  
    } 
  }

  hideTabContent(1);
  
  function showTabContent(b) {
    if ( tabContent[b].classList.contains('hide')) {
    hideTabContent(0);
    tabContent[b].classList.remove('hide');
    tabContent[b].classList.add('show');        
  } 
  }

  info.addEventListener('click', function(event) {
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

    function getTimeRemaining(endTime) {
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
          
    }

    function setClock(id, endTime) {
      let timer = document.getElementById(id),
          hours = document.querySelector('.hours'),
          minutes = document.querySelector('.minutes'),
          seconds = document.querySelector('.seconds');

      function updateClock() {
        let t = getTimeRemaining(endTime);

        hours.innerHTML =addZero(t.hours);
        minutes.innerHTML = addZero(t.minutes);
        seconds.innerHTML = addZero(t.seconds);

        if (t.total <= 0) {
          clearInterval(timeInterval);
        } 
      }

      function addZero(x){
        return (x<10) ? '0'+x : x;
      }
      let timeInterval = setInterval(updateClock, 1000);
      updateClock();

      
    }

    setClock('timer',deadline);
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

});