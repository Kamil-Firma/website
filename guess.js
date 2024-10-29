//the guy--------------------------------
chosen_number = Math.floor(Math.random() * 1000000);
win = 0;
wrong_choices = 0;

image_path = "assets/fun";
images = ["baikal seal.jpg",
"bearded seal.jpg",
"caribbean monk seal.jpg",
"gray seal.jpg",
"guadalupe fur seal.jpg",
"harbor seal.png",
"hooded seal.jpg",
"japanese sea lion.jpg",
"new zealand sea lion.jpg",
"northern fur seal.jpg",
"ribbon seal.jpg",
"ringed seal.jpg",
"ross seal.jpg",
"spotted seal 2.jpg",
"spotted seal.jpg",
"walrus 2.jpg",
"walrus.jpg"];
guy_image = Math.floor(Math.random() * images.length), Math.floor(Math.random() * images.length);
guy = '<img src="' + image_path + '/' + images[guy_image] + '" width="500px">';
document.getElementById('sealimage').innerHTML = guy;

//message-------------------------------------
message = 'I have chosen a number.';
function refresh(){
	document.getElementById('speechbubble').innerHTML = message;
	//document.getElementById('speechbubble').innerHTML = message + " ("+chosen_number+")";
}

refresh();

//guess--------------------------------------
function guess(){
	wrong_choices ++;
	
	var audio = new Audio( 'assets/click.mp3' );
	audio.play();
	
	var guess = document.getElementById('theguess').value;
	document.getElementById('theguess').value = '';
	
	var difference = chosen_number-guess;
	
	if(guess == chosen_number){
		win = 1;
	}
	
	if(win==0){
		if(wrong_choices<2){
			message = 'Wrong!';
		}else if(wrong_choices<6){
			if(difference>0){
				message = 'Still wrong! Hmm.. maybe a bit more.';
			}else{
				message = 'Still wrong! Hmm.. maybe a bit less.';
			}
		}else if(wrong_choices<10){
			if(Math.abs(difference)<1000){
				message = 'You are less than 1000 away.';
			}else if(difference>0){
				message = 'Still wrong, however. It could be.. a bit more.';
			}else{
				message = 'Still wrong, however. It could be.. a bit less.';
			}
		}else{
			if(Math.abs(difference)<10){
				if(difference>0){
					message = 'You can do it. Just a tiny bit more.';
				}else{
					message = 'You can do it. Just a tiny bit less.';
				}
			}else if(Math.abs(difference)<100){
				if(difference>0){
					message = 'You are almost there. Just a little bit more.';
				}else{
					message = 'You are almost there. Just a little bit less.';
				}
			}else if(difference>0){
				message = 'Still quite far away. Perhaps.. a bit more.';
			}else{
				message = 'Still quite far away. Perhaps.. a bit less.';
			}
		}
	}else{
		message = 'Good job! It was, indeed, '+chosen_number+'.<br>You have done it in '+wrong_choices+' guesses.';
		document.getElementById('guess_box').innerHTML = "";
		
		var audio = new Audio( 'assets/fun/win.ogg' );
		audio.play();
	}
	
	refresh();
}