$( document ).ready(function() {
  $("a[href='#tour'], .main_btn, a[href='#sheldure']").on("click", function(event) {
  	event.preventDefault();
  	show();
  });

  $('button.close').on('click', function(){
  	hide();
  })

   let show = ()=>{$(".overlay").fadeIn("slow",()=>{
   	  $('body').css('overflow','hidden');
      $(".modal").slideDown("slow");	
     });
   }

  let hide = ()=>{
  	$('.modal').slideUp("slow" ,()=>{
  	   $('body').css('overflow','');
  	   $('.overlay').fadeOut("slow");	
  	});
  }
});