function modalGift() {

let gift = document.querySelector('.fixed-gift'),
    closeButtons= document.querySelectorAll('.popup-close'),
    popupGift = document.querySelector('.popup-gift');
    

for (let i = 0 ; i < closeButtons.length ; i++) {
  closeButtons[i].addEventListener('click', function(){
	popupGift.classList.add('hidden');
    document.body.style.overflow = '';
});	
}

popupGift.addEventListener('click', function(event){
  hideGiftModal.call(this, event);    
});	


gift.addEventListener('click', function(){
  showGiftModal();
});

function showGiftModal() {
  countClick++;	
  popupGift.classList.remove('hidden');
  gift.classList.add('hidden');
  document.body.style.overflow = 'hidden';
}

function hideGiftModal(event) {
  if (this == event.target || event.target.tagName == 'BUTTON') {
	this.classList.add('hidden');
	document.body.style.overflow = '';	
  }	
}

//прокрутка
window.addEventListener('scroll', () => {
  let scroll = window.pageYOffset || document.documentElement.scrollTop,
      docHeightAllDoc = document.documentElement.scrollHeight,
      displayHeight = document.documentElement.clientHeight, 
      isEndDoc = (scroll >= docHeightAllDoc-displayHeight);	
  if (isEndDoc && !countClick) {
  	showGiftModal();
  }
  
});

let allButtons = document.getElementsByTagName('button'),
    countClick = 0;
for (let i = 0 ; i < allButtons.length ; i++) {
	allButtons[i].addEventListener('click', () => {
	  countClick++;	
	});
}

}

module.exports = modalGift;