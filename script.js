jQuery(document).ready(function() {
   
    
	jQuery('#play').on('click', function() {
		$('iframe').attr("src", "https://www.youtube.com/embed/jfKfPfyJRdk?controls=0&autoplay=1");
	});
    jQuery('#stop').on('click', function() {
		$('iframe').attr("src", "");
	});
    jQuery('#hide').on('click', function() {
        if($('iframe').css('display') == 'inline') {
            $('iframe').css('display','none');
            $('#hide').text('unhide');
        } else {
            $('iframe').removeAttr('style');
            $('#hide').text('hide');
        }
	});

});