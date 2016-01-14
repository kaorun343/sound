"use strict";
import {SquareWave} from "../waves/square";
import {Basis} from "./basis";

export class Square extends Basis {

  constructor() {
    super();
    this.wave = new SquareWave(440);
  }
}
