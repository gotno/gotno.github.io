(function(root){
  var Asteroids = root.Asteroids = (root.Asteroids || {});

  var Bullet = Asteroids.Bullet = function(game, options) {
    this.game = game;

    options.radius = Bullet.RADIUS;
    options.color = Bullet.COLOR;
    Asteroids.MovingObject.call(this, options);
  }

  Bullet.inherits(Asteroids.MovingObject);

  Bullet.prototype.hitAsteroids = function () {
    var bullet = this;
    var game = this.game

    game.asteroids.forEach(function(asteroid) {
      if (asteroid.isCollidedWith(bullet)) {
      //  game.
      }
    })
  };

  Bullet.RADIUS = 2;
  Bullet.COLOR = "#abef86";
}
)(this);
