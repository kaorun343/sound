"use strict";
import {SineWave} from "../waves/sine";
import {Basis} from "./basis";

export class Sine extends Basis {

  constructor() {
    super();
    this.wave = new SineWave(440);
  }
}
