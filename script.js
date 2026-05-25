const audio = document.getElementById("audio");
const playBtn = document.getElementById("btn-play");
const progressBar = document.getElementById("progress-bar");
const timeCurrent = document.getElementById("time-current");
const timeTotal = document.getElementById("time-total");

const iconPlay = playBtn.querySelector(".icon-play");
const iconPause = playBtn.querySelector(".icon-pause");

let isPlaying = false;

function togglePlay() {
  if (isPlaying) {
    audio.pause();

    iconPlay.style.display = "block";
    iconPause.style.display = "none";
  } else {
    audio.play();

    iconPlay.style.display = "none";
    iconPause.style.display = "block";
  }
  isPlaying = !isPlaying;
}

playBtn.addEventListener("click", togglePlay);

audio.addEventListener("loadedmetadata", () => {
  progressBar.max = audio.duration;

  let min = Math.floor(audio.duration / 60);
  let sec = Math.floor(audio.duration % 60);
  if (sec < 10) sec = "0" + sec;
  timeTotal.textContent = `${min}:${sec}`;
});

audio.addEventListener("timeupdate", () => {
  progressBar.value = audio.currentTime;

  let min = Math.floor(audio.currentTime / 60);
  let sec = Math.floor(audio.currentTime % 60);
  if (sec < 10) sec = "0" + sec;
  timeCurrent.textContent = `${min}:${sec}`;
});

progressBar.addEventListener("input", () => {
  audio.currentTime = progressBar.value;
});
