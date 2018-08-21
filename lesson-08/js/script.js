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
    console.log('fgfd');
  });
