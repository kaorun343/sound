/// <reference path="../typings/instrument.d.ts"/>

import TriangleWave from '../waves/triangle';
import {sampling} from '../constants';

export default class Triangle implements Instrument {

  private wave = new TriangleWave(440);
  private time = 0;
  public done = false;
  private max: number;
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
