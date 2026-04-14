const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");
canvas.width = innerWidth;
canvas.height = innerHeight;
canvas.style.backgroundColor = "rgb(150, 50, 10)";

canvas.addEventListener("click", (e) => {
  circles(e);
});

function circles(e) {
  const r = Math.floor(Math.random() * 256);
  const g = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);
  ctx.beginPath();
  ctx.arc(e.x, e.y, 30, 0, Math.PI * 2);
  ctx.fillStyle = `rgb(${r}, ${g}, ${b})`;
  ctx.fill();
}
