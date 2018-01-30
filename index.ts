import 'source-map-support/register';

import * as assert from 'assert';
import { chunk, zip } from './utils';

const array = [1, 2, 3, 4, 5, 6, 7];

const chunkResult = chunk(array, 3);
const chunkExpected = [
  [1, 2, 3],
  [4, 5, 6],
  [7]
];
assert.deepEqual(chunkResult, chunkExpected);

const zipResult = zip(chunkResult);
const zipExpected = [
  [1, 4, 7],
  [2, 5],
  [3, 6]
];
assert.deepEqual(zipResult, zipExpected);

