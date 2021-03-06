"use strict";
import {sampling} from "../constants";

export class TriangleWave implements Wave {
  private time = -1;

  constructor(public frequency: number) {
  }

  next() {
    this.time++;
    if (this.frequency * this.time > sampling) {
      this.time = 0;
    }
    if (2 * this.frequency * this.time < sampling) {
      return -1 + (4 * this.frequency * this.time / sampling);
    } else {
      return 3 - (4 * this.frequency * this.time / sampling);
    }
  }
}
