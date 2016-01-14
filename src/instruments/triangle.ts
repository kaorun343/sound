"use strict";
import {TriangleWave} from "../waves/triangle";
import {Basis} from "./basis";

export class Triangle extends Basis {

  constructor() {
    super();
    this.wave = new TriangleWave(440);
  }
}
