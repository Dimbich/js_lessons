function ajax() {
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
        return new Promise( function(resolve,reject) {			
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
           request.send(data);});	   
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
}

module.exports =ajax;