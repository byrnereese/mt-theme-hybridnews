var $j = jQuery.noConflict();

$j(document).ready(
	function() {

		$j('ul.menu').supersubs( {
			minWidth: 12,
			maxWidth: 27,
			extraWidth: 1
			}
		).superfish( {
			delay: 100,
			animation: { opacity: 'show', height: 'show' },
			speed: 'fast',
			autoArrows: false,
			dropShadows: false
			}
		);
	}
);