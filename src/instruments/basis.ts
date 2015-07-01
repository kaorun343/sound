/// <reference path="../typings/instrument.d.ts"/>
/// <reference path="../typings/wave.d.ts"/>

import Note from '../note';

export default class Basis implements Instrument {
  protected wave: Wave;
  private time = 0;
  private length = 1;
  private velocity: number;

  set frequency(frequency: number) {
    this.wave.frequency = frequency;
  }

  next() {
    this.time++;
    return this.wave.next() * this.velocity / 128;
  }

  get done() {
    return this.time > this.length;
  }

  reset(note: Note) {
    this.time %= 1;
    this.length = note.length;
    this.frequency = note.frequency;
    this.velocity = note.velocity;
  }
}
