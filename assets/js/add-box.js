var add_hidden = true;
var add_left_margin = $(window).width() - 50;

$(window).scroll(function(){
	var y = $(this).scrollTop();
	var h = $(window).height();
	if (y > (h *.25)) {
		$('#add-box').fadeIn();
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
