/*
	Tuyet-Ngoc Le
	CSC 2463 Tone HW 3
	Due: 03/07/2017
*/
var synth;
var mSynth;
var polyS;
var img;

var showImg = false;
var showText = true;

function preload(){
	img = loadImage("Mario_Power_Up.jpg");
}

function setup(){
	createCanvas(920, 640);
	background(150);

	synth = new Tone.Synth({
		oscillator:{
			type:"square"
		},
		envelope:{
			attack:0.005,
			decay:0.1,
			sustain:0.3,
			release:1
		}
	}).toMaster();
}

function draw(){
	fill(255);
	textSize(20);
	text("Mario Power Up Sound Object", 50, 50);
	textSize(15);
	text("Red Mushroom!", 50, 80);
	
	fill(90);
	rect(250, 70, 540, 465, 20);
	if(showText == true){
		fill(255);
		textSize(50);
		text("Click Me", 420, 300);
	}

	if(showImg == true){
		image(img, 250, 70, 547, 470);		
	}
}

function mousePressed(){
	if((mouseX >= 250) && (mouseX <= 250 + 547)
	&& (mouseY >= 70) && (mouseY <= 70 + 470)){
		showImg = true;

		synth.triggerAttackRelease(0.8);
		synth.triggerAttackRelease("G4", "8t", "+0.1");
		synth.triggerAttackRelease("B4", "8t", "+0.15");
		synth.triggerAttackRelease("D5", "8t", "+0.2");
		synth.triggerAttackRelease("G5", "8t", "+0.25");
		synth.triggerAttackRelease("B6", "8t", "+0.3");
		
		synth.triggerAttackRelease("Ab4", "8t", "+0.35");
		synth.triggerAttackRelease("C4", "8t", "+0.4");
		synth.triggerAttackRelease("Eb5", "8t", "+0.45");
		synth.triggerAttackRelease("Ab5", "8t", "+0.5");
		synth.triggerAttackRelease("C6", "8t", "+0.55");

		synth.triggerAttackRelease("Bb4", "8t", "+0.6");
		synth.triggerAttackRelease("D4", "8t", "+0.65");
		synth.triggerAttackRelease("F5", "8t", "+0.7");
		synth.triggerAttackRelease("Bb5", "8t", "+0.75");
		synth.triggerAttackRelease("D6", "8t", "+0.8");
	}
}