// for the toggle button
const toggle = document.getElementById("toggle")
// for close
const close = document.getElementById("close")
// for open
const open = document.getElementById("open")
// for modal b
const modal = document.getElementById("modal")

// for the toggle navigation
toggle.addEventListener("click", () =>
document.body.classList.toggle("show-nav"));

// for the show modal
open.addEventListener("click", () => modal.classList.add("show-modal"));

// for the close button to hide the modal
close.addEventListener("click", () => modal.classList.remove("show-modal"));

window.addEventListener("click", (e) => e.target == modal ? modal.classList.remove("show-modal") : false);