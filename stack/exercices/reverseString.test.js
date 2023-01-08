import { Stack } from '../StackLL.js';
import reverseString from './reverseString.js';

const characters =
  'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789éèàùâêîôûäëïöüçÉÈÀÙÂÊÎÔÛÄËÏÖÜÇ';

function generateRandomString() {
  let result = ' ';
  const length = Math.floor(Math.random() * 100);
  const charactersLength = characters.length;
  for (let i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }

  return result;
}

describe('##Inverser une chaîne de caractères', () => {
  let stack;
  let string;
  let reversedString;

  beforeEach(() => {
    stack = new Stack();
  });

  beforeEach(() => {
    string = generateRandomString();
    reversedString = string.split('').reverse().join('');
  });

  describe('#Tests dynamiques randomisés', () => {
    for (let i = 0; i < 100; i++) {
      test('la chaîne est inversée', () => {
        expect(reverseString(string)).toStrictEqual(reversedString);
      });
    }
  });
});
