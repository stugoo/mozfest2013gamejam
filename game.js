var copcar, copPos, speed, slowSpeed, fastSpeed;

$(document).ready(function(){
  
  slowSpeed = 5;
  fastSpeed = 10;
  copPos = 0;
  speed = "fast";

  window.webkitRequestAnimationFrame(step);  

  
});

function step(){

  var copcar = $(".cop-car");

  if(copcar.length > 0) {

    if($(".world").hasClass("slow")) {
      copPos = copPos + slowSpeed;
    } else {
      copPos = copPos + fastSpeed;
    }

    copcar.css("right",copPos);
  
    if(copPos > 1400 ){
      copPos = -120;
      copcar.remove();
    }
  }

  window.webkitRequestAnimationFrame(step);  
  
}


