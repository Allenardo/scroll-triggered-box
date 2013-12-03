var add_hidden = true;
var add_left_margin = $(window).width() - 50;

$(function(){
  $('#add-box').css('margin-left', add_left_margin);
  
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