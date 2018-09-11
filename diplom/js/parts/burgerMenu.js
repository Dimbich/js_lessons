function burgerMenu() {

let btnBurger = document.querySelector('.burger'),
    burgerMenu = document.querySelector('.burger-menu'),
    windowWidth = function() {
                    return  document.documentElement.clientWidth;
                  };

burgerMenu.classList.toggle("hidden");
 
btnBurger.addEventListener('click', function(event) {
   showMenu(windowWidth());  
});

window.addEventListener('resize', function(event) {
   showMenu(windowWidth());      
});


function showMenu(width) {
  if (width <= 768 && event.type=='click') {
     burgerMenu.classList.toggle("hidden"); 
  } else if (event.type=='resize' &&  !burgerMenu.classList.contains('hidden'))  {
   burgerMenu.classList.add("hidden");  
  }
}


}

module.exports = burgerMenu;