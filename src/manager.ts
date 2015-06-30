import Part from './part';

export default class Manager {

  private parts: Part[] = [];

  constructor(parts?: Part[]) {
    if (parts) this.parts = parts;
  }

  add(part: Part) {
    this.parts.push(part);
  }

  start(callback: (num: number) => void) {
    while (this.parts.length > 0) {
      callback(
        Math.round(
          this.parts
            .map(part => part.next())
            .reduce((s, n) => s + n)
        )
      );
      this.parts = this.parts.filter(part => !part.done());
    }
  }
}