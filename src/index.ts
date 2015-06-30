/// <reference path="../typings/bundle.d.ts"/>
"use stricts";
import Part from './part';
import Manager from './manager';
import Sine from './instruments/sine';
import Sawtooth from './instruments/sawtooth';
import {amplitude, bit} from './constants';

var manager = new Manager([
  new Part(new Sine(), "")
]);

manager.start((() => {
  if (bit > 8) {
    return s => { console.log(s)};
  } else {
    return s => { console.log(s + amplitude)};
  }
})());
