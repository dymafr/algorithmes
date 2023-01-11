import { QueueLL } from './QueueLL.js';
import { QueueArray } from './QueueArray.js';

describe('##Suite de tests pour les piles', () => {
  let queue;

  beforeEach(() => {
    // queue = new QueueLL();
    queue = new QueueArray(4);
  });

  it('une pile vide a une taille de 0 et est vide', () => {
    expect(queue.getSize()).toBe(0);
    expect(queue.isEmpty()).toBe(true);
  });

  it('enqueue fonctionne', () => {
    queue.enqueue(1);
    expect(queue.getSize()).toBe(1);
    queue.enqueue(2);

    expect(queue.isEmpty()).toBe(false);
    expect(queue.getSize()).toBe(2);
  });

  it('dequeue fonctionne', () => {
    queue.enqueue(1);
    queue.enqueue(2);
    queue.enqueue(3);
    expect(queue.dequeue()).toBe(1);
    expect(queue.dequeue()).toBe(2);
    expect(queue.dequeue()).toBe(3);

    expect(queue.dequeue()).toBe(null);
    expect(queue.getSize()).toBe(0);
  });

  it('la logique First in Last Out fonctionne', () => {
    queue.enqueue(1);
    queue.enqueue(2);
    queue.enqueue(3);
    expect(queue.dequeue()).toBe(1);
    expect(queue.dequeue()).toBe(2);
    expect(queue.dequeue()).toBe(3);

    expect(queue.getSize()).toBe(0);
    expect(queue.dequeue()).toBe(null);
    expect(queue.getSize()).toBe(0);
  });

  it('le peek fonctionne', () => {
    expect(queue.peek()).toBe(null);

    queue.enqueue(1);
    expect(queue.peek()).toBe(1);

    queue.enqueue(2);
    expect(queue.peek()).toBe(1);

    queue.dequeue();
    expect(queue.peek()).toBe(2);
  });

  it('retourne la bonne taille', () => {
    expect(queue.getSize()).toBe(0);
    queue.enqueue(1);
    expect(queue.getSize()).toBe(1);
    queue.enqueue(2);
    expect(queue.getSize()).toBe(2);
    queue.enqueue(3);
    expect(queue.getSize()).toBe(3);

    queue.clear();
    expect(queue.isEmpty()).toBe(true);
    expect(queue.getSize()).toBe(0);

    queue.enqueue(1);
    queue.enqueue(2);
    queue.dequeue();
    expect(queue.getSize()).toBe(1);

    queue.dequeue();
    expect(queue.getSize()).toBe(0);

    queue.dequeue();
    expect(queue.getSize()).toBe(0);

    queue.enqueue(1);
    queue.enqueue(2);
    queue.enqueue(3);
    queue.enqueue(4);
    queue.dequeue();
    queue.enqueue(5);
    expect(queue.getSize()).toBe(4);

    queue.dequeue();
    queue.dequeue();
    queue.dequeue();
    queue.dequeue();
    expect(queue.getSize()).toBe(0);

    queue.enqueue(1);
    queue.enqueue(2);
    queue.enqueue(3);
    queue.enqueue(4);
    queue.dequeue();
    queue.dequeue();
    expect(queue.getSize()).toBe(2);
  });

  it('isEmpty fonctionne', () => {
    expect(queue.isEmpty()).toBe(true);
    queue.enqueue(1);
    expect(queue.isEmpty()).toBe(false);
    queue.enqueue(2);

    queue.clear();
    expect(queue.isEmpty()).toBe(true);
  });

  it('vider la queue fonctionne', () => {
    queue.clear();
    expect(queue.isEmpty()).toBe(true);

    queue.enqueue(1);
    queue.enqueue(2);

    queue.clear();
    expect(queue.isEmpty()).toBe(true);
  });
});
