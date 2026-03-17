import {assert, test} from 'vitest';
import {foo} from '../src/index.ts';

test('index', () => {
  assert.equal(foo(), 2);
});
