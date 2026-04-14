const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");
canvas.width = innerWidth;
canvas.height = innerHeight;
canvas.style.backgroundColor = "rgb(0, 0, 0)";

function circles() {
  const r = Math.floor(Math.random() * 256);
  const g = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);
  const radius = 2 + Math.random() * 40;
  const x = radius + Math.random() * (innerWidth - radius * 2);
  const y = radius + Math.random() * (innerHeight - radius * 2);
  ctx.beginPath();
  ctx.arc(x, y, radius, 0, Math.PI * 2);
  ctx.fillStyle = `rgba(${r}, ${g}, ${b}, 0.7)`;
  ctx.fill();
}

let count = 0;
const interval = setInterval(function () {
  circles();
  count++;
  if (count == 500) {
    clearInterval(interval);
  }
}, 100);
