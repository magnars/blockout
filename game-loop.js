var canvas = document.getElementById("game");
var ctx = canvas.getContext("2d");

var world = {
  width: canvas.width,
  height: canvas.height
};

var ball = BLOCKS.ball.create(75, 75, 250, 0);

ctx.fillStyle = "rgba(255, 255, 255, 1);";

function renderWorld() {
  world.fps = BLOCKS.calculateFPS();
  ctx.clearRect(0, 0, world.width, world.height);
  ball.tick(world);
  ball.draw(ctx);
  window.requestNextAnimationFrame(renderWorld);
}

window.requestNextAnimationFrame(renderWorld);
