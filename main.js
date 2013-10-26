var carTimes = [2000, 8000],                             // Seconds at which the cars appear
    timeElapsed = 0,                                     // Total time
    groaning = false,                                    // Is the user groaning
    carOnScreen = false,                                 // Is there a car on screen
    world = document.getElementsByClassName('world')[0]; // The world element

// Fake groaning with spacebar
document.addEventListener("keydown", groaningStart);
document.addEventListener("keyup", groaningEnd);

function groaningStart(event){
  event.preventDefault();

  if (event.keyCode === 32){
    groaning = true;

    world.classList.add('slow');
  }
}

function groaningEnd(event){
  event.preventDefault();

  if (event.keyCode === 32){
    groaning = false;

    world.classList.remove('slow');
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
          this.el = document.createElement('div');
          this.el.id = 'police';
          this.el.classList.add('cop-car');

          this.el.className = 'moving';
          world.appendChild(this.el);

          setTimeout(this.remove, secondsToMillis(2.3));

          carOnScreen = true;
        },

        remove: function(){
          console.log('remove');
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
