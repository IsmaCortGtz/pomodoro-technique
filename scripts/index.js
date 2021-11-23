// Settings
var workLimit = 25;
var breakLimit = 5;
var longBreakLimit = 30;
var longBreakFrequency = 4;

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
const useLongBreakValue = document.getElementById("useLongBreak");
const longBreakFrequencyValue = document.getElementById("longBreakFrecuency");
const longBreakLimitValue = document.getElementById("longBreakLimit");

// Global vars
var timer;
var second = 0;
var minutes = 0;
var working = true;
const defaultAudioURL = "https://www.fesliyanstudios.com/soundeffects/2019-05-06/Originals/Alarm-Fast-High-Pitch-A1-www.fesliyanstudios.com.mp3";

var currentWorkNumber = 0;
var endTimeDate;
var beginTimeDate;

var alarmWasPlaying = false;
var alarmAudio = new Audio(defaultAudioURL);
var alarmAudioTest = new Audio(defaultAudioURL);
alarmAudio.loop = true;
alarmAudioTest.loop  = true;

updateOptionsValues();