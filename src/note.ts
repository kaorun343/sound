"use strict";
export class Note {
  constructor(
    public pitch: number,
    public length: number,
    public gate: number,
    public velocity: number,
    public multiple: number
  ) {}

  get frequency() {
    return 440 * Math.pow(2, (this.pitch -33)/12);
  }

  static rest(length) {
    return new Note(0, length, 0, 0, 1);
  }
}
