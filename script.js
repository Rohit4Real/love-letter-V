document.addEventListener("DOMContentLoaded", () => {
  const envelope = document.getElementById("envelope");
  const song = document.getElementById("loveSong");
  const hearts = document.getElementById("hearts");

  let opened = false;

  envelope.addEventListener("click", () => {
    if (opened) return;

    opened = true;
    envelope.classList.add("open");

    // Start music AFTER envelope opens
    setTimeout(() => {
      song.volume = 0.6;
      song.play().catch(() => {});
      startHearts();
    }, 600);
  });

  function startHearts() {
    setInterval(() => {
      const heart = document.createElement("div");
      heart.className = "heart";
      heart.style.left = Math.random() * 100 + "vw";
      heart.style.animationDuration = 4 + Math.random() * 3 + "s";
      hearts.appendChild(heart);

      setTimeout(() => heart.remove(), 7000);
    }, 350);
  }
});
