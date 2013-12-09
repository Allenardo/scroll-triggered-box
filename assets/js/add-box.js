var add_hidden = false;
var add_left_margin = $(window).width() - 50;
var add_out = false;

$(window).scroll(function(){
	var y = $(this).scrollTop();
	var h = $(window).height();
	if (y > (h *.25)) {
		$('#add-box').fadeIn();
		if (!add_out){
			$('#add-box').animate({
        	marginLeft: '-=320px'
      		}, 500);
      		$('img.arrow').css({
        	"-webkit-transform": "rotate(180deg)",
        	"-moz-transform": "rotate(180deg)",
        	"transform": "rotate(180deg)" 
    		});
      add_out = !add_out;
		}
	} else {
		$('#add-box').fadeOut();
	}
});

$(function(){
  $('#add-box').css('margin-left', add_left_margin);
  $('#add-box').hide();
  $('#add-arrow').on('click', function(){
    if (add_hidden) {
      $('#add-box').animate({
        marginLeft: '-=320px'
      }, 500);
    } else {
      $('#add-box').animate({
        marginLeft: add_left_margin
      }, 500);
    }
    add_hidden = !add_hidden;
  });
});

$(function(){
  $('#add-arrow').on('click', function(){
    if (add_hidden) {
     $('img.arrow').css({
        "-webkit-transform": "rotate(360deg)",
        "-moz-transform": "rotate(360deg)",
        "transform": "rotate(360deg)" 
     });
    } else {
      $('img.arrow').css({
        "-webkit-transform": "rotate(180deg)",
        "-moz-transform": "rotate(180deg)",
        "transform": "rotate(180deg)" 
       });
    }
  });
});
