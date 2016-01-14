"use strict";
import {SawtoothWave} from "../waves/sawtooth";
import {Basis} from "./basis";

export class Sawtooth extends Basis {

  constructor() {
    super();
    this.wave = new SawtoothWave(440);
  }
}
