"use strict";
import {sampling} from "../constants";

export class SquareWave implements Wave {
  private time: number = -1;

  constructor(public frequency: number) {
  }

  next() {
    this.time++;
    if (this.frequency * this.time > sampling) {
      this.time = 0;
    }
    if (2 * this.frequency * this.time < sampling) {
      return 1;
    } else {
      return -1;
    }
  }
}
