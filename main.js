/*functions to execute on page load*/
$(document).ready(function(){
  $('body').scrollTop(0);
  $('#end').css("opacity", "1");
  $('#end').css("transition-delay", "8.5s");
  $('.scrolldown').css("opacity", "1");
  $('.scrolldown').css("transition-delay", "8s");
  $('.scrolldown').css("transition-duration", "1s");
  $('.introfadein').css("opacity", "1");
  $('.introfadein').css("transition-delay", "4s");
  $('.introfadein').css("transition-duration", "1s");
  /*$('.plane').css("left", "-30vw");
  $('.plane').css("transition-delay", "4s");
  $('.plane').css("transition-duration", "25s");
  $('.plane').css("transition-timing-function", "linear");*/

  $('.scrollbarchild').click(function(){
    $('.scrollbarchild').css("background-color","var(--darkblue)")
    $(this).css("background-color","var(--lightgrey)")
    $(this).css("transition-duration", ".5s");
    $(this).css("transition-delay", ".5s");
  });


});

/*scroll lockout on load in*/
function scrollWork() {
  setTimeout(
    function() {
      $('html, body').css("overflow", "auto");
      $('html, body').css("overflow-x", "hidden");
      $('html, body').css("height", "auto");
    }, 4500);
}

window.onload = scrollWork;

/*$(document).scroll(function(){

//title
    if($(document).scrollTop()>"400")
      $('.aboutbig').css("left","-4vw");
      $('.aboutbig').css("transition-duration", ".25s");
    if($(document).scrollTop()<"650")
      $('.aboutbig').css("left","-20vw");
      $('.aboutbig').css("transition-duration", ".25s");

    if($(document).scrollTop()>"400")
      $('.aboutsmall').css("left","-1vw");
      $('.aboutsmall').css("transition-duration", ".25s");
      $('.aboutsmall').css("transition-delay", ".1s");
    if($(document).scrollTop()<"640")
      $('.aboutsmall').css("left","-20vw");
      $('.aboutsmall').css("transition-duration", ".25s");

    if($(document).scrollTop()>"400")
      $('.aboutsmall').css("opacity","1");
      $('.aboutsmall').css("transition-duration", ".25s");
    if($(document).scrollTop()<"650")
      $('.aboutsmall').css("opacity","0");
      $('.aboutsmall').css("transition-duration", ".25s");

    if($(document).scrollTop()>"400")
      $('.aboutbig').css("opacity",".1");
      $('.aboutbig').css("transition-duration", ".25s");
    if($(document).scrollTop()<"650")
      $('.aboutbig').css("opacity","0");
      $('.aboutbig').css("transition-duration", ".25s");
});

*/

$('a[href^="#"]').on('click', function(event) {
    var target = $(this.getAttribute('href'));
    if( target.length ) {
        event.preventDefault();
        $('html, body').stop().animate({
            scrollTop: target.offset().top
        }, 1000);
    }
});

var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
  var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("navbar").style.top = "0";
  } else {
    document.getElementById("navbar").style.top = "-50px";
  }
  prevScrollpos = currentScrollPos;
}

$(window).on('scroll', function() {
   var st = $(this).scrollTop() - 200;
   $('.aboutsmall').css({ 'opacity' : (0 + st/100) });
   $('.aboutbig').css({ 'opacity' : (0 + st/1000) });
   $('.aboutsmall').css({ 'left' : (0 + st/3) });
   $('.aboutbig').css({ 'left' : (-80 + st/5) });
});
