const envelope = document.getElementById("envelope");
const music = document.getElementById("music");

function openLetter() {
  envelope.classList.add("open");
  music.play();
  startHearts();
}

function closeLetter() {
  envelope.classList.remove("open");
  music.pause();
  music.currentTime = 0;
}

function startHearts() {
  for (let i = 0; i < 25; i++) {
    createHeart();
  }
}

function createHeart() {
  const heart = document.createElement("div");
  heart.className = "heart";
  heart.innerText = "💗";
  heart.style.left = Math.random() * 100 + "vw";
  heart.style.animationDuration = 4 + Math.random() * 4 + "s";
  document.body.appendChild(heart);

  setTimeout(() => heart.remove(), 8000);
}
