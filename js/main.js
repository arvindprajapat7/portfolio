$(document).ready(function(){
	$(".portfolio_section .list").click(function(){
		const value = $(this).attr('data-filter');
		if(value == "all"){
			$('.imageBox').css('display','block');
		}else{
			$('.imageBox').not('.'+value).css('display','none');
			$('.imageBox').filter('.'+value).css('display','block');
		}
	});
	$('.list').click(function(){
		$(this).addClass('active').siblings().removeClass('active');
	});
  $(".frames_section .list").click(function(){
    const value = $(this).attr('data-filter');
    if(value == "all"){
      $('.frame').show();
    }else{
      $('.frame').not('.'+value).hide();
      $('.frame').filter('.'+value).show();
    }
  });
  $('.list').click(function(){
    $(this).addClass('active').siblings().removeClass('active');
  });
});
$(window).scroll(function(){
  if ($(window).scrollTop() >= 330) {
    $('header').addClass('fixed_header');
   }
   else {
    $('header').removeClass('fixed_header');
   }
});
// scroll top button js
mybutton = document.getElementById("scrolltop");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}
$(function(){

  $('.circlechart').circlechart();

});