var BLOCKS = this.BLOCKS || {};

BLOCKS.ball = {
  create: function (x, y, vx, vy) {
    var instance = Object.create(this);

    instance.x = x; // px from 0, x position
    instance.y = y; // px from 0, y position
    instance.vx = vx; // px/s, x velocity
    instance.vy = vy; // px/s, y velocity

    return instance;
  }
};

BLOCKS.ball.draw = function (ctx) {
  ctx.beginPath();
  ctx.arc(this.x, this.y, this.r, 0, Math.PI*2, true);
  ctx.fill();
};

BLOCKS.ball.tick = function (world) {
  this.adjustXVelocity(world);
  this.adjustYVelocity(world);
  this.x += this.vx / world.fps;
  this.y += this.vy / world.fps;
};

BLOCKS.ball.adjustYVelocity = function (world) {
  var bottomEdgeY = this.y + this.r;
  if (bottomEdgeY < world.height) {
    this.vy += (this.terminalVelocity - this.vy) * BLOCKS.physics.a / world.fps;
  } else if (bottomEdgeY > world.height) {
    this.vy *= -1 * this.e;
    this.vx *= this.f;
    this.y = world.height - this.r;
  }
};

BLOCKS.ball.adjustXVelocity = function (world) {
  if (this.x + this.r > world.width) {
    this.vx *= -1 * this.e;
    this.vy *= this.f;
    this.x = world.width - this.r;
  } else if (this.x - this.r < 0) {
    this.vx *= -1 * this.e;
    this.vy *= this.f;
    this.x = this.r;
  }
};

BLOCKS.ball.terminalVelocity = 1000; // px/s
BLOCKS.ball.e = 0.8; // %, coefficient of restitution
BLOCKS.ball.f = 0.8; // %, friction
BLOCKS.ball.r = 20; // px, radius
