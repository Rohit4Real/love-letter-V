$(document).ready(function () {
  const envelope = $("#envelope");
  const song = document.getElementById("loveSong");
  const heartContainer = document.getElementById("floating-hearts");

  envelope.on("click", function () {
    envelope.addClass("open");

    song.volume = 0.6;
    song.play().catch(() => {});

    startHearts();
  });

  function startHearts() {
    setInterval(() => {
      const heart = document.createElement("div");
      heart.className = "heart";
      heart.style.left = Math.random() * 100 + "vw";
      heart.style.animationDuration = 4 + Math.random() * 3 + "s";

      heartContainer.appendChild(heart);

      setTimeout(() => {
        heart.remove();
      }, 7000);
    }, 300);
  }
});
