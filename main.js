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

$('a[href^="#"]').on('click', function(event) {
    var target = $(this.getAttribute('href'));
    if( target.length ) {
        event.preventDefault();
        $('html, body').stop().animate({
            scrollTop: target.offset().top
        }, 1000);
    }
});

/*education animations*/
/*$('.education').mouseenter(function(){
  $(this).children('.horizontal-line').css('width','55vh');
  $(this).children('.horizontal-line').css('transition-duration','.5s');
});

$('.education').mouseleave(function(){
  $(this).children('.horizontal-line').css('width','19vh');
});*/

/*var i = 0;
$('.education').click(function() {
    if (i == 0){
      $(this).children('.vertical-line').css('height','25.3vw');
      $(this).children('.horizontal-line').css('width','19vh');
      $(this).children('.vertical-line').css('transition-duration','.5s');
      i++;
    } else {
      $(this).children('.vertical-line').css('height','0vw');
      $(this).children('.horizontal-line').css('width','19vh');
      $(this).children('.vertical-line').css('transition-duration','.5s');
      i = 0;
    }
});*/

/*navbar scroll*/
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

/*animate on scroll position*/
$(window).on('scroll', function() {
  if ($(this).scrollTop() > 1000) {
    $('.abouttag').css('top', '0vh')
  }
  else {
    $('.abouttag').css('top', '-10vh')
  }

   var st = $(this).scrollTop()- 200;
   var sb = $(this).scrollTop()- 200;
   $('.aboutsmall').css({ 'opacity' : (0 + st/100) });
   $('.aboutbig').css({ 'opacity' : (0 + st/1500) });
   $('.aboutsmall').css({ 'left' : (0 + st/3) });
   $('.aboutbig').css({ 'left' : (-80 + st/5) });
   $('.aboutheader').css({ 'right' : Math.min(-250 + st/2,0) });
   $('.education,.courses,.clubs').children('.vertical-line').css({ 'height' : Math.min(0 + st-600/2, 350) });
   $('.educationcontent,.coursescontent,.clubscontent').css({ 'opacity' : (-5 + st/100) });
   $('.ninth,.tenth').children('.vertical-line').css({ 'height' : Math.min(-950 + st-400/2, 350) });
   $('.ninthcontent,.tenthcontent').css({ 'opacity' : (-13 + st/100) });
});
