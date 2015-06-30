/// <reference path="../typings/bundle.d.ts"/>
"use stricts";
import Part from './part';
import Manager from './manager';
import Sine from './instruments/sine';

var manager = new Manager([
  new Part(new Sine(1), "")
]);

manager.start((s: number) => {
  console.log(s);
});
