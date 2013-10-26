var copcar, copPos, speed, slowSpeed, fastSpeed, copCount;

$(document).ready(function(){

  slowSpeed = 5;
  fastSpeed = 10;
  copPos = -600;
  speed = "fast";
  copCount = 0;
  window.webkitRequestAnimationFrame(step);
});

function gameOverMan(){
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

    $(".cop-car").each(function(){

      var pos = parseInt($(this).css("right"));
      $(this).css("right",pos + speed);
      if(pos > 300 && pos < 900) {
         if(!$(".world").hasClass("slow")){
           gameOverMan();
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
  window.webkitRequestAnimationFrame(step);
}
