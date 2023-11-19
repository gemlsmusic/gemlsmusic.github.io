jQuery(document).ready(function() {
	let audioElement = jQuery('audio')[0];

	audioElement.addEventListener('ended', function() {
		jQuery('#pause').css('display','none');
		jQuery('#loading_track').css('display', 'flex');
        jQuery.ajax({
			url: `https://fdnbzdngfznyxfmxzdtnedyrj.omoeahasva.repl.co/track`,
			method: 'get',
			success: function(data) {
				console.log(data);
				jQuery('audio').attr('src',data['url_audio']);
				jQuery('.title').html(data['title']);
				jQuery('.duration').html(`0m0s/${data['duration_str']}`);
				audioElement.play();
				audioElement.addEventListener("timeupdate",function(){
					jQuery(".duration").text(`${Math.floor(audioElement.currentTime / 60)}m${Math.floor(audioElement.currentTime % 60)}s/${data['duration_str']}`);
					jQuery('.progress').attr('aria-valuenow', audioElement.currentTime * 100 / audioElement.duration);
                    jQuery('.progress-bar').css('width', audioElement.currentTime * 100 / audioElement.duration + '%');
				});
				jQuery('#pause').css('display','flex');
				jQuery('#loading_track').css('display', 'none');
			},
			error: function () {
				alert('error');
			}
		});
    }, false);

    jQuery('.next').on('click', function() {
    	audioElement.pause();
    	jQuery('#pause').css('display','none');
		jQuery('#loading_track').css('display', 'flex');
    	jQuery.ajax({
			url: `https://fdnbzdngfznyxfmxzdtnedyrj.omoeahasva.repl.co/track`,
			method: 'get',
			success: function(data) {
				console.log(data);
				jQuery('audio').attr('src',data['url_audio']);
				jQuery('.title').html(data['title']);
				jQuery('.duration').html(`0m0s/${data['duration_str']}`);
				audioElement.play();
				audioElement.addEventListener("timeupdate",function(){
					jQuery(".duration").text(`${Math.floor(audioElement.currentTime / 60)}m${Math.floor(audioElement.currentTime % 60)}s/${data['duration_str']}`);
					jQuery('.progress').attr('aria-valuenow', audioElement.currentTime * 100 / audioElement.duration);
                    jQuery('.progress-bar').css('width', audioElement.currentTime * 100 / audioElement.duration + '%');
				});
				jQuery('#pause').css('display','flex');
				jQuery('#loading_track').css('display', 'none');
			},
			error: function () {
				alert('error');
			}
		});
    });

	jQuery('#pause').on('click', function() {
		audioElement.pause();
		jQuery('#pause').css('display','none');
		jQuery('#play').css('display','flex');
	});

	jQuery('#play').on('click', function() {
		if(jQuery('audio').attr('src') != undefined) {
			audioElement.play();
			jQuery('#pause').css('display','flex');
			jQuery('#play').css('display','none');

		} else {
			jQuery('#loading_track').css('display', 'flex');
			jQuery('#play').css('display', 'none');
			jQuery.ajax({
				url: `https://fdnbzdngfznyxfmxzdtnedyrj.omoeahasva.repl.co/track`,
				method: 'get',
				success: function(data) {
					console.log(data);
					jQuery('audio').attr('src',data['url_audio']);
					jQuery('.title').html(data['title']);
					jQuery('.duration').html(`0m0s/${data['duration_str']}`);
					jQuery('#loading_track').css('display', 'none');
					jQuery('#pause').css('display','flex');
					jQuery('#play').css('display','none');
					audioElement.play();
					audioElement.addEventListener("timeupdate",function(){
						jQuery(".duration").text(`${Math.floor(audioElement.currentTime / 60)}m${Math.floor(audioElement.currentTime % 60)}s/${data['duration_str']}`);
						jQuery('.progress').attr('aria-valuenow', audioElement.currentTime * 100 / audioElement.duration);
                        jQuery('.progress-bar').css('width', audioElement.currentTime * 100 / audioElement.duration + '%');
					});
				},
				error: function () {
					alert('error');
				}
			});
			}
	});
});