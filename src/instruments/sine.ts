/// <reference path="../typings/instrument.d.ts"/>

import SineWave from '../waves/sine';
import {sampling} from '../constants';

export default class Sine implements Instrument {

  private wave = new SineWave(440);
  private time = 0;
  private max: number;
  public done = false;
  private length = 1;

  constructor() {
    this.max = sampling * this.length;
  }

  next() {
    this.time ++;
    if (this.time > this.max) {
      this.done = true;
    }
    return this.wave.next();
  }

  reset() {
    this.time = 0;
  }
}
