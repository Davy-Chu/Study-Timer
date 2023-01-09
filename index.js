let sTime = 25, breakTime = 5, study;
const start = document.getElementById("start");
const count = document.getElementById("countdown"); 
let stop = false,stud = true;
function sound() {
    var mySound = new Audio('zapsplat_household_alarm_clock_digital_beeps_002_60069.mp3');
    mySound.play();
}
function startTimer() {
                if (start.value === "Pause") {
                    start.setAttribute("value", "Resume");
                    stop = true;
                } 
                else if (start.value === "Resume" || start.value === "Start") {
                    if(start.value === "Start"){
                        study = sTime * 60;
                    }
                    stopper = setInterval(countDec, 1000);
                    document.getElementById("start").setAttribute("value", "Pause");
                    stop = false;
                    console.log("start");
                }
            }
function countDec() {
    if (study === -1 || stop) {//Timer runs out or paused
      clearInterval(stopper);
      if(study === -1 && stud){//If study time ends
        sound();
        document.getElementById("t1").innerHTML = "Break Time";
        document.getElementById("t2").innerHTML = "Take a walk, or grab a snack!";
        study = breakTime * 60;
         stud = false;
        stopper = setInterval(countDec,1000);
      }
        
      else if(study <= 0 && !stud){//If break time ends
        sound();
        rst();
        document.getElementById("t1").innerHTML = "Study Time";
        document.getElementById("t2").innerHTML = "Get to Work!";
      }
        if (stop) {//if paused 
            stop = false;
        }
        return;
    }
    //base case
    let min = Math.floor(study / 60);
    let seconds = study % 60;
    seconds = seconds < 10 ? '0' + seconds : seconds;
    min = min < 10 ? '0' + min : min;
    count.innerHTML = (min + ":" + seconds);
    console.log(study);
    study--;
}
function rst() {
    study = sTime * 60;
    count.innerHTML = `${sTime}:00`;
    stop = true;
    document.getElementById("start").setAttribute("value", "Start");
}

function setTime() {
    rst();
    sTime = parseInt(document.getElementById("study").value);
  	document.getElementById("countdown").innerHTML =`${newTime}:00`;
}

function setBreak(){
    breakTime = parseInt(document.getElementById("break").value);
    study = breakTime * 60;
    // count.innerHTML = `${sTime}:00`;
    stop = true;
}
