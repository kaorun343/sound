import SawtoothWave from '../waves/sawtooth';
import Basis from './basis';

export default class Sawtooth extends Basis {

  constructor() {
    super();
    this.wave = new SawtoothWave(440);
  }
}
