const countSmileys = require('./task');

describe("Valid values", () => {
  test('Basic combinations of eyes, noses and mouths', () => {
    expect(countSmileys([':)', ':D', ';-D', ':~)'])).toBe(4);
  });

  test('Faces with valid noses', () => {
    expect(countSmileys([';-D', ';~D', ';-('])).toBe(2);
  });

  test('Faces without noses', () => {
    expect(countSmileys([';D', ';D', ';('])).toBe(2);
  });

  test('Unicode input', () => {
    expect(countSmileys(['\u003a\u002d\u0029', '\u003a\u002d\u0028'])).toBe(1);
  });
})

describe("Invalid values", () => {
  test('Some types of invalid values', () => {
    expect(countSmileys([';(', ':-*', ':>', ':}', ';]', ':$', ':/', ':o'])).toBe(0);
  });

  test('Incorrect order of face elements', () => {
    expect(countSmileys([')-:', '(:', '(:'])).toBe(0);
  });

  test('Faces with invalid noses', () => {
    expect(countSmileys([':/D', ';*D', ';o(', ';oD'])).toBe(0);
  });
})

describe("Both valid and invalid faces", () => {
  test('Should return 1 valid (against 4 invalid)', () => {
    expect(countSmileys([';*', ':$', ';-D', ';(', ':>'])).toBe(1);
  });

  test('Should return 4 valid (against 3 invalid)', () => {
    expect(countSmileys([';D', ';-D', ';~)', ':~D', ':~(', ';oD', ';('])).toBe(4);
  });
})

describe("Wrong input", () => {
  test('Empty elements', () => {
    expect(countSmileys(['', ' '])).toBe(0);
  });
  
  test('Strings values', () => {
    expect(countSmileys([':', '-', ')', '-)',')-)','::)', 'abc'])).toBe(0);
  });

  test('Wrong types', () => {
    expect(countSmileys([1, [1, 2, 3], (1, 2), () => 123], null, undefined)).toBe(0);
  });
  
 
  
})


