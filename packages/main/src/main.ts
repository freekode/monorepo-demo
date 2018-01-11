import { FavouriteTest } from 'fav';
import * as _ from 'lodash';

console.log('Start')

let favourite = new FavouriteTest();

let out = favourite.go();
console.log('out =', out)

console.log(_.chunk(['a', 'b', 'c', 'd'], 2));

favourite.test();
