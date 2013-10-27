if ( !window.requestAnimationFrame ) {

  window.requestAnimationFrame = ( function() {

    return window.webkitRequestAnimationFrame ||
    window.mozRequestAnimationFrame ||
    window.oRequestAnimationFrame ||
    window.msRequestAnimationFrame ||
    function( /* function FrameRequestCallback */ callback, /* DOMElement Element */ element ) {

      window.setTimeout( callback, 1000 / 60 );

    };

  } )();

}

var copcar, copPos, speed, slowSpeed, fastSpeed, totalDistance = 0, failed = false, copCount;

$(document).ready(function(){

  slowSpeed = 5;
  fastSpeed = 10;
  copPos = -600;
  speed = "fast";
  copCount = 0;

  window.requestAnimationFrame(step);
});

function gameOverMan(finalTime){
  if (failed === false){
      // TODO: i18n
      $(".game-over").append('<p class="score">You travelled '+parseInt(finalTime)+' metres</p>');

      failed = true;
  }

  $(".game-over").show();
  gameOverAudio();
}

function step(){

  var copcar = $(".cop-car");

  if(copcar.length > 0) {
    var speed;
    if($(".world").hasClass("slow")) {
      speed = slowSpeed;
    } else {
      speed = fastSpeed;

    }
    totalDistance += speed;

    $(".cop-car").each(function(){

      var pos = parseInt($(this).css("right"));
      $(this).css("right",pos + speed);
      if(pos > 300 && pos < 900) {
         if(!$(".world").hasClass("slow")){
           gameOverMan(totalDistance);
         }
       }
       if(pos > 2000 ){
         $(this).remove();
         copCount++;
         console.log(copCount);
         if(copCount == 10){
           $(".game-over").remove();
           $(".winner").show();
         }
       }
    });
  }

  window.requestAnimationFrame(step);
}
