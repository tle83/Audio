/*
	Tuyet-Ngoc Le
	CSC 2463 Tone HW 2
	Due: 02/24/2017
*/
var title = "Basic Sound Synthesis"
var osc, osc2, oscNoise;
var c1, c2, c3, c4, c5;
var lfo, lfo2;
var ampEnv, ampEnvNoise;
var filt;

function setup(){
	createCanvas(640, 400);
	c1 = color(0);
	c2 = color(0);
	c3 = color(0);
	c4 = color(0);
	c5 = color(0);

	osc = new Tone.Oscillator(440, "sine").start();
	osc2 = new Tone.Oscillator(660, "sawtooth6").start();
	osc2.volume.value = -5;

	oscNoise = new Tone.Noise().start();
	filt = new Tone.Filter(2000, "lowpass");

	lfo = new Tone.LFO(5, -64, 0).start();
	lfo2 = new Tone.LFO(5, 650, 670).start();

	ampEnv = new Tone.AmplitudeEnvelope({
		"attack": 0.1,
		"decay": 0.2,
		"sustain": 1.0,
		"release": 0.8
	}).toMaster();

	ampEnvNoise = new Tone.AmplitudeEnvelope({
		"attack": 0.1,
		"decay": 0.1,
		"sustain": 0.8,
		"release": 0.1
	}).toMaster();

	osc.connect(ampEnv);
	lfo.connect(oscNoise.volume);

	osc2.connect(ampEnv);
	lfo2.connect(osc2.frequency);

	oscNoise.connect(filt);
	filt.connect(ampEnvNoise);

}

function draw(){
	background(100);
	noStroke();
	fill(255);
	text(title, 600/2.5, 50);

	stroke(255);
	strokeWeight(2);
	//W
	fill(225, 255, 191);
	rect(60, 100, 250, 100);
	//D
	fill(183, 251, 215);
	rect(60 + 260, 90, 250, 100);
	//A
	fill(157, 236, 238);
	rect(50, 100 + 110, 250, 100);
	//S
	fill(147, 191, 231);
	rect(60 + 250, 100 + 100, 250, 100);
	//F
	fill(123, 147, 231);
	rect(60 + 130, 100 + 50, 250, 100);

	noStroke();
	textSize(20);
	fill(c1);
	text("Press W", 100, 150);
	fill(c2);
	text("Press A", 100, 260);
	fill(c3);
	text("Press S", 450, 260);
	fill(c4);
	text("Press D", 450, 150);
	fill(c5);
	text("Press F", 280, 210);

}


function keyPressed(){
	console.log("Key is: ", keyCode);
	//press W
	if (keyCode == 87){
		osc.frequency.value = "F5";
		ampEnv.triggerAttackRelease(1);
		osc.frequency.setValueAtTime("C5", "+0.5");
		osc.frequency.setValueAtTime("C6", "+0.8");
		//ampEnvNoise.triggerAttackRelease(1, "+0.5");

		c2 = color(0);
		c3 = color(0);
		c4 = color(0);
		c5 = color(0);
		c1 = color(183, 87, 158);
	}
	//press A
	else if(keyCode == 65){
		osc.frequency.value = "C5";
		ampEnv.triggerAttackRelease(1.5);
		//osc.frequency.setValueAtTime("D5", "+0.2");
		osc.frequency.setValueAtTime("Ab5", "+0.5");
		osc.frequency.setValueAtTime("C6", "+1");
		osc.frequency.setValueAtTime("C7", "+1.3");

		ampEnvNoise.triggerAttackRelease(1, "+0.2");

		c1 = color(0);
		c3 = color(0);
		c4 = color(0);
		c5 = color(0);
		c2 = color(183, 87, 158);
	}
	//press S
	else if(keyCode == 83){
		osc.frequency.value = "B5";
		osc2.frequency.value = "Gb5";
		ampEnv.triggerAttackRelease(1);
		osc.frequency.setValueAtTime("G5", "+0.5");
		osc.frequency.setValueAtTime("C3", "+0.2");

		ampEnvNoise.triggerAttackRelease(1, "+0.3");

		c1 = color(0);
		c2 = color(0);
		c4 = color(0);
		c5 = color(0);
		c3 = color(183, 87, 158);
	}
	//press D
	else if(keyCode == 68){
		osc.frequency.value = "D5";
		osc2.frequency.value = "Ab5";
		ampEnv.triggerAttackRelease(1);
		osc.frequency.setValueAtTime("A5", "+0.5");
		osc.frequency.setValueAtTime("F5", "+0.7");

		c1 = color(0);
		c2 = color(0);
		c3 = color(0);
		c5 = color(0);
		c4 = color(183, 87, 158);
	}
	//press F
	else if(keyCode ==  70){
		osc.frequency.value = "A5";
		osc2.frequency.value = "Fb5";
		ampEnv.triggerAttackRelease(1);
		osc.frequency.setValueAtTime("F5", "+0.5");

		ampEnvNoise.triggerAttackRelease(1, "+0.5");

		c1 = color(0);
		c2 = color(0);
		c3 = color(0);
		c4 = color(0);
		c5 = color(183, 87, 158);
	}
}