function showexamplework() {

  let btnStyles = document.querySelector('button.button-styles');
  
  btnStyles.addEventListener('click', function() {
   
   let pictureStyle = document.querySelectorAll('section.styles div.row>div');
  
   for (let i = 0 ; i < pictureStyle.length ; i++) {
  
     if (~pictureStyle[i].className.indexOf('hidden')) {
       pictureStyle[i].className = 'col-sm-3 col-sm-offset-0 col-xs-10 col-xs-offset-1'; 
     }
  
   }
  
   this.style.display = 'none';
  
  });
  
  }

module.exports = showexamplework;