var carTimes = [1000, 2500, 5000, 9000, 13000, 14000, 18000, 21000, 22000, 25000],                 // Seconds at which the cars appear
    timeElapsed = 0,                                     // Total time
    groaning = false,                                    // Is the user groaning
    carOnScreen = false,                                 // Is there a car on screen
    world = $('.world'); // The world element

// Fake groaning with spacebar
document.addEventListener("keydown", groaningStart);
document.addEventListener("keyup", groaningEnd);

function groaningStart(event){
  // event.preventDefault();

  if (groaning === false && event.keyCode === 32){
    console.log("start?");
    groaning = true;
    $('.world').addClass('slow');

    manageAudio(true); //true to play
  }
}

function groaningEnd(event){
  event.preventDefault();

  if (groaning === true && event.keyCode === 32){
    groaning = false;

    $('.world').removeClass('slow');
    manageAudio();
  }
}

// Helper function
function secondsToMillis(millis){
    return millis * 1000;
}

// Police car object
function policeCar(){
    var el = false,
    animationTime = secondsToMillis(1);

    return {
        add: function(){
          console.log('add');
          var copcar = $("<div class='cop-car'><div class='slow-zone'></div><div class='sprite'></div></div>");
          $(".world").append(copcar);
        },
    }
};

// Called every one second
function tick(){
    timeElapsed += secondsToMillis(1);

    if (carTimes.indexOf(timeElapsed) !== -1){
        var car = policeCar();
        car.add();
    }

}

// First tick
setInterval(tick, secondsToMillis(1));
