//cTime = time in minutes on timer
//OK on the input field for study time, make a onclick function that increases / decreases time by 5 minute increments
function sound() {
    var mySound = new Audio('zapsplat_household_alarm_clock_digital_beeps_002_60069.mp3');
    mySound.play();
}
var stop = false,stud = true;

function countDec() {
    
  const count = document.getElementById("countdown"); 
    if (study === -1 || stop) {
      clearInterval(stopper);
      if(study === -1 && stud){
        sound();
        document.getElementById("t1").innerHTML = "Break Time";
        document.getElementById("t2").innerHTML = "Take a walk, or grab a snack!";
        cTime = 5;
        study = 300;
         stud = false;
        stopper = setInterval(countDec,1000);
      }
      else if(study <= 0 && !stud){
        sound();
        stop = true;
         document.getElementById("t1").innerHTML = "Study Time";
        document.getElementById("t2").innerHTML = "Get to Work!";
        cTime = document.getElementById("study").value;
          // cTime = 25;
        study = cTime*60;
          // study = 1500;
        document.getElementById('start').setAttribute('value','Start');
          console.log(cTime);
      }
        // console.log("stop");
        if (stop) {
            stop = false;
        }
        return;
    }
    
    let min = Math.floor(study / 60);
    let seconds = study % 60;
    seconds = seconds < 10 ? '0' + seconds : seconds;
    min = min < 10 ? '0' + min : min;
    count.innerHTML = (min + ":" + seconds);
    study--;
}
function rst() {
    study = cTime * 60;
    document.getElementById("countdown").innerHTML = `${cTime}:00`;
    stop = true;
    document.getElementById("start").setAttribute("value", "Start");
}

function setTime() {
    if(stud){
        document.getElementById("study").setAttribute("value",cTime);
    	document.getElementById("countdown").innerHTML =`${cTime}:00`;
        
    }
}