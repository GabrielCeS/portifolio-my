
function playPause(videoId) {
    let video = document.getElementById(videoId);
    let button = document.querySelector(`button[onclick="playPause('${videoId}')"] i`);
    if (video.paused) {
        video.play();
        button.classList.remove('fa-play');
        button.classList.add('fa-pause');
    } else {
        video.pause();
        button.classList.remove('fa-pause');
        button.classList.add('fa-play');
    }
}