"use strict";
import {Score} from "./score";
import {amplitude} from "./constants";

export class Part {
  private score: Score;

  constructor(public instrument: Instrument, score: string) {
    this.score = new Score(score);
    this.instrument.reset(this.score.next());
  }

  next(): number {
    var value = this.instrument.next() * amplitude;
    if (this.instrument.done && !this.score.done) {
      this.instrument.reset(this.score.next());
    }
    return value;
  }

  get done(): boolean {
    return this.instrument.done && this.score.done;
  }
}
