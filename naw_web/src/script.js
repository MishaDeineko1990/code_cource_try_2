// paralax top banner 

$(window).scroll(function(){
   
  let wScroll = $(this).scrollTop();
  
  
  // ---------img paralax-------
  $('.logo_txt').css({
     'transform' : 'translate(0px, '+wScroll/5+'%)'    
   });




if(wScroll > $('.content_section .block_skils').offset().top - ($(window).height() / 1.2)) {
    $('.block_skils').each(function(i){

      setTimeout(function(){
        $('.block_skils').eq(i).addClass('is-showing');
      }, 150 * (i+1));
    });
  }



});  
