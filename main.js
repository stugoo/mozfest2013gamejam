var carTimes = [2000, 8000],                             // Seconds at which the cars appear
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
  }
}

function groaningEnd(event){
  event.preventDefault();

  if (groaning === true && event.keyCode === 32){
    groaning = false;

    $('.world').removeClass('slow');
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
          var copcar = $("<div class='cop-car'></div>");
          this.el.className = 'cop-car';
          $(".world").append(this.el);
          setTimeout(this.remove, secondsToMillis(4));
          carOnScreen = true;
        },

        remove: function(){
          carOnScreen = false;
        }
    }
};

// Called every one second
function tick(){
    timeElapsed += secondsToMillis(1);

    if (carTimes.indexOf(timeElapsed) !== -1){
        var car = policeCar();
        car.add();
    }

  if (carOnScreen === true){
    if (groaning === true){
      // Success
      console.log('groaning');
    } else {
      // Failure
      console.log('should be groaning');
    }
  }
}

// First tick
setInterval(tick, secondsToMillis(1));
