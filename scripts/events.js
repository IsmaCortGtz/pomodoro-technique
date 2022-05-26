// Events
playButton.addEventListener("click", () => {
    if (!playButton.classList.contains("blocked")){
        if (!playButton.classList.contains("played")){
            playTime();
            playButton.children[0].src="sources/pause.svg";
        }else{
            clearInterval(timer);
            playButton.children[0].src="sources/play.svg";
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
    optionsElements[0].style.display = "inline-block";
    optionsElements[1].style.display = "inline-block";
});


optionsQuitButton.addEventListener("click", () => {
    optionsElements[0].style.display = "none";
    optionsElements[1].style.display = "none";
    updateOptionsValues();
    if (alarmWasPlaying){
        alarmWasPlaying = false;
        alarmAudio.play();
    }
});


testAlarmButton.addEventListener("click", () => {
    if (defaultAudioValue.checked){
        alarmAudioTest.src = defaultAudioURL;
    }else{
        alarmAudioTest.src = customUrlValue.value;
    }
    if (!alarmAudio.paused){
        alarmAudio.pause();
        alarmWasPlaying = true;
    }
    alarmAudioTest.volume = parseInt(audioVolumeValue.value) / 100;
    alarmAudioTest.play();
});


stopTestAlarmButton.addEventListener("click", () => {
    alarmAudioTest.pause()
    alarmAudioTest.currentTime = 0;
});