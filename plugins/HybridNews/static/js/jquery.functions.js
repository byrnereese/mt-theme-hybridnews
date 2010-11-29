var $j = jQuery.noConflict();

$j(document).ready(
	function() {

	//Slider
		$j('div#slider').cycle({
				fx: 'scrollHorz',
				prev: 'a.slider-prev',
				next: 'a.slider-next',
				//pause: 1,
				timeout: 8000,
				delay: -8000,
				speed: 800
			});

	// Pause the slider
		$j('a.slider-pause').click(
			function() {
				$j('div#slider').cycle('pause');
				$j('a.slider-pause').addClass('paused');
			}
		);

	// Resume slider when previous is clicked, remove pause
		$j('a.slider-prev').click(
			function() {
				$j('div#slider').cycle('resume');
				$j('a.slider-pause').removeClass('paused');
			}
		);

	// Resume slider when next is clicked, remove pause
		$j('a.slider-next').click(
			function() {
				$j('div#slider').cycle('resume');
				$j('a.slider-pause').removeClass('paused');
			}
		);

	}
);