/*
Victoria L. Hagan
Folder: victoria014
CSC.365.001
HW 5
Due: 11.24.2014
ascii.js
*/
var t;

function startAnimation() {
	//Get the string form of the Animation
	var animationSTR = $("tBox").value;
	//Split the Animation into frames
	if (animationSTR.indexOf("\r\n") !== -1){
		allFrames = animationSTR.split("=====\r\n"); }
	else {
		allFrames = animationSTR.split("=====\n"); }
	currentFrame = 0;
	//Display Motion Animation
	animate();
	
	var StopButton = document.getElementById("ctrlSTP");
	StopButton.disabled = false;
	var StartButton = document.getElementById("ctrlSTRT");
	StartButton.disabled = true;
	var animeDrop = document.getElementById("anime");
	animeDrop.disabled = true;
}

function getAnimation(){
	if ($("anime").value === "Custom"){
		$("tBox").value = MYANIMATION[$("anime").value];}
	else {
		$("tBox").value = ANIMATIONS[$("anime").value];}
}

function animate(){
	$("tBox").value = allFrames[currentFrame];
	currentFrame = (currentFrame+1)%allFrames.length;
	var speed = document.getElementById("spd");
	if (speed.checked){
		t = setTimeout("animate();",50); }
	else {
		t = setTimeout("animate();", 250);}
}
    	
function stopAnimation(){
	clearTimeout(t);
	getAnimation();
	var StopButton = document.getElementById("ctrlSTP");
	StopButton.disabled = true;
	var StartButton = document.getElementById("ctrlSTRT");
	StartButton.disabled = false;
	var animeDrop = document.getElementById("anime");
	animeDrop.disabled = false;
}
	
function changeSIZE(){
	$("tBox").style.fontSize = $("txtSZ").value;
}