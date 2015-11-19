$(document).ready(function () {
	$(".joelle-btn").click(function () {
		$('#greeting').html('Beacon detected!!!');
	});
	
	$(".vibrate-btn").click(function(){
		//// enable vibration support
		//navigator.vibrate = navigator.vibrate || navigator.webkitVibrate || navigator.mozVibrate || navigator.msVibrate;

		if (navigator.vibrate) {
		// vibration API supported
		
		// vibrate for one second
		navigator.vibrate(1000);
		}
	});
});