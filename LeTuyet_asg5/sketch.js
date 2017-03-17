/*
	Tuyet-Ngoc Le
	CSC 2463 
	Tone Homework 1: Audio Sampler
	Due: 02/21/2017
*/

var player1, player2, player3, player4;
var dist, phase, vib;
var wetEffect;
var c1, c2, c3, c4, c5;

var s1 = false;
var s2 = false;
var s3 = false;
var s4 = false;

var control1 = false;
var control2 = false;
var control3 = false;
var control4 = false;

var sel1 = false;
var sel2 = false;
var sel3 = false;
var sel4 = false;

function preload(){
	dist = new Tone.Distortion(.5);
	phase = new Tone.Phaser(0);
	vib = new Tone.Vibrato(0);
	
	player1 = new Tone.Player("media/Expressions.mp3").toMaster();
	player2 = new Tone.Player("media/Haunting.mp3").toMaster();
	player3 = new Tone.Player("media/Medieval.mp3").toMaster();
	player4 = new Tone.Player("media/Bittersweet.mp3").toMaster();
}
function setup(){
	createCanvas(600, 400);
	wetEffect = 0;
	dist.wet.value = wetEffect;

	c1 = color(255);
	c2 = color(255);
	c3 = color(255);
	c4 = color(255);
	c5 = color(255);
}

function draw(){
	background(112, 219, 255);
	button("Sample 1", 20, 20, 80, 30);	
	button("Sample 2", 20, 60, 80, 30);
	button("Sample 3", 20, 100, 80, 30);
	button("Sample 4", 20, 140, 80, 30);
	button("\t STOP", 20, 300, 80, 30);

	if(sel1 == true){
		ellipse(10, 35, 10, 10);		
	}
	if(sel2 == true){
		ellipse(10, 75, 10, 10);
	}
	if(sel3 == true){
		ellipse(10, 115, 10, 10);
	}
	if(sel4 == true){
		ellipse(10, 155, 10, 10);
	}

	if(s1 == true){
		stroke(255);
		fill(146, 116, 213);
		rect(125, 20, 450, 350);

		noStroke();
		effectButtons();
		controlButtonPlace();
		rangeControls();
	}

	if(s2 == true){
		stroke(255);
		fill(146, 116, 213);
		rect(125, 20, 450, 350);

		effectButtons();
		controlButtonPlace();
		rangeControls();
	}

	if(s3 == true){
		stroke(255);
		fill(146, 116, 213);
		rect(125, 20, 450, 350);

		effectButtons();
		controlButtonPlace();
		rangeControls();
	}

	if(s4 == true){
		stroke(255);
		fill(146, 116, 213);
		rect(125, 20, 450, 350);

		effectButtons();
		controlButtonPlace();
		rangeControls();
	}
}

function rangeControls(){
	textSize(20);
	fill(255);
	text("Range Controls", 300, 50);
}

function controlButtonPlace(){
	if(control1){
		controlButtons(250, 70, 30, 30, c1);
		controlButtons(300, 70, 30, 30, c2);
		controlButtons(350, 70, 30, 30, c3);
		controlButtons(400, 70, 30, 30, c4);
		controlButtons(450, 70, 30, 30, c5);
	}
	if(control2){
		controlButtons(250, 140, 30, 30, c1);
		controlButtons(300, 140, 30, 30, c2);
		controlButtons(350, 140, 30, 30, c3);
		controlButtons(400, 140, 30, 30, c4);
		controlButtons(450, 140, 30, 30, c5);
	}
	if(control3){
		controlButtons(250, 210, 30, 30, c1);
		controlButtons(300, 210, 30, 30, c2);
		controlButtons(350, 210, 30, 30, c3);
		controlButtons(400, 210, 30, 30, c4);
		controlButtons(450, 210, 30, 30, c5);
	}
	if(control4){
		controlButtons(250, 280, 30, 30, c1);
		controlButtons(300, 280, 30, 30, c2);
		controlButtons(350, 280, 30, 30, c3);
		controlButtons(400, 280, 30, 30, c4);
		controlButtons(450, 280, 30, 30, c5);
	}
}

function controlButtons(x, y, width, height, c){
	stroke(0);
	fill(c);
	rect(x, y, width, height);
}

function effectButtons(){
	button("Distortion", 150, 60, 80, 50);
	button("Phraser", 150, 130, 80, 50);
	button("Vibrato", 150, 200, 80, 50);	
}

function button(name,x,y,width,height){
	stroke(255);
	fill(255, 138, 112);
	rect(x,y,width,height);
	noStroke();
	fill(255);
	textSize(15);
	if(x > 100){
		text(name, x * 1.08, y + 30);
	}
	else{
		text(name, x * 1.5, y + 20);
	}
}

function mousePressed(){
	//sample 1
	if((mouseX >= 20) && (mouseX <= 100) &&
		(mouseY >= 20) && (mouseY <= 50)){
			s1 = true;
			s2 = false;
			s3 = false;
			s4 = false;

			player1.start();
			player2.stop();
			player3.stop();
			player4.stop();

			sel1 = true;
			sel2 = false;
			sel3 = false;
			sel4 = false;
		}
		//sample 2
	else if((mouseX >= 20) && (mouseX <= 100) &&
		(mouseY >= 60) && (mouseY <= 90)){
			s1 = false;
			s2 = true;
			s3 = false;
			s4 = false;

			player2.start();
			player1.stop();
			player3.stop();
			player4.stop();

			sel1 = false;
			sel2 = true;
			sel3 = false;
			sel4 = false;
		}
		//sample 3
	else if((mouseX >= 20) && (mouseX <= 100) &&
		(mouseY >= 100) && (mouseY <= 130)){
			s1 = false;
			s2 = false;
			s3 = true;
			s4 = false;

			player3.start();
			player1.stop();
			player2.stop();
			player4.stop();

			sel1 = false;
			sel2 = false;
			sel3 = true;
			sel4 = false;
		}
		//sample 4
	else if((mouseX >= 20) && (mouseX <= 100) &&
		(mouseY >= 140) && (mouseY <= 170)){
			s1 = false;
			s2 = false;
			s3 = false;
			s4 = true;

			player4.start();
			player1.stop();
			player2.stop();
			player3.stop();

			sel1 = false;
			sel2 = false;
			sel3 = false;
			sel4 = true;
		}
		//Stop Button
	else if((mouseX >= 20) && (mouseX <= 100) &&
		(mouseY >= 300) && (mouseY <= 330)){
			s1 = false;
			s2 = false;
			s3 = false;
			s4 = false;

			player1.stop();
			player2.stop();
			player3.stop();
			player4.stop();

			sel1 = false;
			sel2 = false;
			sel3 = false;
			sel4 = false;
		}
		//Distortion
	else if((mouseX >= 150) && (mouseX <= 150 + 80) &&
		(mouseY >= 60) && (mouseY <= 60 + 50)){
			control1 = true;
			control2 = false;
			control3 = false;
			control4 = false;

			player1.connect(dist);
			player2.connect(dist);
			player3.connect(dist);
			player4.connect(dist);
			dist.toMaster();
		}

		//Distortion controls
	else if(((control4 == true) || (control3 == true) || (control2 == true) || (control1 == true)) 
	 && ((mouseX >= 250) && (mouseX <= 250 + 30) &&
		(mouseY >= 70) && (mouseY <= 70 + 30))){
		c1 = color(0);
		c2 = color(255);
		c3 = color(255);
		c4 = color(255);
		c5 = color(255);

		wetEffect = 0;
		dist.wet.value = wetEffect;
	}
	else if(((control4 == true) || (control3 == true) || (control2 == true) || (control1 == true)) 
	 && ((mouseX >= 300) && (mouseX <= 300 + 30) &&
		(mouseY >= 70) && (mouseY <= 70 + 30))){
		c1 = color(255);
		c2 = color(0);
		c3 = color(255);
		c4 = color(255);
		c5 = color(255);

		wetEffect = 0.3;
		dist.wet.value = wetEffect;
	}
	else if(((control4 == true) || (control3 == true) || (control2 == true) || (control1 == true)) 
	 && ((mouseX >=350) && (mouseX <= 350 + 30) &&
		(mouseY >= 70) && (mouseY <= 70 + 30))){
		c1 = color(255);
		c2 = color(255);
		c3 = color(0);
		c4 = color(255);
		c5 = color(255);

		wetEffect = 0.6;
		dist.wet.value = wetEffect;
	}
	else if(((control4 == true) || (control3 == true) || (control2 == true) || (control1 == true)) 
	 && ((mouseX >= 400) && (mouseX <= 400 + 30) &&
		(mouseY >= 70) && (mouseY <= 70 + 30))){
		c1 = color(255);
		c2 = color(255);
		c3 = color(255);
		c4 = color(0);
		c5 = color(255);

		wetEffect = 0.8;
		dist.wet.value = wetEffect;
	}
	else if(((control4 == true) || (control3 == true) || (control2 == true) || (control1 == true)) 
	 && ((mouseX >= 450) && (mouseX <= 450 + 30) &&
		(mouseY >= 70) && (mouseY <= 70 + 30))){
		wetEffect = 1;
		dist.wet.value = wetEffect;
		c1 = color(255);
		c2 = color(255);
		c3 = color(255);
		c4 = color(255);
		c5 = color(0);
	}

		//Phraser
	else if((mouseX >= 150) && (mouseX <= 150 + 80) &&
		(mouseY >= 130) && (mouseY <= 130 + 50)){
			control1 = false;
			control2 = true;
			control3 = false;
			control4 = false;

			player1.connect(phase);
			player2.connect(phase);
			player3.connect(phase);
			player4.connect(phase);
			phase.toMaster();
		}
	else if(((control4 == true) || (control3 == true) || (control2 == true) || (control1 == true)) 
	 && ((mouseX >= 250) && (mouseX <= 250 + 30) &&
		(mouseY >= 140) && (mouseY <= 140 + 30))){
			c1 = color(0);
			c2 = color(255);
			c3 = color(255);
			c4 = color(255);
			c5 = color(255);

			phase.frequency.value = 0;
			phase.octaves.value = 0;
		}
	else if(((control4 == true) || (control3 == true) || (control2 == true) || (control1 == true)) 
	 && ((mouseX >= 300) && (mouseX <= 300 + 30) &&
	(mouseY >= 140) && (mouseY <= 140 + 30))){
		c1 = color(255);
		c2 = color(0);
		c3 = color(255);
		c4 = color(255);
		c5 = color(255);

		phase.frequency.value = 10;
		phase.octaves.value = 2;
	}
	else if(((control4 == true) || (control3 == true) || (control2 == true) || (control1 == true)) 
	 && ((mouseX >= 350) && (mouseX <= 350 + 30) &&
		(mouseY >= 140) && (mouseY <= 140 + 30))){
			c1 = color(255);
			c2 = color(255);
			c3 = color(0);
			c4 = color(255);
			c5 = color(255);

			phase.frequency.value = 20;
			phase.octaves.value = 4;
		}
	else if(((control4 == true) || (control3 == true) || (control2 == true) || (control1 == true)) 
	 && ((mouseX >= 400) && (mouseX <= 400 + 30) &&
		(mouseY >= 140) && (mouseY <= 140 + 30))){
			c1 = color(255);
			c2 = color(255);
			c3 = color(255);
			c4 = color(0);
			c5 = color(255);

			phase.frequency.value = 30;
			phase.octaves.value = 6;
		}
	else if(((control4 == true) || (control3 == true) || (control2 == true) || (control1 == true)) 
	 && ((mouseX >= 450) && (mouseX <= 450 + 30) &&
		(mouseY >= 140) && (mouseY <= 140 + 30))){
			c1 = color(255);
			c2 = color(255);
			c3 = color(255);
			c4 = color(255);
			c5 = color(0);

			phase.frequency.value = 40;
			phase.octaves.value = 8;
		}

		//Vibrato
	else if((mouseX >= 150) && (mouseX <= 150 + 80) &&
		(mouseY >= 210) && (mouseY <= 200 + 50)){
			control1 = false;
			control2 = false;
			control3 = true;
			control4 = false;

			player1.connect(vib);
			player2.connect(vib);
			player3.connect(vib);
			player4.connect(vib);
			vib.toMaster();
		}
		//Vibrato controls
	else if(((control4 == true) || (control3 == true) || (control2 == true) || (control1 == true)) 
	 && ((mouseX >= 250) && (mouseX <= 250 + 30) &&
		(mouseY >= 210) && (mouseY <= 210 + 30))){
			c1 = color(0);
			c2 = color(255);
			c3 = color(255);
			c4 = color(255);
			c5 = color(255);

			vib.frequency.value = 0;
			vib.depth.value = 0;
		}
	else if(((control4 == true) || (control3 == true) || (control2 == true) || (control1 == true)) 
	 && ((mouseX >= 300) && (mouseX <= 300 + 30) &&
	(mouseY >= 210) && (mouseY <= 210 + 30))){
		c1 = color(255);
		c2 = color(0);
		c3 = color(255);
		c4 = color(255);
		c5 = color(255);

		vib.frequency.value = 10;
		vib.depth.value = 0.4;
	}
	else if(((control4 == true) || (control3 == true) || (control2 == true) || (control1 == true)) 
	 && ((mouseX >= 350) && (mouseX <= 350 + 30) &&
		(mouseY >= 210) && (mouseY <= 210 + 30))){
			c1 = color(255);
			c2 = color(255);
			c3 = color(0);
			c4 = color(255);
			c5 = color(255);

			vib.frequency.value = 20;
			vib.depth.value = 0.6;
		}
	else if(((control4 == true) || (control3 == true) || (control2 == true) || (control1 == true)) 
	 && ((mouseX >= 400) && (mouseX <= 400 + 30) &&
		(mouseY >= 210) && (mouseY <= 210 + 30))){
			c1 = color(255);
			c2 = color(255);
			c3 = color(255);
			c4 = color(0);
			c5 = color(255);
			
			vib.frequency.value = 30;
			vib.depth.value = 0.8;
		}
	else if(((control4 == true) || (control3 == true) || (control2 == true) || (control1 == true)) 
	 && ((mouseX >= 450) && (mouseX <= 450 + 30) &&
		(mouseY >= 210) && (mouseY <= 210 + 30))){
			c1 = color(255);
			c2 = color(255);
			c3 = color(255);
			c4 = color(255);
			c5 = color(0);

			vib.frequency.value = 40;
			vib.depth.value = 1;
		}

}