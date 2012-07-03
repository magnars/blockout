var BLOCKS = this.BLOCKS || {};

(function (B) {

  var lastTime = +new Date();

  B.calculateFPS = function () {
    var now = +new Date(),
        fps = 1000 / (now - lastTime);
    lastTime = now;

    return fps;
  };

}(BLOCKS));
