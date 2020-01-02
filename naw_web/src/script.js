// paralax top banner 

$(window).scroll(function(){
   
  let wScroll = $(this).scrollTop();
  
  
  // ---------img paralax-------
  $('.logo_txt').css({
     'transform' : 'translate(0px, '+wScroll/5+'%)'  
   });



// --------shaw block skils---------
if(wScroll > $('.content_section .block_skils').offset().top - ($(window).height() / 1.2)) {
    $('.block_skils').each(function(i){

      setTimeout(function(){
        $('.block_skils').eq(i).addClass('is-showing');
      }, 150 * (i+1));
    });
  }





// ------------------footer parala--------------
  let wih = $('.flag').offset().top - ($(window).height());


  if(wScroll>wih) { 

  $('.parallax__layer__5').css({
    'transform' : 'translate(0px, '+(wScroll -wih)/-18+'%)'
  });

  $('.parallax__layer__6').css({
    'transform' : 'translate(0px, '+(wScroll -wih)/-6+'%)'
  });

  $('.cover_paralax').css({
    'height' : (10+((wScroll -wih)/1.3))+'px'
  });
}






});  
