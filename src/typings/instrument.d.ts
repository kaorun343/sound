interface Instrument {
  next(): number;
  done: boolean;
  reset(note: {frequency: number, length: number, velocity: number}): void;
}
