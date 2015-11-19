$(document).ready(function () {
	$(".joelle-btn").click(function () {
		$('#greeting').html('Beacon detected!!!');
		$('#greeting').css("color", "#FF0000");
	});
	
	$(".vibratepage-btn").click(function () {
		$('#greeting').html('Redirect to vibrate page');
		$('#greeting').css("color", "#FF0000");
     window.location.href = "vibrate.html";
    });
	
	$(".vibrate-btn").click(function(){
		// enable vibration support
		navigator.vibrate = navigator.vibrate || navigator.webkitVibrate || navigator.mozVibrate || navigator.msVibrate;

		if (navigator.vibrate) {
		// vibration API supported
		
		// vibrate for 60 second
		navigator.vibrate(60000);	
		}else{
			$('#greeting').html('No Vibration is allowed!!!');
		}
	});
});