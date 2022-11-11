console.log("page loaded...");

function hoverPlay(video) {
    video.muted = true;
    video.play();
}

function stopHoverPlay(video) {
    video.pause();
    video.currentTime = 0;
}