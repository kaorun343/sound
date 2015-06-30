/// <reference path="./typings/instrument.d.ts"/>
/// <reference path="../typings/bundle.d.ts"/>

import {amplitude} from './constants';
import fs = require('fs');

export default class Part {
  constructor(public instrument: Instrument, public score: string) {
  }

  next(): number {
    return this.instrument.next() * amplitude;
  }

  done(): boolean {
    return this.instrument.done;
  }

  static fromFile(instrument: Instrument, filename: string): Part {
    return new Part(instrument, fs.readFileSync(filename, 'UTF-8'));
  }
}
