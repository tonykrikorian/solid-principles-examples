/* eslint-disable prettier/prettier */
import S1 from '../models/classes/s1.class';
import S2 from '../models/classes/s2.class';
import T from '../models/classes/t.class';

export default class MainService {
  public main() {
    let t: T = new S1();
    console.log(t.getName());

    t = new S2();
    console.log(t.getName());
  }
}
