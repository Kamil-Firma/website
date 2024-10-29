board_state = [0,0,0,0,0,0,0,0,0];
where_o = Math.floor(Math.random() * 9);
first_player = 0;
symbol_count = 0;
win = 0;

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

function set_player_images() {
	player_image = [Math.floor(Math.random() * images.length), Math.floor(Math.random() * images.length)];
	while(player_image[1] == player_image[0]){
		player_image[1] = Math.floor(Math.random() * images.length);
	}
	state_definition = [
		'<img src="' + image_path + '/' + images[player_image[0]] + '" width="150px">',
		'<img src="' + image_path + '/' + images[player_image[1]] + '" width="150px">'
	];
	
	document.getElementById('players').innerHTML = state_definition[0] + " VS. " + state_definition[1];
}
set_player_images();

function refresh_board() {
	for(i=0; i<9; i++){
		if(board_state[i] != 0){
			document.getElementById(i).innerHTML = "<center>"+state_definition[board_state[i] - 1];
		}else{
			if(win == 0){
				document.getElementById(i).innerHTML = "<button onclick='placex(" + String(i) + ")'>PLACE HERE</button>";
			}else{
				document.getElementById(i).innerHTML = "<button>...</button>";
			}
		}
	}
}

function placex(where) {
	if(win == 0){
		board_state[where] = 1;
		symbol_count ++;
		
		var audio = new Audio( 'assets/click.mp3' );
		audio.play();
		
		check_for_win();
		
		if(win == 0 && symbol_count < 9){
			place_o();
			check_for_win();
		}
		
		refresh_board();
	}
}

function check_if_ai_starts() {
	first_player = first_player*-1+1;
	if(first_player==1){
		place_o();
	}
	
	refresh_board();
}

function place_o() {
	if(win == 0 && symbol_count < 9){
		while( board_state[where_o] != 0){
			where_o = Math.floor(Math.random() * 9);
		}
		board_state[where_o] = 2;
		symbol_count ++;
	}
}

function check_for_win() {
	for(i=1; i<3; i++){
		if( ( board_state[0]==i &&  board_state[1]==i &&  board_state[2]==i ) || //horizontal, row 1
			( board_state[3]==i &&  board_state[4]==i &&  board_state[5]==i ) || //horizontal, row 2
			( board_state[6]==i &&  board_state[7]==i &&  board_state[8]==i ) || //horizontal, row 3
			
			( board_state[0]==i &&  board_state[3]==i &&  board_state[6]==i ) || //vertical, column 1
			( board_state[1]==i &&  board_state[4]==i &&  board_state[7]==i ) || //vertical, column 2
			( board_state[2]==i &&  board_state[5]==i &&  board_state[8]==i ) || //vertical, column 3
			
			( board_state[0]==i &&  board_state[4]==i &&  board_state[8]==i ) || //diagonal, topleft-bottomright
			( board_state[2]==i &&  board_state[4]==i &&  board_state[6]==i ) //diagonal, topright-bottomleft
		){
			win = i;
		}
	}
	
	if(win != 0 && win != 3){
		document.getElementById('wintext').innerHTML = state_definition[win-1] + ' win<br><button onclick="restart_game()">RESTART</button>';
		play_jingle(win);
	}else if(symbol_count >= 9){
		document.getElementById('wintext').innerHTML = 'TIE.<br><button onclick="restart_game()">RESTART</button>';
		win = 3;
		play_jingle(win);
	}
}

function play_jingle(who) { //1 - player, 2 - opponent, 3 - tie
	var audio_jingles = [
		new Audio( 'assets/fun/win.ogg' ),
		new Audio( 'assets/fun/lose.ogg' ),
		new Audio( 'assets/fun/tie.ogg' )
	];
	audio_jingles[who-1].play();
}

function restart_game() {
	board_state = [0,0,0,0,0,0,0,0,0];
	where_o = Math.floor(Math.random() * 9);
	symbol_count = 0;
	win = 0;
	
	document.getElementById('wintext').innerHTML = "";
	set_player_images();
	refresh_board();
	check_if_ai_starts();
}

refresh_board();