const envelope = document.getElementById("envelope");
const openBtn = document.getElementById("openBtn");
const closeBtn = document.getElementById("closeBtn");
const song = document.getElementById("song");
const effects = document.getElementById("effects");

let effectInterval;
const emojis = ["💖","💕","💘","💗","💞"];

openBtn.onclick = () => {
  envelope.classList.add("open");
  song.currentTime = 0;
  song.volume = 0.6;
  song.play().catch(() => {});
  startEffects();
};

closeBtn.onclick = () => {
  envelope.classList.remove("open");
  song.pause();
  stopEffects();
};

function startEffects() {
  stopEffects();
  effectInterval = setInterval(() => {

    // Heart
    const heart = document.createElement("div");
    heart.className = "heart";
    heart.style.left = Math.random() * 100 + "vw";
    heart.style.animationDuration = 4 + Math.random() * 3 + "s";
    effects.appendChild(heart);
    setTimeout(() => heart.remove(), 7000);

    // Emoji
    const emoji = document.createElement("div");
    emoji.className = "love-emoji";
    emoji.innerText = emojis[Math.floor(Math.random() * emojis.length)];
    emoji.style.left = Math.random() * 100 + "vw";
    emoji.style.animationDuration = 5 + Math.random() * 3 + "s";
    effects.appendChild(emoji);
    setTimeout(() => emoji.remove(), 8000);

  }, 300);
}

function stopEffects() {
  clearInterval(effectInterval);
}
