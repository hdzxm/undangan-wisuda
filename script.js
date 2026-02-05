const params = new URLSearchParams(window.location.search);
const nama = params.get("nama") || "Tamu Undangan";

document.getElementById("greeting").innerText = `Hello, ${nama}`;

const openBtn = document.getElementById("openBtn");
const opening = document.getElementById("opening");
const invitation = document.getElementById("invitation");
const music = document.getElementById("bgMusic");

openBtn.addEventListener("click", () => {
  opening.classList.remove("active");
  invitation.classList.add("active");
  music.play();
});
