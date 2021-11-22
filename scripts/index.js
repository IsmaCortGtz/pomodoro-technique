// Settings
var workLimit = 25;
var breakLimit = 5;

// HTML elements
const counterSecond = document.getElementsByClassName("counter-seconds")[0];
const counterMinutes = document.getElementsByClassName("counter-minutes")[0];
const playButton = document.getElementsByClassName("play-button")[0];
const alarmButton = document.getElementsByClassName("alarm-button")[0];
const list = document.getElementsByClassName("row-header")[0];
const optionButton = document.getElementsByClassName("header-option")[0];
const optionsElements = document.getElementsByClassName("options");
const optionsQuitButton = document.getElementsByClassName("options-quit")[0];

//Setting elements
const workLimitValue = document.getElementById("workLimite");
const breakLimitValue = document.getElementById("breakLimite");
const defaultAudioValue = document.getElementById("useCustomURL");
const customUrlValue = document.getElementById("customURL");
const audioVolumeValue = document.getElementById("alarmVolume");
const testAlarmButton = document.getElementsByClassName("options-alarmTest-button")[0];
const stopTestAlarmButton = document.getElementsByClassName("options-alarmTestStop-button")[0];


// Global vars
var timer;
var second = 0;
var minutes = 0;
var working = true;
const defaultAudioURL = "https://www.fesliyanstudios.com/soundeffects/2019-05-06/Originals/Alarm-Fast-High-Pitch-A1-www.fesliyanstudios.com.mp3";

var endTimeDate;
var beginTimeDate;

var alarmAudio = new Audio(defaultAudioURL);
alarmAudio.loop = true;


// Events
playButton.addEventListener("click", () => {

    if (!playButton.classList.contains("blocked")){
        if (!playButton.classList.contains("played")){
            playTime();
            playButton.innerHTML = '<i class="fas fa-pause"></i>';
        }else{
            clearInterval(timer);
            playButton.innerHTML = '<i class="fas fa-play"></i>';
        }
        playButton.classList.toggle("played");
    }
});



alarmButton.addEventListener("click", () => {

    if (!alarmButton.classList.contains("blocked")){
        stopAlarm();
    }

});


optionButton.addEventListener("click", () => {
    optionsElements[0].style.zIndex = "0";
    optionsElements[1].style.top = "5%";
    optionsElements[0].style.opacity = "0.5";
});

optionsQuitButton.addEventListener("click", () => {
    optionsElements[0].style.zIndex = "-1";
    optionsElements[1].style.top = "-150%";
    optionsElements[0].style.opacity = "0";
    
    

    workLimit = parseInt(workLimitValue.value);
    breakLimit = parseInt(breakLimitValue.value);

    if (defaultAudioValue.checked){
        alarmAudio = new Audio(defaultAudioURL);
    }else{
        alarmAudio = new Audio(customUrlValue.value);
    }
    alarmAudio.loop = true;
    alarmAudio.volume = parseInt(audioVolumeValue.value) / 100;

});

testAlarmButton.addEventListener("click", () => {
    if (defaultAudioValue.checked){
        alarmAudio = new Audio(defaultAudioURL);
    }else{
        alarmAudio = new Audio(customUrlValue.value);
    }
    alarmAudio.loop = true;
    alarmAudio.volume = parseInt(audioVolumeValue.value) / 100;
    alarmAudio.play();
});

stopTestAlarmButton.addEventListener("click", () => {
    alarmAudio.pause()
    alarmAudio.currentTime = 0;
});