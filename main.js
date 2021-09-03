const container = document.querySelector('.counter');
const buttonDiv = document.querySelector('.buttons');
const secInput = document.getElementById('seconds');
const audio = document.getElementById("music");
const pauseButton = document.getElementById("pause");
const resetButton = document.getElementById("reset");
const timer = document.getElementById("timer");

var seconds;
var remseconds;
var minuts;
var saat;
var toCount = false;

function toSubmit() {
    display('start');
    remove('seconds');
    remove('ok');
    remove('select');
    seconds = Number(secInput.value);
    saat = Number(secInput.value);
    counting();
}
function display(e) {
    document.getElementById(e).style.display = 'block';
}
function remove(e) {
    document.getElementById(e).style.display = 'none';
}
function check(stat) {
    toCount = stat.value;
    if (stat.id == "start") {
        display("stop");
        remove("start");
    }
    else if (stat.id == "stop") {
        display("continue");
        remove("stop");
    }
    else {
        display("stop");
        remove("continue");
    }
}

function count() {
    if (seconds > 0) {
        if (toCount == true) {
            seconds--;
            remseconds = seconds % 60;
            minuts = Math.floor(seconds / 60);
            if (minuts < 10) {
                minuts = "0" + minuts;
            }
            if (remseconds < 10) {
                remseconds = "0" + remseconds;
            }
            container.innerHTML = minuts + " : " + remseconds;
        }
    }
    else {
        container.innerHTML = "DONE!";
        display('reset');
        display('pause');
        remove("stop");
        audio.play();
        pauseButton.addEventListener("click", pause);
    }
}


function counting() {
    remseconds = seconds % 60;
    minuts = Math.floor(seconds / 60);
    if (minuts < 10) {
        minuts = "0" + minuts;
    }
    if (remseconds < 10) {
        remseconds = "0" + remseconds;
    }
    container.innerHTML = minuts + " : " + remseconds;
    setInterval(count, 1000);
}

function pause(){
    audio.setAttribute("src", "");
    audio.pause();
    
}
function reset(){
    window.location.reload();
}

function change(){
    if(timer.value == "seconds"){

    }else{
        secInput.placeholder = 'Hour';
    }
}