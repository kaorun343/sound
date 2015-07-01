import Part from './part';
import Manager from './manager';
import Sine from './instruments/sine';
import Sawtooth from './instruments/sawtooth';
import Triangle from './instruments/triangle';
import Square from './instruments/square';
import {amplitude, bit} from './constants';

var manager = new Manager([
  new Part(new Triangle(), "l8cdefedcrefgagfer")
]);

manager.start((() => {
  if (bit > 8) {
    return s => { console.log(s)};
  } else {
    return s => { console.log(s + amplitude)};
  }
})());
