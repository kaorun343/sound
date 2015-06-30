/// <reference path="../typings/wave.d.ts"/>
import {sampling} from '../constants';

export default class SineWave implements Wave {
  private time: number = -1;
  constructor(private frequency: number) {

  }

  next() {
    this.time++;
    return Math.sin(2 * Math.PI * this.frequency * this.time / sampling);
  }

  reset() {
    this.time = -1;
  }
}