// paralax top banner 

$(window).scroll(function(){

    let wScroll = $(this).scrollTop();

   $('.logo_txt').css({
     //    'transform' : 'translate(0px, '+wScroll/2+'%)'
    
   });
   window.setTimeout(() => {
    $('.logo_txt').html('<p>brrrrrrrrrggggggggggggrrrrr</p>')
  }, 2000);
});
let b = 1;

$('.logo_txt').html('<p>brrrrrrrrrrrrrr</p>')
