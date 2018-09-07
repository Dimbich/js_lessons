

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
