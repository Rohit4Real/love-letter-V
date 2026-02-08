$(document).ready(function () {
  const envelope = $("#envelope");
  const song = document.getElementById("loveSong");

  envelope.on("click", function () {
    envelope.addClass("open").removeClass("close");

    song.volume = 0.6;
    song.play().catch(() => {});
  });
});
