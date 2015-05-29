var add_margin_left = 35; 	// width of the div when hidden
var add_width = 340;		// width of the div when shown

var add_hidden = false;
var add_out = false;

jQuery(window).resize(function(){
	if (add_hidden) {
		jQuery('#add-box').css('margin-left', jQuery(window).width() - add_margin_left);
	} else {
		jQuery('#add-box').css('margin-left', jQuery(window).width() - add_margin_left - add_width);
	}
});
jQuery(window).scroll(function() {
    var scroll_position = jQuery(this).scrollTop();
    var window_height = jQuery(window).height();
    if (scroll_position > (window_height * .25)) {
        jQuery('#add-box').fadeIn();
        if (!add_out) {
            jQuery('#add-box').animate({
                marginLeft: '-='+add_width+'px'
            }, 500);
            jQuery('img.arrow').css({
                "-webkit-transform": "rotate(180deg)",
                "-moz-transform": "rotate(180deg)",
                "transform": "rotate(180deg)"
            });
            add_out = !add_out;
        }
    } else {
        jQuery('#add-box').fadeOut();
    }
});
jQuery(function() {
    jQuery('#add-box').css('margin-left', jQuery(window).width() - add_margin_left);
    jQuery('#add-box').hide();
    jQuery('#add-arrow').on('click', function() {
        if (add_hidden) {
            jQuery('#add-box').animate({
                marginLeft: '-='+add_width+'px'
            }, 500);
        } else {
            jQuery('#add-box').animate({
                marginLeft: jQuery(window).width() - add_margin_left
            }, 500);
        }
        add_hidden = !add_hidden;
    });
});
jQuery(function() {
    jQuery('#add-arrow').on('click', function() {
        if (add_hidden) {
            jQuery('img.arrow').css({
                "-webkit-transform": "rotate(360deg)",
                "-moz-transform": "rotate(360deg)",
                "transform": "rotate(360deg)"
            });
        } else {
            jQuery('img.arrow').css({
                "-webkit-transform": "rotate(180deg)",
                "-moz-transform": "rotate(180deg)",
                "transform": "rotate(180deg)"
            });
        }
    });
});
