import { QueueLL } from '../QueueLL';
// import reverseQueue from './reverseQueueRecursive';
import reverseQueue from './reverseQueueStack';

describe("##Suite de tests pour l'inversion d'une file", () => {
  let queue = null;

  beforeEach(() => {
    queue = new QueueLL();
  });

  describe('#Si la file est vide', () => {
    test('la file reste vide', () => {
      reverseQueue(queue);
      expect(queue.isEmpty()).toBe(true);
    });
  });

  describe('#Si la file fait un élément', () => {
    test("l'élément reste présent", () => {
      queue.enqueue(1);
      reverseQueue(queue);
      expect(queue.peek()).toBe(1);
    });
  });
});

describe('##Tests randomisés', () => {
  let queue,
    reversedQueue,
    reversedArray,
    array = null;

  beforeEach(() => {
    array = Array(10)
      .fill()
      .map(() => Math.round(Math.random() * 20));
    queue = new QueueLL();
    array.forEach((el) => {
      queue.enqueue(el);
    });
    reversedArray = [...array].reverse();
    reversedQueue = new QueueLL();
    reversedArray.forEach((el) => {
      reversedQueue.enqueue(el);
    });
  });

  describe('#Tests dynamiques randomisés', () => {
    for (let i = 0; i < 20; i++) {
      test('la file est bien inversée', () => {
        expect(reverseQueue(queue)).toStrictEqual(reversedQueue);
      });
    }
  });
});
