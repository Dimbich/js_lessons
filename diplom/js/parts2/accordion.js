function accordion() {

let accordion = document.getElementById('accordion'),
    accordionBlock = document.getElementsByClassName('accordion-block'),
    accordionHeading = document.getElementsByClassName('accordion-heading');

for (let i = 0; i < accordionBlock.length ; i++) {
    accordionBlock[i].classList.add('fadeInDown');   
  }  

hideAll();

accordion.addEventListener('click', function(event) {
  let target = event.target;
  while (target != this) {
    if (target.classList.contains('accordion-heading')) {
      // нашли элемент, который нас интересует!
      showItem(target);
      return;
    }
    target = target.parentNode;
  }
});

function hideAll() {
  for (let i = 0; i < accordionBlock.length ; i++) {
    accordionBlock[i].classList.add('hidden'); 
     
  }   
}

function deleteStyle() {
  for (let i = 0; i <accordionHeading.length ; i++) {
     accordionHeading[i].firstChild.style.cssText="";
  }  
}

function showItem(elem) {
  let accChildBlock = elem.nextElementSibling;

  if (accChildBlock.classList.contains('hidden')) {
    hideAll();
    deleteStyle();
    accChildBlock.classList.remove('hidden');
    elem.firstChild.style.cssText = 'color: rgba(178, 80, 188, 0.8); border-bottom: none';

  } else {    
     accChildBlock.classList.add('hidden');
     elem.firstChild.style.cssText = "";
  }
} 
}

module.exports = accordion;