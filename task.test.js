const countSmileys = require('./task');

test('All faces are valid', () => {
  expect(countSmileys([':)', ':D', ';-D', ':~)'])).toBe(4);
});

test('All faces are invalid', () => {
  expect(countSmileys([';(', ':>', ':}', ';]', ':$', ':/'])).toBe(0);
});

test('Incorrect order of face elements', () => {
  expect(countSmileys([')-:', '(:'])).toBe(0);
});

test('Faces with invalid noses', () => {
  expect(countSmileys([':/D', ';*D', ';o(', ';oD'])).toBe(0);
});

test('Faces with valid noses', () => {
  expect(countSmileys([';-D', ';~D', ';-('])).toBe(2);
});

test('Both valid and invalid faces (1)', () => {
  expect(countSmileys([';*', ':$', ';-D', ';(', ':>'])).toBe(1);
});

test('Both valid and invalid faces (2)', () => {
  expect(countSmileys([';D', ';-D', ';~)', ':~D', ':~(', ';oD', ';~('])).toBe(4);
});

