var region = { identifier: 'MyRegion' }

beacons.startRangingBeaconsInRegion(
   region,
   onBeaconsRanged,
   onError)

$(".range-btn").click(function () {
	function onBeaconsRanged(beaconInfo)
	{
		//console.log('Number of Estimote Beacons ranged: ' +
		//beaconInfo.beacons.length)
		$('#beacontitle').html("Number of Estimote Beacons ranged: "+ beaconInfo.beacons.length);	   
	}
	
	function onError(error)
	{
		//console.log('Start ranging error: ' + error)
		$('#beacontitle').html("Start ranging error: " + error)
	}
});
