var tracks = [
	'assets/audio/groan1.m4a',
	'assets/audio/groan2.m4a',
	'assets/audio/groan3.m4a',
	'assets/audio/groan4.m4a'
]



// Called every one second
function manageAudio(play){

	var track = tracks.sort(function() {return 0.5 - Math.random()})[1],
		audioPlayer = $('#audioPlayer');
		audioEl = audioPlayer.get(0)
		audioPlayer.attr('src', track);

       if (play)
         audioEl.play();
       else
         audioEl.pause();

}


// Called every one second
function gameOverAudio(){

	var audioPlayer = $('#gameOverAudio');
		audioEl = audioPlayer.get(0)
        audioEl.play();

}


function killaudio (){
	$('audio').remove();
}
