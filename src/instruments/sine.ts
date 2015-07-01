import SineWave from '../waves/sine';
import Basis from './basis';

export default class Sine extends Basis {

  constructor() {
    super();
    this.wave = new SineWave(440);
  }
}
