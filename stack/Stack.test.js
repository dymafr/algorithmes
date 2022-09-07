import { Stack } from './Stack.js';
import { StackArray } from './StackArray.js';

describe('##Suite de tests pour les piles', () => {
  let stack;

  beforeEach(() => {
    // stack = new Stack();
    stack = new StackArray();
  });

  it('une pile vide a une taille de 0 et est vide', () => {
    expect(stack.getSize()).toBe(0);
    expect(stack.isEmpty()).toBe(true);
  });

  it('le push fonctionne', () => {
    stack.push(1);
    expect(stack.getSize()).toBe(1);
    stack.push(2);

    expect(stack.isEmpty()).toBe(false);
    expect(stack.getSize()).toBe(2);
  });

  it('le pop fonctionne', () => {
    stack.push(1);
    stack.push(2);
    stack.push(3);
    expect(stack.pop()).toBe(3);
    expect(stack.pop()).toBe(2);
    expect(stack.pop()).toBe(1);

    expect(stack.pop()).toBe(null);
    expect(stack.getSize()).toBe(0);
  });

  it('la logique Last In First Out fonctionne', () => {
    stack.push(1);
    stack.push(2);
    stack.push(3);
    expect(stack.pop()).toBe(3);
    expect(stack.pop()).toBe(2);
    expect(stack.pop()).toBe(1);

    expect(stack.getSize()).toBe(0);
    expect(stack.pop()).toBe(null);
    expect(stack.getSize()).toBe(0);
  });

  it('le peek fonctionne', () => {
    expect(stack.peek()).toBe(null);

    stack.push(1);
    expect(stack.peek()).toBe(1);

    stack.push(2);
    expect(stack.peek()).toBe(2);

    stack.pop();
    expect(stack.peek()).toBe(1);
  });

  it('retourne la bonne taille', () => {
    expect(stack.getSize()).toBe(0);
    stack.push(1);
    expect(stack.getSize()).toBe(1);
    stack.push(2);
    expect(stack.getSize()).toBe(2);
    stack.push(3);
    expect(stack.getSize()).toBe(3);

    stack.clear();
    expect(stack.isEmpty()).toBe(true);
    expect(stack.getSize()).toBe(0);

    stack.push(1);
    stack.push(2);
    stack.pop();
    expect(stack.getSize()).toBe(1);

    stack.pop();
    expect(stack.getSize()).toBe(0);

    stack.pop();
    expect(stack.getSize()).toBe(0);
  });

  it('isEmpty fonctionne', () => {
    expect(stack.isEmpty()).toBe(true);
    stack.push(1);
    expect(stack.isEmpty()).toBe(false);
    stack.push(2);

    stack.clear();
    expect(stack.isEmpty()).toBe(true);
  });

  it('vider la stack fonctionne', () => {
    stack.clear();
    expect(stack.isEmpty()).toBe(true);

    stack.push(1);
    stack.push(2);

    stack.clear();
    expect(stack.isEmpty()).toBe(true);
  });
});
