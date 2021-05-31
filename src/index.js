const sounds = ["applause", "boo", "gasp", "tada", "victory", "wrong"];

sounds.forEach((sound) => {
  const button = document.createElement("button");
  button.innerText = sound;
  button.classList.add("btn");
  button.addEventListener("click", () => {
    stopSong();
    document.getElementById(sound).play();
  });
  document.body.appendChild(button);
});

function stopSong() {
  sounds.forEach((sound) => {
    const song = document.getElementById(sound);
    song.pause();
    song.currentTime = 0;
  });
}
