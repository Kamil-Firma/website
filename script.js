//clicking rabbitdud ------------------------------------------------------------
played_theme = 0;

function play_theme(){
	if(played_theme==0){
		var audio = new Audio( 'assets/theme.mp3' );
		audio.play();
		played_theme = 1;
		document.getElementById("piano").style.visibility = "visible";

	}
}

//highlight carousel ------------------------------------------------------------
carousel_images = [
	'ruin2_s1.png',
	'ruin2_s2.png',
	'ruin2_s3.png',
	'ruin2_s4.png',
	'ruin2_s5.png',
	'ruin2_s6.png',
	'ruin2_s7.png'
];
carousel_id = Math.floor(Math.random() * carousel_images.length);
highlight_update_image();

function highlight_change_image(){
	var audio = new Audio( 'assets/click.mp3' );
	audio.play();
	
	carousel_id ++;
	if(carousel_id >= carousel_images.length){
		carousel_id = 0;
	}
	highlight_update_image();
}

function highlight_update_image(){
	document.getElementById("highlight_carousel").innerHTML = "<img src='highlight/"+carousel_images[carousel_id]+"' width=650 onclick='highlight_change_image()' style='cursor: pointer'>";
}

//piano ------------------------------------------------------------
document.getElementById("piano").style.visibility = "hidden";

pianokeys = [
	'piano/C.mp3',
	'piano/Cs.mp3',
	'piano/D.mp3',
	'piano/Ds.mp3',
	'piano/E.mp3',
	'piano/F.mp3',
	'piano/Fs.mp3',
	'piano/G.mp3',
	'piano/Gs.mp3',
	'piano/A.mp3',
	'piano/As.mp3',
	'piano/B.mp3'
]

wrongnote = 'piano/wrong.mp3';
wrongnote_random = 0;

function pianokey(key){
	wrongnote_random = Math.floor(Math.random() * 20);
	if(wrongnote_random==1){
		var toplay = wrongnote;
	}else{
		var toplay = pianokeys[key]
	}
	
	var audio = new Audio( toplay );
	audio.play();
}

