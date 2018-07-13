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

  $('.dropdowncontent').css({
    'width': ($('.dropbtn').width())
  })

  $('.dropdowncontent2').css({
    'width': ($('.dropbtn2').width())
  })
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

$('.contactbutton').click(function() {
  if ($(this).hasClass('showContact')) {
    console.log('bi')
    $('.contact').css('left', '85vw');
    $(this).removeClass('showContact');
    $(this).addClass('hideContact');
  }
  else if ($(this).hasClass('hideContact')) {
    $('.contact').css('left', '100vw');
    $(this).removeClass('hideContact');
    $(this).addClass('showContact');
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
  $('.report1image').css('display', 'none');
  $('.report2image').css('display', 'none');
  $('.report3image').css('display', 'none');
  $('.report4image').css('display', 'none');
  $('.report5image').css('display', 'none');
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

$('.mySlides3').click(function() {
  if ($(this).hasClass('report1')) {
    $('.imagewrapper').css('display', 'block');
    $('.report1image').css('display', 'block');
    $('.imageclose').css('display', 'block');
  }
  if ($(this).hasClass('report2')) {
    $('.imagewrapper').css('display', 'block');
    $('.report2image').css('display', 'block');
    $('.imageclose').css('display', 'block');
  }
  if ($(this).hasClass('report3')) {
    $('.imagewrapper').css('display', 'block');
    $('.report3image').css('display', 'block');
    $('.imageclose').css('display', 'block');
  }
  if ($(this).hasClass('report4')) {
    $('.imagewrapper').css('display', 'block');
    $('.report4image').css('display', 'block');
    $('.imageclose').css('display', 'block');
  }
  if ($(this).hasClass('report5')) {
    $('.imagewrapper').css('display', 'block');
    $('.report5image').css('display', 'block');
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
var $c2d = $('#c2d')
var $c3d = $('#c3d')
var $c4d = $('#c4d')
var $c5d = $('#c5d')
var $c6d = $('#c6d')


function amountscrolled(){

  var c1h = $('.container1').height() /*opening scene*/
  var c2h = $('.container2').height() /*resume*/
  var c3h = $('.container3').height() /*projects*/
  var c4h = $('.container4').height() /*work*/
  var c5h = $('.container5').height() /*volunteer*/
  var c6h = $('.container6').height() /*internships*/
  var winh = $(window).height() /*window*/
  var scrollTop = $(window).scrollTop()

  /*height of previous containers added up*/
  var c2p = c1h
  var c3p = c1h + c2h
  var c4p = c1h + c2h + c3h
  var c5p = c1h + c2h + c3h + c4h
  var c6p = c1h + c2h + c3h + c4h + c5h

  /*scroll w/ window height*/
  var c2l = c2h - winh
  var c3l = c3h - winh
  var c4l = c4h - winh
  var c5l = c5h - winh
  var c6l = c6h - winh

  /*scroll number*/
  var c2s = Math.floor((scrollTop-c2p)/(c2l) * 1000) + 915
  var c3s = Math.floor((scrollTop-c3p)/(c3l) * 1000) + 915
  var c4s = Math.floor((scrollTop-c4p)/(c4l) * 1000) + 915
  var c5s = Math.floor((scrollTop-c5p)/(c5l) * 1000) + 915
  var c6s = Math.floor((scrollTop-c6p)/(c6l) * 1000) + 915

  /*display*/
  $c2d.html('C2 scrolled by : ' + c2s + '%')
  $c3d.html('C3 scrolled by : ' + c3s + '%')
  $c4d.html('C4 scrolled by : ' + c4s + '%')
  $c5d.html('C5 scrolled by : ' + c5s + '%')
  $c6d.html('C6 scrolled by : ' + c6s + '%')

  /*resume [c2]*/

  /*resume heading */
  $('.resumesmall').css({ 'opacity' : (-1 + c2s/400) });
  $('.resumebig').css({ 'opacity' : Math.min(-1 + c2s/400, 0.25) });
  $('.resumesmall').css({ 'left' : (-100 + c2s/3) });
  $('.resumebig').css({ 'left' : (-160 + c2s/6) });
  $('.resumeheader').css({ 'opacity' : Math.min(-1 + c2s/400) });

  /*education, courses, skills*/
  $('.education,.courses,.skills').children('.vertical-line').css({ 'height' : Math.min(-105 + c2s/6, 40) + "vh" });
  $('.educationcontent,.coursescontent,.skillscontent').css({ 'opacity' : (-5 + c2s/150) });

  /*languages, sports, clubs*/
  $('.languages,.sports,.clubs').children('.vertical-line').css({ 'height' : Math.min(-163 + c2s/6, 30) + "vh" });
  $('.languagescontent,.sportscontent,.clubscontent').css({ 'opacity' : (-6.7 + c2s/150) });

  /*quest heading*/
  $('.questmoveright').css({'width' : Math.min(0 + c2s/50, 35) + "vw" });
  $('.questmoveleft').css({'width' : Math.min(0 + c2s/50, 35) + "vw" });
  $('.questmoveleft').css({'left' : Math.min(52 - c2s/50, 35) + "vw" });

  /*quest descriptions by grade*/
  $('.ninth,.tenth,.eleventh').children('.vertical-line').css({ 'height' : Math.min(-270 + c2s/6, 36) + "vh" });
  $('.ninthcontent,.tenthcontent,.eleventhcontent,.imageicon').css({ 'opacity' : (-11.1 + c2s/150) });

  /*projects [c3]*/

  /*project 1*/
  $('.project1header').css({ 'left' : Math.min(-17 + c3s/40, 5) + "vw"});
  $('.project1header').css({ 'opacity' : (-4 + c3s/170)});

  $('.project1headertopic').css({ 'right' : Math.min(-13 + c3s/40, 11) + "vw"});
  $('.project1headertopic').css({ 'opacity' : (-4 + c3s/170)});

  $('.flotato').children('.vertical-line').css({ 'height' : Math.min(-180 + c3s/4, 58) + "vh" });
  $('.flotatocontent').css({ 'opacity' : (-5.5 + c3s/150) });

  /*project 2*/
  $('.project2header').css({ 'left' : Math.max(54 - c3s/40, 19) + "vw"});
  $('.project2header').css({ 'opacity' : (-6.8 + c3s/170)});

  $('.project2headertopic').css({ 'left' : Math.min(-29 + c3s/40, 5) + "vw"});
  $('.project2headertopic').css({ 'opacity' : (-6.8 + c3s/170)});

  $('.seeingthings').children('.vertical-line').css({ 'height' : Math.min(-293 + c3s/4, 58) + "vh" });
  $('.seeingthingscontent').css({ 'opacity' : (-8.2 + c3s/150) });

  /*project 3*/
  $('.project3header').css({ 'left' : Math.min(-41 + c3s/40, 5) + "vw"});
  $('.project3header').css({ 'opacity' : (-9.3 + c3s/170)});

  $('.project3headertopic').css({ 'left' : Math.max(102 - c3s/40, 56) + "vw"});
  $('.project3headertopic').css({ 'opacity' : (-9.3 + c3s/170)});

  $('.microbio').children('.vertical-line').css({ 'height' : Math.min(-408 + c3s/4, 50) + "vh" });
  $('.microbiocontent').css({ 'opacity' : (-11.5 + c3s/150) });

  /*sticky project title*/
  if (c3s >= 950 ) {
    $('.projectstitle').css('position', 'fixed');
    $('.projectstitle').css('top', '116vh');
    $('.projectstitle').css('transition-duration', '.5s');
  }
  if (c3s >= 1870){
    $('.projectstitle').css('position', 'absolute');
    $('.projectstitle').css('top', '316vh');
    $('.projectstitle').css('transition-duration', '0s');
  }
  if (c3s <= 1870){
    $('.projectstitle').css('position', 'fixed');
    $('.projectstitle').css('top', '116vh');
    $('.projectstitle').css('transition-duration', '0s');
  }
  if (c3s <= 950){
    $('.projectstitle').css('position', 'absolute');
    $('.projectstitle').css('top', '114vh');
    $('.projectstitle').css('transition-duration', '.5s');
  }

  /*work [c5]*/

  /*work heading*/
  $('.worksmall').css({ 'opacity' : (-1.2 + c4s/400) });
  $('.workbig').css({ 'opacity' : Math.min(-1.5 + c4s/400, 0.25) });
  $('.worksmall').css({ 'left' : (-120 + c4s/3) });
  $('.workbig').css({ 'left' : (-220 + c4s/6) });
  $('.workheader').css({ 'opacity' : (-1.2 + c4s/400) });

  $('.job1').children('.workverticalline').css({ 'height' : Math.min(-133 + c4s/5, 75) + "vh" });
  $('.job1').children('.workhorizontalline').css({ 'width' : Math.min(-133 + c4s/5, 75) + "vw" });

  $('.job2').children('.workverticalline').css({ 'height' : Math.min(-220 + c4s/5, 80) + "vh" });
  $('.job2').children('.workhorizontalline').css({ 'width' : Math.min(-220 + c4s/5, 75) + "vw" });

  $('.job3').children('.workverticalline').css({ 'height' : Math.min(-305 + c4s/5, 80) + "vh" });
  $('.job3').children('.workhorizontalline').css({ 'width' : Math.min(-305 + c4s/5, 75) + "vw" });

  /*sticky jobs title*/
  if (c4s >= 1060) {
    $('.jobstitle').css('position', 'fixed');
    $('.jobstitle').css('top', '81vh');
    $('.jobstitle').css('transition-duration', '0s');
  }
  if (c4s >= 1910) {
    $('.jobstitle').css('position', 'absolute');
    $('.jobstitle').css('top', '269vh');
    $('.jobstitle').css('transition-duration', '0s');
  }
  if (c4s <= 1910) {
    $('.jobstitle').css('position', 'fixed');
    $('.jobstitle').css('top', '40vh');
    $('.jobstitle').css('transition-duration', '0s');
  }
  if (c4s <= 1060) {
    $('.jobstitle').css('position', 'absolute');
    $('.jobstitle').css('top', '73vh');
    $('.jobstitle').css('transition-duration', '0s');
  }

  /*volunteer [c5]*/

  $('.volunteer1').children('.volunteerverticalline').css({ 'height' : Math.min(-105 + c5s/5, 75) + "vh" });
  $('.volunteer1').children('.volunteerhorizontalline').css({ 'width' : Math.min(-105 + c5s/5, 75) + "vw" });

  $('.volunteer2').children('.volunteerverticalline').css({ 'height' : Math.min(-201 + c5s/5, 80) + "vh" });
  $('.volunteer2').children('.volunteerhorizontalline').css({ 'width' : Math.min(-200 + c5s/5, 75) + "vw" });

  $('.volunteer3').children('.volunteerverticalline').css({ 'height' : Math.min(-296 + c5s/5, 75) + "vh" });
  $('.volunteer3').children('.volunteerhorizontalline').css({ 'width' : Math.min(-293 + c5s/5, 75) + "vw" });

  if (c5s >= 920) {
    $('.volunteertitle').css('position', 'fixed');
    $('.volunteertitle').css('top', '109vh');
    $('.volunteertitle').css('transition-duration', '0s');
  }
  if (c5s >= 1890) {
    $('.volunteertitle').css('position', 'absolute');
    $('.volunteertitle').css('top', '319vh');
    $('.volunteertitle').css('transition-duration', '0s');
  }
  if (c5s <= 1890) {
    $('.volunteertitle').css('position', 'fixed');
    $('.volunteertitle').css('top', '109vh');
    $('.volunteertitle').css('transition-duration', '0s');
  }
  if (c5s <= 920) {
    $('.volunteertitle').css('position', 'absolute');
    $('.volunteertitle').css('top', '115vh');
    $('.volunteertitle').css('transition-duration', '0s');
  }

  /*internships [c6]*/

  $('.internship1').children('.internshipverticalline').css({ 'height' : Math.min(43 + c6s/25, 95) + "vh" });
  $('.internship1').children('.internshiphorizontalline').css({ 'width' : Math.min(43 + c6s/25, 75) + "vw" });

  if (c6s >= 920) {
    $('.internshiptitle').css('position', 'fixed');
    $('.internshiptitle').css('top', '45vh');
    $('.internshiptitle').css('transition-duration', '0s');
  }
  if (c6s >= 1240) {
    $('.internshiptitle').css('position', 'absolute');
    $('.internshiptitle').css('top', '63vh');
    $('.internshiptitle').css('transition-duration', '0s');
  }
  if (c6s <= 1240) {
    $('.internshiptitle').css('position', 'fixed');
    $('.internshiptitle').css('top', '45vh');
    $('.internshiptitle').css('transition-duration', '0s');
  }
  if (c6s <= 920) {
    $('.internshiptitle').css('position', 'absolute');
    $('.internshiptitle').css('top', '50vh');
    $('.internshiptitle').css('transition-duration', '0s');
  }

}

$(window).on("scroll", function(){
	amountscrolled()
})

/*slideshow*/
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
/*slideshowpart2*/

var slideIndexTwo = [1,1];
var slideIdTwo = ["mySlides3", "mySlides4"]
showSlidesTwo(1, 0);
showSlidesTwo(1, 1);

function plusSlidesTwo(n, no) {
  showSlidesTwo(slideIndexTwo[no] += n, no);
}

function showSlidesTwo(n, no) {
  var i;
  var x = document.getElementsByClassName(slideIdTwo[no]);
  if (n > x.length) {slideIndexTwo[no] = 1}
  if (n < 1) {slideIndexTwo[no] = x.length}
  for (i = 0; i < x.length; i++) {
     x[i].style.display = "none";
  }
  x[slideIndexTwo[no]-1].style.display = "block";
}
