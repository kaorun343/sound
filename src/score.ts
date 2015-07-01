import Note from './note';
import {sampling} from './constants';

enum Status {
  leng,
  octave,
  gate,
  velocity,
  note,
  note_length,
  note_gate
}

export default class Score {

  private score: Note[] = [];
  private index = -1;

  constructor(score: string) {
    this.parse(score);
  }

  next() {
    this.index++;
    return this.score[this.index];
  }

  get done() {
    return this.index == this.score.length -1;
  }

  private parse(score: string) {

    var length = 4;
    var octave = 3;
    var gate = 100;
    var velocity = 127;
    var tempo = 180;

    var list = { c: 0, d: 2, e: 4, f: 5, g: 7, a: 9, b: 11 };

    function pitch(p: string): number {
      return octave * 12 + list[p];
    }

    function calcLength(): number {
      return sampling * 60 * 4 / length / tempo;
    }

    var s = Status.leng;

    for (let i = 0; i < score.length; i++) {
      var c = score[i];
      switch (c) {
        case "a" :
        case "b" :
        case "c" :
        case "d" :
        case "e" :
        case "f" :
        case "g" :
          this.score.push(new Note(pitch(c), calcLength(), gate, velocity, 1));
          s = Status.note;
          break;
        case "r" :
          this.score.push(Note.rest(calcLength()));
          break;
        case "l" :
          s = Status.leng;
          length = 0;
          break;
        case "o" :
          s = Status.octave;
          octave = 0;
          break;
        case "q" :
          s = Status.gate;
          gate = 0;
          break;
        case "v" :
          s = Status.velocity;
          velocity = 0;
          break;
        case "^" :
          this.score[this.score.length - 1].multiple += 1;
          break;
        case "." :
          this.score[this.score.length -1].length *= 1.5;
          break;
        case "0" :
        case "1" :
        case "2" :
        case "3" :
        case "4" :
        case "5" :
        case "6" :
        case "7" :
        case "8" :
        case "9" :
          var n = parseInt(c)
          switch (s) {
            case Status.leng :
              length = length * 10 + n;
              break;
            case Status.octave :
              octave = octave * 10 + n;
              break;
            case Status.gate :
              gate = gate * 10 + n;
              break;
            case Status.velocity :
              velocity = velocity * 10 + n;
              break;
            case Status.note :
              this.score[this.score.length -1].length *= length/n;
              s = Status.note_length;
              break;
          }
          break;
        case "+" :
          this.score[this.score.length -1].pitch += 1;
          break;
        case "-" :
          this.score[this.score.length -1].pitch -= 1;
          break;
        case ">" :
          octave += 1;
          break;
        case "<" :
          octave -= 1;
          break;
        default:
          break;
      }
    }
  }
}
