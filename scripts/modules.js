// Modules

function playTime(){
    beginTimeDate = new Date;
    timer = setInterval( () => {
        plusTimer();
        refreshCounter();
        checkIfEnd();
    }, 1000);
}


function endTime(){
    playAlarm();
    second = 0;
    minutes = 0;
    refreshCounter();
    endTimeDate = new Date;

    let typeText = working ? "Work block" : "Breake block";
    let endTimeText = intToString(endTimeDate.getHours()) + ":" + intToString(endTimeDate.getMinutes());
    let beginTimeText = intToString(beginTimeDate.getHours()) + ":" + intToString(beginTimeDate.getMinutes());
    working = !working;

    list.insertAdjacentHTML("afterend", `<div class="list-row">
    <div class="list-cell">${beginTimeText}</div>
    <div class="list-cell">${endTimeText}</div>
    <div class="list-cell cell-type">${typeText}</div>
</div>`);
}


function playAlarm(){
    clearInterval(timer);
    alarmAudio.play();
    playButton.classList.add("blocked");
    alarmButton.classList.remove("blocked");
}



function stopAlarm(){
    playTime();
    alarmAudio.pause();
    alarmAudio.currentTime = 0;
    playButton.classList.remove("blocked");
    alarmButton.classList.add("blocked");
}


function plusTimer(){
    if (second === 59){
        second = 0;
        minutes++;
    }else{
        second++;
    }
}


function refreshCounter(){
    counterSecond.innerHTML = intToString(second);
    counterMinutes.innerHTML = intToString(minutes);
}


function checkIfEnd(){
    if (working){
        if (minutes === workLimit){
            endTime("Work state");
        }
    }else{
        if (minutes === breakLimit){
            endTime("Breake");
        }
    }
}


function intToString(number){
    if (number < 10){
        return ("0" + number.toString());
    }else if (number >= 10){
        return number;
    }
}