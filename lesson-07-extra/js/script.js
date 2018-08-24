window.addEventListener("DOMContentLoaded", ()=>{
  let progress = document.querySelector(".progress"),
 	  btn = document.querySelector('button'),
 	  field=document.querySelector('span');
 
  btn.addEventListener('click', ()=>{
  	let countPercent = progressValue  = 0; 	
    progressValue = progress.style.width; 
    function fillProgressBar(){
      progressValue = countPercent+'%';
	  field.textContent=countPercent +'%';
	  progress.style.width=progressValue;
	 
	  if (countPercent++<100) {
	      requestAnimationFrame(fillProgressBar);
	    } 
	  }

	requestAnimationFrame(fillProgressBar);  	
  });
});


