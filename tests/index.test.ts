import areObjectsEqual from '../src';

// console.log(areObjectsEqual(1, 1));
// console.log(areObjectsEqual(1, 2));
// console.log(areObjectsEqual(1, '2'));
// console.log(areObjectsEqual(false, false));
// console.log(areObjectsEqual(NaN, NaN));
// console.log(areObjectsEqual(
//   { a: 2, c: [3, 2, 1, { c: 3 }]}, 
//   { a: 2, c: [3, 2, 1, { c: 3 }]},
// ));

test('Should compare primitives with the same type', () => {
  expect(areObjectsEqual(1, 1)).toBe(true);
  expect(areObjectsEqual('String', 'String')).toBe(true);
  expect(areObjectsEqual(true, true)).toBe(true);
  expect(areObjectsEqual(1, -1)).toBe(false);
  expect(areObjectsEqual('String', 'string')).toBe(false);
  expect(areObjectsEqual(true, false)).toBe(false);
});

test('Should compare primitives with different types', () => {
  expect(areObjectsEqual(1, '1')).toBe(false);
  expect(areObjectsEqual(false, 0)).toBe(false);
  expect(areObjectsEqual('', 0)).toBe(false);
});

test('Should compare nulls and undefineds', () => {
  expect(areObjectsEqual(null, null)).toBe(true);
  expect(areObjectsEqual(undefined, undefined)).toBe(true);
  expect(areObjectsEqual(null, undefined)).toBe(false);
});

test('Should compare arrays', () => {
  expect(areObjectsEqual([1, 2, -1, 4], [1, 2, -1, 4])).toBe(true);
  expect(areObjectsEqual([1, 2, -1, 4], [1, 2, -1, 5])).toBe(false);
});

test('Should compare objects', () => {
  expect(areObjectsEqual({ a: 2, b: 3 }, { a: 2, b: 3 })).toBe(true);
  expect(areObjectsEqual({ a: 2, b: 3 }, { a: 2, b: 2 })).toBe(false);
});

test('Should not differ objects by amount of keys', () => {
  const a = {
    b: undefined,
    c: 2,
  };

  const b = { c: 2 };

  expect(areObjectsEqual(a, b)).toBe(true);
});

test('Should compare nested arrays', () => {
  expect(areObjectsEqual([[1], [1, 2]], [[1], [1, 2]])).toBe(true);
  expect(areObjectsEqual([[1], [1, 2]], [[1], 1, 2])).toBe(false);
})

test('Should compare nested objects', () => {
  expect(areObjectsEqual({ a: 2, b: { c: 3 } }, { a: 2, b: { c: 3 } })).toBe(true);
  expect(areObjectsEqual({ a: 2, b: { c: 3 } }, { a: 2, b: 3 })).toBe(false);
})

test('Should compare objects with arrays', () => {
  const a = { b: [1, 2, 3] };
  const b = { b: [1, 2, 3] };
  const c = { b: [1, 2] };

  expect(areObjectsEqual(a, b)).toBe(true);
  expect(areObjectsEqual(a, c)).toBe(false);
});

test('Should compare arrays with objects', () => {
  const a = [{ a: 1, b: 2 }];
  const b = [{ a: 1, b: 2 }];
  const c = [{ a: 1, b: 3 }];

  expect(areObjectsEqual(a, b)).toBe(true);
  expect(areObjectsEqual(a, c)).toBe(false);
});

test('Should compare NaN', () => {
  expect(areObjectsEqual(NaN, NaN)).toBe(true);
  expect(areObjectsEqual(NaN, false)).toBe(false);
  expect(areObjectsEqual(NaN, null)).toBe(false);
  expect(areObjectsEqual(NaN, 0)).toBe(false);
  expect(areObjectsEqual(NaN, undefined)).toBe(false);
});
