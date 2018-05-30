function updateProgressBar(){
	var progress = document.getElementById("progressTestSlider").value;
	var maximum = document.getElementById("progressTestSlider").max;
	document.getElementById("progressBar").setAttribute("style","width: "+(progress/maximum)*100+"%");
	document.getElementById("progressBarText").innerHTML = (progress/maximum*100).toFixed(2)+"%";
	
}