function modal(){
 let more = document.querySelector('.more'),
        overlay = document.querySelector('.overlay'),
        close = document.querySelector('.popup-close'),
        btnTab = document.querySelectorAll('.description-btn');

// можно так использовать стрелочную функцию при назначении события
    more.addEventListener('click', (event)=>{
      let target = event.target;
      target.classList.add('more-splash');
      overlay.style.display = "block";
      document.body.style.overflow = 'hidden';
    });

    close.addEventListener('click', ()=>{
      overlay.style.display = "none";
      more.classList.remove('more-splash');
       document.body.style.overflow = '';
    });

     for(let i = 0; i < btnTab.length; i++) {
        btnTab[i].addEventListener('click', function(){
        // а можно вот так  
          let showModalWindow = ()=>{
            this.classList.add('more-splash');
            overlay.style.display = "block";
            document.body.style.overflow = 'hidden';  
          };
          showModalWindow();          
        });
     }
}
module.exports=modal;