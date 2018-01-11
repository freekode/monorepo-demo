import { Util } from 'ui-util';
import * as _ from 'lodash';

export class FavouriteTest {
  go(): string {
    console.log('FavouriteTest working')

    let util = new Util();

    console.log('is passed =', util.test('test'))

    return 'working'
  }

  test() {
    try {
      console.log(_.compact([0, 1, false, 2, '', 3]));
    } catch(e) {
      console.log('exception, oops, thats wrong');
    }

    try {
      console.log(_.chunk(['a', 'b', 'c', 'd'], 2));
    } catch(e) {
      console.log('exception, but that is good');
    }
  }
}
