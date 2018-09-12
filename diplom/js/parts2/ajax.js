function ajax() {
  let message = new Object({});

  message.loading = 'Загрузка';
  message.success ='Спасибо! Скоро мы сВами свяжемся';
  message.failure = 'Что-то пошло не так...Ай';
  let statusMessage = document.createElement('h4');
  statusMessage.classList.add('status');

  function sendForm(elem) {

    elem.addEventListener('submit', function(event){
      event.preventDefault();
      

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
        };  
           request.send(data);});    
      } //End postData
    
      function clearInput() {
        for ( let i = 0 ; i<input.length; i++) {
         input[i].value = '';
        }
      }
      /////-----Pfrjyxbk pltcm    
      postData(formData)
          .then(()=>{statusMessage.src="../img/ajax-loader.gif"})
          .then(()=>{
                     console.log(elem==form3);
                     elem!==form3 ? clearDiv.call(this,"success") : alert('Успешно отправленно');
                    })
          //.then(()=>{statusMessage.src="../img/success2.png"; console.log(this.parentElement);})
          .catch(()=>{elem!==form3 ? clearDiv.call(this,"error") : alert('Ошибка при оправке');})
          .then(clearInput);    
    });     
  }

  let form1 = document.querySelectorAll('.popup-content form')[0],
      form2 = document.querySelectorAll('.popup-content form')[1],
      form3 = document.querySelector('.consultation form');
          
  sendForm(form1);
  sendForm(form2);
  sendForm(form3);


  function clearDiv(type){
    let element = this,
        key = true ;

    if (key) {
      console.log(element);
      while (!element.classList.contains('popup-content')) {
        element=element.parentElement;
      }
      key = false;
    }

    let btnClose =element.getElementsByTagName('button');

    for (let i = 0; i < btnClose.length; i++) {
      if (btnClose[i].classList.contains('popup-close')) {
        btn = btnClose[i];
         break;
      }
     }
     element.innerHTML="";
     element.appendChild(btn);
        
    if (type=="success") {
      statusMessage.innerHTML=message.success;
    } else if (type=="error") {
      statusMessage.innerHTML=message.failure;
    }
    console.log(statusMessage);
    element.appendChild(statusMessage);

  }


  function checkInputForm(elem) {
    elem.addEventListener('input', function(event){
      if (event.target.getAttribute('name') =='phone') {
         addPhone(event.target);
      } else if(event.target.getAttribute('name') =='name' || event.target.getAttribute('name') =='message') {
          addWord(event.target);
      }
    });  
  }

  checkInputForm(form1);
  checkInputForm(form2);
  checkInputForm(form3);


  function addWord(elem) {
    elem.value = existNotRusAbc(elem) ? elem.value : elem.value.slice(0,-1);
  }


function existNotRusAbc(elem) {
  if(/^[а-яё\s\.,]*$/i.test(elem.value)) {
  return true;  
  }
  return false;  
}


function addPhone(elem) {
  
  let x = elem.value.replace(/\D/g, '').match(/(\d{0,3})(\d{0,3})(\d{0,4})/);
  console.log(x);

  elem.value = !x[2] ? x[1] : '(' + x[1] + ') ' + x[2] + (x[3] ? '-' + x[3] : '');
}  
}

module.exports =ajax;