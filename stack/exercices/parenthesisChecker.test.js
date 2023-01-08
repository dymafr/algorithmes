import parenthesisChecker from './parenthesisChecker.js';

describe('##Avec une parenthèse ouvrante ou fermante', () => {
  test('avec une seule parenthèse retourne false', () => {
    expect(parenthesisChecker('(')).toBe(false);
  });
  test('avec une seule accolade retourne false', () => {
    expect(parenthesisChecker('{')).toBe(false);
  });
  test('avec un seul crochet retourne false', () => {
    expect(parenthesisChecker('[')).toBe(false);
  });
  test('avec une seule parenthèse fermante retourne false', () => {
    expect(parenthesisChecker(')')).toBe(false);
  });
  test('avec une seule accolade fermante retourne false', () => {
    expect(parenthesisChecker('}')).toBe(false);
  });
  test('avec un seul crochet fermant retourne false', () => {
    expect(parenthesisChecker(']')).toBe(false);
  });
});

describe('##Avec une parenthèse ouvrante et fermante', () => {
  test('avec deux parenthèses retourne true', () => {
    expect(parenthesisChecker('()')).toBe(true);
  });
  test('avec deux accolades retourne true', () => {
    expect(parenthesisChecker('{}')).toBe(true);
  });
  test('avec deux crochets retourne true', () => {
    expect(parenthesisChecker('[]')).toBe(true);
  });
});

describe('##Avec deux parenthèses ouvrantes et fermantes imbriquées', () => {
  test('avec deux parenthèses imbriquées retourne true', () => {
    expect(parenthesisChecker('(())')).toBe(true);
  });
  test('avec deux accolades imbriquées retourne true', () => {
    expect(parenthesisChecker('{{}}')).toBe(true);
  });
  test('avec deux crochets imbriqués retourne true', () => {
    expect(parenthesisChecker('[[]]')).toBe(true);
  });
});

describe('##Avec les mauvaises parenthèses ouvrantes et fermantes', () => {
  test('avec une parenthèse ouvrante et une accolade fermante retourne false', () => {
    expect(parenthesisChecker('(}')).toBe(false);
  });
  test('avec une parenthèse ouvrante et un crochet fermant retourne false', () => {
    expect(parenthesisChecker('(]')).toBe(false);
  });
  test('avec une accolade ouvrante et une parenthèse fermante retourne false', () => {
    expect(parenthesisChecker('{)')).toBe(false);
  });
});

describe('##Avec les mauvaises parenthèses ouvrantes et fermantes imbriquées', () => {
  test('avec deux parenthèses mal imbriquées ({)} retourne false', () => {
    expect(parenthesisChecker('({)}')).toBe(false);
  });
  test('avec deux accolades mal imbriquées {(}) retourne false', () => {
    expect(parenthesisChecker('{(})')).toBe(false);
  });
  test('avec deux crochets mal imbriqués [{]} retourne false', () => {
    expect(parenthesisChecker('[{]}')).toBe(false);
  });
});

describe('##Avec trois parenthèses ouvrantes et fermantes identiques imbriquées', () => {
  test('avec trois parenthèses imbriquées retourne true', () => {
    expect(parenthesisChecker('((()))')).toBe(true);
  });
  test('avec trois accolades imbriquées retourne true', () => {
    expect(parenthesisChecker('{{{}}}')).toBe(true);
  });
  test('avec trois crochets imbriqués retourne true', () => {
    expect(parenthesisChecker('[[[]]]')).toBe(true);
  });
});

describe('##Avec trois parenthèses ouvrantes et fermantes différentes imbriquées', () => {
  test('avec trois parenthèses imbriquées ({[]}) retourne true', () => {
    expect(parenthesisChecker('({[]})')).toBe(true);
  });
  test('avec trois accolades imbriquées {[()]} retourne true', () => {
    expect(parenthesisChecker('{[()]}')).toBe(true);
  });
  test('avec trois crochets imbriqués [{()}] retourne true', () => {
    expect(parenthesisChecker('[{()}]')).toBe(true);
  });
});

describe('##Avec trois parenthèses ouvrantes et fermantes mal imbriquées', () => {
  test('avec trois parenthèses mal imbriquées ({())} retourne false', () => {
    expect(parenthesisChecker('({())}')).toBe(false);
  });
  test('avec trois accolades mal imbriquées {{(})} retourne false', () => {
    expect(parenthesisChecker('{{(})}')).toBe(false);
  });
  test('avec trois crochets mal imbriqués [[{]}] retourne false', () => {
    expect(parenthesisChecker('[[{]}]')).toBe(false);
  });
});
