var timeBegan = null; //Did the clock start?
var timeStopped = null; //At what time was the timer stopped;
var stoppedDuration = 0; //How long was the timer stopped?
var startInterval = null; //This is needed to stop the startIntrval() method
var flag = false; //To control the star/stop of timer

const timerContainer = document.getElementsByClassName("timer-container")[0];


// Start / Stop the timer by clicking the container.    
timerContainer.addEventListener("click",function(){  
    if(!flag){
        startTimer();
        flag = true;
    }
    else{
        stopTimer();
        flag= false;
    }
})

//Reset timer by double clicking on container.
timerContainer.addEventListener("dblclick",function(){
    resetTimer();
})


// startTimer method.
function startTimer(){
    //Check if timer count began/
    if(timeBegan === null)
        timeBegan = new Date();
    
    if(timeStopped !== null)
        stoppedDuration += (new Date() - timeStopped);

    startInterval = setInterval(clockRunning, 10);
}

// stopTimer methhod
function stopTimer(){
    timeStopped = new Date();
    clearInterval(startInterval);
}

function clockRunning(){
    var currentTime = new Date();
    var timeElapsed = new Date(currentTime - timeBegan - stoppedDuration);

    var minutes = timeElapsed.getUTCMinutes();
    var seconds = timeElapsed.getUTCSeconds();
    var milliseconds = timeElapsed.getUTCMilliseconds();

    milliseconds = Math.floor(milliseconds/10);

    document.getElementById("timer-display").innerHTML = 
    (minutes = minutes < 10 ? '0' + minutes:minutes) + ':' + 
    (seconds = seconds < 10 ? '0' + seconds:seconds) + ':' +
    (milliseonds = milliseconds < 10 ? '0' + milliseconds:milliseconds);
}   

//Reset timer 
function resetTimer(){
    clearInterval(startInterval);
    timeBegan = null;
    timeStopped = null;
    stoppedDuration = 0;

    document.getElementById("timer-display").innerHTML = "00:00:00";
    flag = false;
}