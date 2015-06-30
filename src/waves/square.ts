/// <reference path="../typings/wave.d.ts"/>
import {sampling} from '../constants';

export default class SquareWave implements Wave {
  private time: number = -1;

  constructor(private frequency: number) {
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
