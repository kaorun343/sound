/// <reference path="../typings/instrument.d.ts"/>

import SawtoothWave from '../waves/sawtooth';
import {sampling} from '../constants';

export default class Sawtooth implements Instrument {
  private wave = new SawtoothWave(440);
  private time = 0;
  private max : number;
  public done = false;
  private length = 1;

  constructor() {
    this.max = sampling * this.length;
  }

  next() {
    this.time++;
    if (this.time > this.max) {
      this.done = true;
    }
    return this.wave.next();
  }
}
