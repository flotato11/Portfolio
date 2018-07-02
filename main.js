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
});

$('.scrollbarchild').click(function(){
  $('.scrollbarchild').css("background-color","var(--darkblue)")
  $(this).css("background-color","var(--lightgrey)")
  $(this).css("transition-duration", ".5s");
  $(this).css("transition-delay", ".5s");
});

$('.gradeimage').click(function(){
})

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

$('.imageicon').click(function() {
  if ($(this).hasClass('3')) {
    $('.imagewrapper').css('display', 'block');
    $('.eleventhimage').css('display', 'block');
    $('.imageclose').css('display', 'block');
  }
  if ($(this).hasClass('2')) {
    $('.imagewrapper').css('display', 'block');
    $('.tenthimage').css('display', 'block');
    $('.imageclose').css('display', 'block');
  }
  if ($(this).hasClass('1')) {
    $('.imagewrapper').css('display', 'block');
    $('.ninthimage').css('display', 'block');
    $('.imageclose').css('display', 'block');
  }

});


$('.imageclose').click(function() {
  $('.imagewrapper').css('display', 'none');
  $('.imageclose').css('display', 'none');
  $('.ninthimage').css('display', 'none');
  $('.tenthimage').css('display', 'none');
  $('.eleventhimage').css('display', 'none');
});

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
var $output = $('#output')

function amountscrolled(){
	var winheight = $(window).height()
	var resheight = $('.container2').height()
	var scrollTop = $(window).scrollTop()
	var trackLength = resheight - winheight
	var pctScrolled = Math.floor(scrollTop/trackLength * 1000) // gets percentage scrolled (ie: 80 or NaN if tracklength == 0)
	$output.html( 'Resume Section scrolled by : ' + pctScrolled +'%' )

  $('.resumesmall').css({ 'opacity' : (-1 + pctScrolled/80) });
  $('.resumebig').css({ 'opacity' : Math.min(-1 + pctScrolled/100, 0.25) });
  $('.resumesmall').css({ 'left' : (0 + pctScrolled/2) });
  $('.resumebig').css({ 'left' : (-80 + pctScrolled/5) });
  $('.resumeheader').css({ 'opacity' : Math.min(-1 + pctScrolled/100, 1) });
  $('.education,.courses,.skills').children('.vertical-line').css({ 'height' : Math.min(-42 + pctScrolled/6, 40) + "vh" });
  $('.educationcontent,.coursescontent,.skillscontent').css({ 'opacity' : (-2 + pctScrolled/160) });
  $('.languages,.sports,.clubs').children('.vertical-line').css({ 'height' : Math.min(-110 + pctScrolled/5, 30) + "vh" });
  $('.languagescontent,.sportscontent,.clubscontent').css({ 'opacity' : (-5 + pctScrolled/113) });
  $('.questmoveright').css({'left' : Math.min(40 + pctScrolled/80, 55) + "vw" });
  $('.questmoveleft').css({'left' : Math.min(40 - pctScrolled/80, 35) + "vw" });
  $('.ninth,.tenth,.eleventh').children('.vertical-line').css({ 'height' : Math.min(-200 + pctScrolled/5, 36) + "vh" });
  $('.ninthcontent,.tenthcontent,.eleventhcontent,.imageicon').css({ 'opacity' : (-11 + pctScrolled/100) });
}

$(window).on("scroll", function(){
	amountscrolled()
})

  /*
$(window).on('scroll', function() {
  if ($(this).scrollTop() > 1100) {
    $('.resumetag').css('top', '0vh')
  }
  else {
    $('.resumetag').css('top', '-10vh')
  }

   var st = $(this).scrollTop()- 200;
   $('.resumesmall').css({ 'opacity' : (0 + st/100) });
   $('.resumebig').css({ 'opacity' : (0 + st/1500) });
   $('.resumesmall').css({ 'left' : (0 + st/3) });
   $('.resumebig').css({ 'left' : (-80 + st/5) });
   $('.resumeheader').css({ 'right' : Math.min(-250 + st/2,0) });
   $('.education,.courses,.skills').children('.vertical-line').css({ 'height' : Math.min(0 + st-600/2, 350) });
   $('.educationcontent,.coursescontent,.skillscontent').css({ 'opacity' : (-5 + st/100) });
   $('.sports,.clubs').children('.vertical-line').css({ 'height' : Math.min(-500 + st-600/2, 275) });
   $('.sportscontent,.clubscontent').css({ 'opacity' : (-8.5 + st/100) });
   $('.ninth,.tenth,.eleventh').children('.vertical-line').css({ 'height' : Math.min(-950 + st-400/2, 300) });
   $('.ninthcontent,.tenthcontent,.eleventhcontent').css({ 'opacity' : (-13 + st/100) });

});

*/
