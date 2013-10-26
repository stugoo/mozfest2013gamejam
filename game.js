var copcar, copPos, speed, slowSpeed, fastSpeed;

$(document).ready(function(){
  
  slowSpeed = 5;
  fastSpeed = 10;
  copPos = -600;
  speed = "fast";

  window.webkitRequestAnimationFrame(step);  

  
});

function gameOverMan(){
  $(".game-over").show();
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
       }

    });


    
    
    
  }


  window.webkitRequestAnimationFrame(step);  
  
}


