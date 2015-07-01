/// <reference path="../typings/wave.d.ts"/>
import {sampling} from '../constants';

export default class SawtoothWave implements Wave {
  private time: number = -1;

  constructor(public frequency: number) {

  }

  next() {
    this.time++;
    if (this.frequency * this.time > sampling) {
      this.time = 0;
    }
    return 1 - (2 * this.frequency * this.time / sampling);
  }
}
