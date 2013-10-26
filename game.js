var copcar, copPos, speed, slowSpeed, fastSpeed;

$(document).ready(function(){
  $(".world").click(function(){
    var cop = $(".cop-car");
    cop.removeClass("cop-car-drive");
    $("body").toggleClass("slow");
    cop.addClass("cop-car-drive");
    cop.offsetWidth = cop.offsetWidth;      
  });
  
  
  slowSpeed = 5;
  fastSpeed = 10;
  copcar = $(".cop-car");
  copPos = 0;
  speed = "fast";

  window.webkitRequestAnimationFrame(step);  

  
});

function step(){

  if($("body").hasClass("slow")) {
    copPos = copPos + slowSpeed;
  } else {
    copPos = copPos + fastSpeed;
  }

  
  
  copcar.css("right",copPos);

  window.webkitRequestAnimationFrame(step);  
  
}