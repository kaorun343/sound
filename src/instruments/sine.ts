/// <reference path="../typings/instrument.d.ts"/>

import SineWave from '../waves/sinewave';
import {amplitude, sampling} from '../constants';

export default class Sine implements Instrument {

  private wave = new SineWave(440);
  private time = 0;
  private max: number;
  public done = false;

  constructor(private length: number) {
    this.max = sampling * length;
  }

  next(): number {
    this.time ++;
    if (this.time > this.max) {
      this.done = true;
    }
    return this.wave.next() * amplitude;
  }

  reset() {
    this.time = 0;
  }
}
