(function(Rune) {

  var Vector = Rune.Vector = function(x, y) {

    this.x = x || 0;
    this.y = y || 0;

  };

  _.extend(Vector.prototype, {

    set: function(x, y) {
      this.x = x;
      this.y = y;
    },

    add : function(vec) {
      return new Rune.Vector(this.x + vec.x, this.y + vec.y);
    },

    sub: function(vec) {
      return new Rune.Vector(this.x - vec.x, this.y - vec.y);
    },

    multiply: function(scalar) {
      return new Rune.Vector(this.x * scalar, this.y * scalar);
    },

    divide: function(scalar) {
      var vec = new Rune.Vector(0, 0);
      if(scalar) {
        vec.x = this.x / scalar;
        vec.y = this.y / scalar;
      }
      return vec;
    },

    distance: function(vec) {
      return Math.sqrt(this.distanceSquared(vec));
    },

    distanceSquared: function(vec) {
      var dx = this.x - vec.x;
      var dy = this.y - vec.y;
      return dx * dx + dy * dy;
    },

    lerp: function(vec, scalar) {
      var x = (vec.x - this.x) * scalar + this.x;
      var y = (vec.y - this.y) * scalar + this.y;
      return new Rune.Vector(x, y);
    },

    dot : function(vec) {
      return this.x * vec.x + this.y * vec.y;
    },

    length: function() {
      return Math.sqrt(this.lengthSquared());
    },

    lengthSquared: function() {
      return this.x * this.x + this.y * this.y;
    },

    normalize: function() {
      return this.divide(this.length());
    },

    rotation: function() {
      return Rune.degrees(Math.atan2(this.y, this.x));
    },

    rotate: function(degrees) {
      var rad = Rune.radians(this.rotation() + degrees);
      var len = this.length();
      var x = Math.cos(rad) * len;
      var y = Math.sin(rad) * len;
      return new Rune.Vector(x, y);
    },

    copy: function() {
      return new Rune.Vector(this.x, this.y);
    },

    toString: function() {
      return "(x: " + this.x + ", y: " + this.y + ")";
    }

  });

})(Rune);