/**
Tuyet-Ngoc Le
	CSC 2463
	Tone Assignment 4
	Due: 03/14/2017
**/
var c;
var isPlaying = true;
var musicPlaying = true;

var player;
var singleSynth;
var synth;
var hhSynth;

var hhLoop;
var seq;
var seq2;

function preload(){
	player = new Tone.Player("tot_tot.wav").toMaster();
}

function setup(){
	createCanvas(720, 480);
	background(255);
	c = color(0);

	player.autostart = true;
	player.loop = true;
	player.volume.value = -4;

	Tone.Transport.bpm.value = 120;
	Tone.Transport.loop = true;
	Tone.Transport.loopEnd = '8m';

	singleSynth = new Tone.Synth().toMaster();

	synth = new Tone.PolySynth(4, Tone.MonoSynth).toMaster();
	hhSynth = new Tone.MetalSynth().toMaster();
	hhSynth.volume.value = -12;
	synth.volume.value = -12;

	Tone.Transport.schedule(triggerSynth, 0);

	hhLoop = new Tone.Loop(function(time){
		hhSynth.triggerAttackRelease('16n', time);
	}, '16n');
	hhLoop.probability = 0.5;

	hhLoop.start('1m').stop('7m');

	seq = new Tone.Sequence(synthNotes, 
	['a3', 'b3', 'c3', 'e4', 'e4', 'f4', 'e4', null], '8n');
	seq.start(0).stop('8m');

	seq2 = new Tone.Sequence(synthNotes,
	['c3', 'c4', 'c5', 'd3', 'd4', 'd5', 'e3', 'e4'], '8n');
	seq2.start('1m').stop('8m');
	
}

function synthNotes(time, note){
	synth.triggerAttackRelease(note, '8n', time);
}

//first note played in the loop
function triggerSynth(time){
	synth.triggerAttackRelease('E2', '8n', time);
}

// This function takes in four parameters
// loc is the y-coordinate location of the color box palette
function boxColor(loc, r, g, b){
	stroke(255);
	strokeWeight(1);
	fill(r, g, b);
	rect(2, loc, 20, 20);
}

// This function checks the location of the mouse
// and then assign the color value to variable c
function mousePressed(){
	if ((mouseX >= 2) && (mouseX <= 20) && 
		(mouseY >= 2) && (mouseY <= 20)) {
			c = color(255, 0, 0); //red
			singleSynth.triggerAttackRelease("C3", "8n");
	}
	else if((mouseX >= 2) && (mouseX <= 20) &&
		(mouseY >= 24) && (mouseY <= 44)){
		c = color(255, 165, 0);	//orange
		singleSynth.triggerAttackRelease("C4", "8n");
	}
	else if((mouseX >= 2) && (mouseX <= 20) &&
		(mouseY >= 46) && (mouseY <= 66)){
		c = color(255, 255, 0);	//yellow
		singleSynth.triggerAttackRelease("C5", "8n");
	}
	else if((mouseX >= 2) && (mouseX <= 20) &&
		(mouseY >= 68) && (mouseY <= 88)){
		c = color(0, 255, 0);	//green
		singleSynth.triggerAttackRelease("D3", "8n");
	}
	else if((mouseX >= 2) && (mouseX <= 20) &&
		(mouseY >= 90) && (mouseY <= 110)){
		c = color(0, 255, 255);	//light blue
		singleSynth.triggerAttackRelease("D4", "8n");
	}
	else if((mouseX >= 2) && (mouseX <= 20) &&
		(mouseY >= 112) && (mouseY <= 132)){
		c = color(0, 0, 255);	//blue
		singleSynth.triggerAttackRelease("D5", "8n");
	}
	else if((mouseX >= 2) && (mouseX <= 20) &&
		(mouseY >= 134) && (mouseY <= 154)){
		c = color(225, 0, 255);	//magenta
		singleSynth.triggerAttackRelease("E3", "8n");
	}
	else if((mouseX >= 2) && (mouseX <= 20) &&
		(mouseY >= 156) && (mouseY <= 176)){
		c = color(102, 51, 0);	//brown
		singleSynth.triggerAttackRelease("E4", "8n");
	}
	else if((mouseX >= 2) && (mouseX <= 20) &&
		(mouseY >= 178) && (mouseY <= 198)){
		c = color(255, 255, 255);	//white
		singleSynth.triggerAttackRelease("E5", "8n");
	}
	else if((mouseX >= 2) && (mouseX <= 20) &&
		(mouseY >= 200) && (mouseY <= 220)){
		c = color(0, 0, 0);		//black
		singleSynth.triggerAttackRelease("F3", "8n");
	}
	else if((mouseX >= 2) && (mouseX <= 20) &&
		(mouseY >= 222) && (mouseY <= 242)){
		c = color(165, 165, 165);	//gray
		singleSynth.triggerAttackRelease("F4", "8n");
	}
	else if((mouseX >= 2) && (mouseX <= 20) &&
		(mouseY >= 244) && (mouseY <= 282)){
		c = color(142, 215, 203);	//mint
		singleSynth.triggerAttackRelease("F5", "8n");
	}
	else if((mouseX >= 655) && (mouseX <= 670) &&
		(mouseY >= 15) && (mouseY <= 55)){
			isPlaying = false;
	}

}

function draw(){
	if(mouseIsPressed == true){
		stroke(c);
		strokeWeight(5);
		line(mouseX, mouseY, pmouseX, pmouseY);
		if(musicPlaying == true && ((mouseX >= 22) && (mouseX <= 720) 
			&& (mouseY >= 0) && (mouseY <= 480))){
			player.mute = true;
			Tone.Transport.start();
		}
	}
	else{
		if(musicPlaying == true){
			player.mute = false;
			Tone.Transport.stop();
		}
	}

	//red
	boxColor(2, 255, 0, 0);

	//orange
	boxColor(24, 255, 165, 0);

	//yellow
	boxColor(46, 255, 255, 0);

	//green
	boxColor(68, 0, 255, 0);

	//light blue
	boxColor(90, 0, 255, 255);

	//blue
	boxColor(112, 0, 0, 255);

	//magenta
	boxColor(134, 255, 0, 255);

	//brown
	boxColor(156, 102, 51, 0);

	//white
	boxColor(178, 255, 255, 255);

	//black
	boxColor(200, 0, 0, 0);

	//gray
	boxColor(222, 165, 165, 165);

	//mint
	boxColor(244, 142, 215, 203);
}

