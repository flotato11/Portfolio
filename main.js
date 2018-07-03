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

  $('.dropdown-content').css({
    'width': ($('.dropbtn').width())
  })
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
  $('.flotato1image').css('display', 'none');
  $('.flotato2image').css('display', 'none');
  $('.flotato3image').css('display', 'none');
  $('.flotato4image').css('display', 'none');
});

$('.mySlides1').click(function() {
  if ($(this).hasClass('flotato1')) {
    $('.imagewrapper').css('display', 'block');
    $('.flotato1image').css('display', 'block');
    $('.imageclose').css('display', 'block');
  }
  if ($(this).hasClass('flotato2')) {
    $('.imagewrapper').css('display', 'block');
    $('.flotato2image').css('display', 'block');
    $('.imageclose').css('display', 'block');
  }
  if ($(this).hasClass('flotato3')) {
    $('.imagewrapper').css('display', 'block');
    $('.flotato3image').css('display', 'block');
    $('.imageclose').css('display', 'block');
  }
  if ($(this).hasClass('flotato4')) {
    $('.imagewrapper').css('display', 'block');
    $('.flotato4image').css('display', 'block');
    $('.imageclose').css('display', 'block');
  }
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

  /*resume heading*/
  $('.resumesmall').css({ 'opacity' : (-2 + pctScrolled/80) });
  $('.resumebig').css({ 'opacity' : Math.min(-2 + pctScrolled/100, 0.25) });
  $('.resumesmall').css({ 'left' : (0 + pctScrolled/3) });
  $('.resumebig').css({ 'left' : (-80 + pctScrolled/6) });
  $('.resumeheader').css({ 'opacity' : Math.min(-2 + pctScrolled/100, 1) });

  /*education, courses, skills*/
  $('.education,.courses,.skills').children('.vertical-line').css({ 'height' : Math.min(-63 + pctScrolled/6, 40) + "vh" });
  $('.educationcontent,.coursescontent,.skillscontent').css({ 'opacity' : (-3 + pctScrolled/160) });

  /*languages, sports, clubs*/
  $('.languages,.sports,.clubs').children('.vertical-line').css({ 'height' : Math.min(-152 + pctScrolled/5, 30) + "vh" });
  $('.languagescontent,.sportscontent,.clubscontent').css({ 'opacity' : (-7 + pctScrolled/113) });

  /*quest heading*/
  $('.questmoveright').css({'left' : Math.min(40 + pctScrolled/80, 55) + "vw" });
  $('.questmoveleft').css({'left' : Math.min(40 - pctScrolled/80, 35) + "vw" });

  /*quest descriptions by grade*/
  $('.ninth,.tenth,.eleventh').children('.vertical-line').css({ 'height' : Math.min(-276 + pctScrolled/5, 36) + "vh" });
  $('.ninthcontent,.tenthcontent,.eleventhcontent,.imageicon').css({ 'opacity' : (-14.8 + pctScrolled/100) });

  /*projects*/

  /*project 1*/
  $('.project1header').css({ 'left' : Math.min(-30 + pctScrolled/63, 5) + "vw"});
  $('.project1header').css({ 'opacity' : (-10 + pctScrolled/180)});

  $('.project1headertopic').css({ 'right' : Math.min(-30 + pctScrolled/53, 11) + "vw"});
  $('.project1headertopic').css({ 'opacity' : (-10 + pctScrolled/180)});


  $('.flotato').children('.vertical-line').css({ 'height' : Math.min(-390 + pctScrolled/5, 58) + "vh" });
  $('.flotatocontent').css({ 'opacity' : (-21 + pctScrolled/101) });

  /*project 2*/
  $('.project2header').css({ 'left' : Math.max(65 - pctScrolled/63, 19) + "vw"});
  $('.project2header').css({ 'opacity' : (-14 + pctScrolled/180)});

  $('.project2headertopic').css({ 'left' : Math.min(-41 + pctScrolled/63, 5) + "vw"});
  $('.project2headertopic').css({ 'opacity' : (-14 + pctScrolled/180)});

  $('.seeingthings').children('.vertical-line').css({ 'height' : Math.min(-520 + pctScrolled/5, 58) + "vh" });
  $('.seeingthingscontent').css({ 'opacity' : (-27 + pctScrolled/101) });

  if (pctScrolled > 2260) {
    $('.projectstitle').css('position', 'fixed');
    $('.projectstitle').css('top', '113vh');
    $('.projectstitle').css('transition-duration', '.5s');
  } else {
    $('.projectstitle').css('position', 'absolute');
    $('.projectstitle').css('top', '115vh');
    $('.projectstitle').css('transition-duration', '.5s');
  }

}

/*slideshow*/
$(window).on("scroll", function(){
	amountscrolled()
})

var slideIndex = [1,1];
var slideId = ["mySlides1", "mySlides2"]
showSlides(1, 0);
showSlides(1, 1);

function plusSlides(n, no) {
  showSlides(slideIndex[no] += n, no);
}

function showSlides(n, no) {
  var i;
  var x = document.getElementsByClassName(slideId[no]);
  if (n > x.length) {slideIndex[no] = 1}
  if (n < 1) {slideIndex[no] = x.length}
  for (i = 0; i < x.length; i++) {
     x[i].style.display = "none";
  }
  x[slideIndex[no]-1].style.display = "block";
}
