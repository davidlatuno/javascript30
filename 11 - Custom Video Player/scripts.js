// Get Elements

const player = document.querySelector('.player');
const video = player.querySelector('.viewer');
const progress = player.querySelector('.progress');
const progressBar = player.querySelector('.progress__filled');
const toggle = player.querySelector('.toggle');
const skipButtons = player.querySelector('[data-skip]');
const ranges = player.querySelector('.player__slider');

// Build out functions

const togglePlay = () => {
    const method = video.paused ? 'play' : 'pause';
    video[method]();
};

const updateButton = () => {
    const icon = video.paused ? "►" : "||";
    toggle.textContent = icon;
    // console.log("update the button");
}

const skip = () => 

// Hook up event listeners

video.addEventListener("play", updateButton);
video.addEventListener("pause", updateButton);
video.addEventListener("click", togglePlay);
toggle.addEventListener("click", togglePlay);

