window.onerror = function myErrorHandler(errorMsg, url, lineNumber) {
  alert("errorMsg "+errorMsg+"\nurl "+url+"\nlineNumber "+lineNumber);
}
$(document).ready(function () {
	$(".changewords-btn").click(function () {
		$('#cwgreeting').html('Change of words successful!!!');
		$('#cwgreeting').css("color", "#FF0000");
	});
	
	$(".vibrate-btn").click(function(){
		// enable vibration support
		navigator.vibrate = navigator.vibrate || navigator.webkitVibrate || navigator.mozVibrate || navigator.msVibrate;

		if (navigator.vibrate) {
		// vibration API supported
		
		// vibrate for 60 second
		navigator.vibrate(60000);	
		}
		else{
			$('#vgreeting').html('No Vibration is allowed!!!');
		}
	});

	$(".happymood-btn").click(function (){
		$('#cwgreeting').html("dog.name");
		$('#cwgreeting').css("color", "#FF00B3");
	});
	
	$(".torchlight-btn").click(function () {
		window.plugins.flashlight.available(function(isAvailable) {
		  if (isAvailable) {
			// switch on
			window.plugins.flashlight.switchOn(); // success/error callbacks may be passed

			// switch off after 30 seconds
			setTimeout(function() {
			  window.plugins.flashlight.switchOff(); // success/error callbacks may be passed
			}, 30000);

		  } else {
			alert("Flashlight not available on this device");
		  }
		})
	});
	
});