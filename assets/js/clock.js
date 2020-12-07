const clockDisplay = document.getElementById("clock");
let date;
let timeNow; 

let clock = setInterval(getTime, 1000);

function getTime(){
    date = new Date();
    timeNow = date.toLocaleTimeString();
    clockDisplay.innerHTML = timeNow; 
};



