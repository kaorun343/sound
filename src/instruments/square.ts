import SquareWave from '../waves/square';
import Basis from './basis';

export default class Square extends Basis {

  constructor() {
    super();
    this.wave = new SquareWave(440);
  }
}
