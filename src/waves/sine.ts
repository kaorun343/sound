"use strict";
import {sampling} from "../constants";

export class SineWave implements Wave {
  private time: number = -1;

  constructor(public frequency: number) {
  }

  next() {
    this.time++;
    return Math.sin(2 * Math.PI * this.frequency * this.time / sampling);
  }
}
