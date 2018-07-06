// Get Elements

const player = document.querySelector('.player');
const video = player.querySelector('.viewer');
const progress = player.querySelector('.progress');
const progressBar = player.querySelector('.progress__filled');
const toggle = player.querySelector('.toggle');
const skipButtons = player.querySelectorAll('[data-skip]');
const ranges = player.querySelectorAll('.player__slider');

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

// Had trouble with ES6 arrow functions 'this' scope so reverted to regular function syntax
function skip() {
    // console.log(this);
    video.currentTime += parseFloat(this.dataset.skip);
}

function handleRangeUpdate() {
    // console.log(this.value);
    // console.log(this.name);
    video[this.name] = this.value;
}

function handleProgress() {
    const percent = (video.currentTime / video.duration) * 100;
    progressBar.style.flexBasis = `${percent}%`;
}

function scrub (e) {
    // console.log(e);
    const scrubTime = (e.offsetX / progress.offsetWidth) * video.duration;
    video.currentTime = scrubTime;
}

// Hook up event listeners


// Code for spacebar to toggle play
window.addEventListener("keydown", (e) => {
    if(e.code === "Space") {
        // console.log(e);
        togglePlay();
    }
})
video.addEventListener("play", updateButton);
video.addEventListener("pause", updateButton);
video.addEventListener("click", togglePlay);
video.addEventListener("timeupdate", handleProgress);
toggle.addEventListener("click", togglePlay);
skipButtons.forEach(button => button.addEventListener("click", skip));
ranges.forEach(range => range.addEventListener("change", handleRangeUpdate));
ranges.forEach(range => range.addEventListener("mousemove", handleRangeUpdate));

let mousedown = false;
progress.addEventListener('click', scrub);
progress.addEventListener('mousemove', (e) => mousedown && scrub(e));
progress.addEventListener('mousedown', () => mousedown = true);
progress.addEventListener('mouseup', () => mousedown = false);