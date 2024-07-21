pressed_logo = 0;

function play_theme(){
	if(pressed_logo==0){
		var audio = new Audio( 'assets/theme.mp3' );
		audio.play();
		pressed_logo = 1;
	}
}

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