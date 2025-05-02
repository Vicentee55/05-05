function audioPlay() {
    var audio = document.getElementById("audio");
    var img = document.getElementById("sound-icon");

    if (audio.paused) {
        audio.volume = 0.3;
        audio.currentTime = 0;
        audio.play();
        img.src = "img/desmutado.png";
    } else {
        audio.pause();
        img.src = "img/mutado.png";
    }
}
