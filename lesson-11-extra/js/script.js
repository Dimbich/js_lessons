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

    //Form
    let message = new Object();
    message.loading = 'Загрузка';
    message.success ='Спасибо! Скоро мы сВами свяжемся';
    message.failure = 'Что-то пошло не так...Ай';

    let form = document.getElementsByClassName('main-form')[0],
        input = form.getElementsByTagName('input'),
        statusMessage = document.createElement('img');

    //statusMessage.classList.add('status');

     form.addEventListener('submit', function(event){
      event.preventDefault();
      form.appendChild(statusMessage);

      //ajax

      let request = new XMLHttpRequest();
      request.open("POST",'server.php');

      request.setRequestHeader("Content-type", "application/x-www-form-urlencoded");

      let formData = new FormData(form);

      request.send(formData);

      request.onreadystatechange = function() {
        if (request.readyState < 4) {
          statusMessage.src ="../img/ajax-loader.gif";
        } else if (request.readyState==4) {
          if (request.status == 200 && request.status < 300) {
            statusMessage.src="../img/success2.png"
            //добавление контента на страницу

          } else {
            statusMessage.src="../img/error.png"; 
          }
        }
      }

      for ( let i = 0 ; i<input.length; i++) {
        input[i].value = '';
      }

     });


     let form2 = document.getElementById('form'),
        input2 = form2.getElementsByTagName('input');
        
 
    form2.addEventListener('submit', function(event){
      event.preventDefault();
      form2.appendChild(statusMessage);

      let requestContact = new XMLHttpRequest();
      requestContact.open("POST",'server.php');

      requestContact.setRequestHeader("Content-type", "application/x-www-form-urlencoded");

      let formData = new FormData(form2);

      requestContact.send(formData);

      requestContact.onreadystatechange = function() {
        if (requestContact.readyState < 4) {
           statusMessage.src ="../img/ajax-loader.gif";
        } else if (requestContact.readyState==4) {
          if (requestContact.status == 200 && requestContact.status < 300) {
            statusMessage.src="../img/success2.png";
            //добавление контента на страницу

          } else {
             statusMessage.src="../img/error.png";
          }
        }
      }

      for ( let i = 0 ; i<input2.length; i++) {
        input2[i].value = '';
      }

    })
   // function maskPhone() {
      let phoneFields = document.querySelectorAll('input[type="tel"]');
      
      for(let i = 0; i < phoneFields.length; i++) {
        console.log(phoneFields[i]);
       phoneFields[i].addEventListener('focus', function(){
          this.setAttribute('placeholder','Работает!');
          //this.value= 'Работает';
       }); 
      }  

  });
  
