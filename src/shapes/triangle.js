import assign from "lodash/object/assign"
import { Moveable, Styleable } from "../mixins"
import Utils from '../utils'

class Triangle {

  constructor(x, y, x2, y2, x3, y3) {
    this.moveable();
    this.styleable();

    this.vars.x = x;
    this.vars.y = y;

    // Make variables relative to 0,0 as
    // x,y will be used in transform
    this.vars.x2 = x2 - x;
    this.vars.y2 = y2 - y;
    this.vars.x3 = x3 - x;
    this.vars.y3 = y3 - y;
  }

  copy(parent) {
    var copy = new Triangle();
    copy.vars.x2 = this.vars.x2;
    copy.vars.y2 = this.vars.y2;
    copy.vars.x3 = this.vars.x3;
    copy.vars.y3 = this.vars.y3;
    Utils.copyMixinVars(this, copy);
    Utils.groupLogic(copy, this.parent, parent);
    return copy;
  }

  scale(scalar) {
    this.scaleStyleable(scalar);
    this.vars.x2 *= scalar;
    this.vars.y2 *= scalar;
    this.vars.x3 *= scalar;
    this.vars.y3 *= scalar;
    return this;
  }

}

assign(Triangle.prototype, Moveable, Styleable, {type: "triangle"});

export default Triangle;
