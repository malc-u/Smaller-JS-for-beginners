const clockDisplay = document.getElementById("clock");
const clockTwoDisplay = document.getElementById("clocktwo");
let date;
let timeNow;
let timeTwoNow; 

let clock = setInterval(getTime, 1000);

function getTime(){
    date = new Date();
    timeNow = date.toLocaleTimeString();
    clockDisplay.innerHTML = timeNow; 
};


function showTime(){
    date = new Date();
    let hours = date.getHours();
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();

    hours = (hours < 10 ) ? "0" + hours : hours;
    minutes = (minutes < 10 ) ? "0" + minutes : minutes;
    seconds = (seconds < 10 ) ? "0" + seconds : seconds;

    timeTwoNow = hours + " : " + minutes + " : " + seconds;

    clockTwoDisplay.innerHTML = timeTwoNow;

    setInterval(showTime, 1000)
}

showTime();
