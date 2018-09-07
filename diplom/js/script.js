let allSizeImage = document.querySelector('.sizes-wrapper');

allSizeImage.addEventListener('mouseover', function(event) {
  if (event.target.tagName=='IMG') {
  	event.preventDefault();
    let img = event.target;
	showPicture(img);

  }
});

allSizeImage.addEventListener('mouseout', function(event){
	if (event.target.tagName=='IMG') {
		event.preventDefault();
		let img = event.target;
		hidePicture(img);
	}
});

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
