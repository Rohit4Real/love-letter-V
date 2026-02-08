document.addEventListener("DOMContentLoaded", () => {
  const envelope = document.getElementById("envelope");
  const song = document.getElementById("loveSong");
  const heartBox = document.getElementById("hearts");

  let opened = false;

  envelope.addEventListener("click", () => {
    if (!opened) {
      envelope.classList.add("open");
      playMusic();
      startHearts();
      opened = true;
    }
  });

  function playMusic() {
    song.volume = 0.6;
    song.play().catch(() => {
      console.log("Tap again if browser blocked audio");
    });
  }

  function startHearts() {
    setInterval(() => {
      const heart = document.createElement("div");
      heart.className = "heart";
      heart.style.left = Math.random() * 100 + "vw";
      heart.style.animationDuration = 4 + Math.random() * 3 + "s";
      heartBox.appendChild(heart);

      setTimeout(() => heart.remove(), 7000);
    }, 300);
  }
});
