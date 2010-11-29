var $j = jQuery.noConflict();

$j(document).ready(function() {

// Setting the tabs in the sidebar hide and show, setting the current tab
	$j('div.widget-tabs div.tab-content').hide();
	$j('div.t1').show();

// Add cursor when hovering and tab-current class
	$j('div.widget-tabs ul.tabs li.t1 a').addClass('tab-current');
	$j('div.widget-tabs ul li a').css('cursor','pointer');

// Tabs
	$j('#tab-set-1 ul.tabs li a').click(
		function() {
			var thisClass = this.className.slice(0,2);
			$j('#tab-set-1 div.tab-content').hide();
			$j('#tab-set-1 div.' + thisClass).show();
			$j('#tab-set-1 ul.tabs li a').removeClass('tab-current');
			$j(this).addClass('tab-current');
		}
	);
	$j('#tab-set-2 ul.tabs li a').click(
		function() {
			var thisClass = this.className.slice(0,2);
			$j('#tab-set-2 div.tab-content').hide();
			$j('#tab-set-2 div.' + thisClass).show();
			$j('#tab-set-2 ul.tabs li a').removeClass('tab-current');
			$j(this).addClass('tab-current');
		}
	);
	$j('#tab-set-3 ul.tabs li a').click(
		function() {
			var thisClass = this.className.slice(0,2);
			$j('#tab-set-3 div.tab-content').hide();
			$j('#tab-set-3 div.' + thisClass).show();
			$j('#tab-set-3 ul.tabs li a').removeClass('tab-current');
			$j(this).addClass('tab-current');
		}
	);
	$j('#tab-set-4 ul.tabs li a').click(
		function() {
			var thisClass = this.className.slice(0,2);
			$j('#tab-set-4 div.tab-content').hide();
			$j('#tab-set-4 div.' + thisClass).show();
			$j('#tab-set-4 ul.tabs li a').removeClass('tab-current');
			$j(this).addClass('tab-current');
		}
	);
	$j('#tab-set-5 ul.tabs li a').click(
		function() {
			var thisClass = this.className.slice(0,2);
			$j('#tab-set-5 div.tab-content').hide();
			$j('#tab-set-5 div.' + thisClass).show();
			$j('#tab-set-5 ul.tabs li a').removeClass('tab-current');
			$j(this).addClass('tab-current');
		}
	);
	$j('#tab-set-6 ul.tabs li a').click(
		function() {
			var thisClass = this.className.slice(0,2);
			$j('#tab-set-6 div.tab-content').hide();
			$j('#tab-set-6 div.' + thisClass).show();
			$j('#tab-set-6 ul.tabs li a').removeClass('tab-current');
			$j(this).addClass('tab-current');
		}
	);
	$j('#tab-set-7 ul.tabs li a').click(
		function() {
			var thisClass = this.className.slice(0,2);
			$j('#tab-set-7 div.tab-content').hide();
			$j('#tab-set-7 div.' + thisClass).show();
			$j('#tab-set-7 ul.tabs li a').removeClass('tab-current');
			$j(this).addClass('tab-current');
		}
	);
	$j('#tab-set-8 ul.tabs li a').click(
		function() {
			var thisClass = this.className.slice(0,2);
			$j('#tab-set-8 div.tab-content').hide();
			$j('#tab-set-8 div.' + thisClass).show();
			$j('#tab-set-8 ul.tabs li a').removeClass('tab-current');
			$j(this).addClass('tab-current');
		}
	);
	$j('#tab-set-9 ul.tabs li a').click(
		function() {
			var thisClass = this.className.slice(0,2);
			$j('#tab-set-9 div.tab-content').hide();
			$j('#tab-set-9 div.' + thisClass).show();
			$j('#tab-set-9 ul.tabs li a').removeClass('tab-current');
			$j(this).addClass('tab-current');
		}
	);
	$j('#tab-set-10 ul.tabs li a').click(
		function() {
			var thisClass = this.className.slice(0,2);
			$j('#tab-set-10 div.tab-content').hide();
			$j('#tab-set-10 div.' + thisClass).show();
			$j('#tab-set-10 ul.tabs li a').removeClass('tab-current');
			$j(this).addClass('tab-current');
		}
	);
});