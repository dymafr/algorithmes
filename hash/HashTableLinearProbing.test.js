// Table de hachage avec résolution des collisions par adressage linéaire
// La suppression est gérée de manière paresseuse (lazy deletion)
// Les clés sont des chaînes de caractères ou des nombres
// Les valeurs peuvent être de n'importe quel type

import HashTable from './HashTableLinearProbing.js';

describe('##Suite de tests HashTable', () => {
  test('Une table nouvellement créée doit être vide', () => {
    const table = new HashTable();
    expect(table.isEmpty()).toBe(true);
    expect(table.size).toBe(0);
  });

  test('Le hachage génère un nombre', () => {
    const table = new HashTable();
    expect(typeof table.hash('test')).toBe('number');
    expect(typeof table.hash('test2')).toBe('number');
    expect(typeof table.hash(42)).toBe('number');
    expect(typeof table.hash(21)).toBe('number');
  });

  test('Le hachage génère un nombre différent pour chaque clé', () => {
    const table = new HashTable();
    expect(table.hash('test')).not.toBe(table.hash('test2'));
    expect(table.hash(42)).not.toBe(table.hash(21));
  });

  test('Une table doit pouvoir ajouter un élément avec une clé de type chaîne de caractères', () => {
    const table = new HashTable();
    table.set('test', 42);
    expect(table.isEmpty()).toBe(false);
    expect(table.size).toBe(1);
  });

  test('Une table doit pouvoir ajouter un élément avec une clé de type nombre', () => {
    const table = new HashTable();
    table.set(42, 21);
    expect(table.isEmpty()).toBe(false);
    expect(table.size).toBe(1);
  });

  test('Une table doit pouvoir ajouter plusieurs éléments', () => {
    const table = new HashTable();
    table.set('test', 42);
    table.set('test2', 21);
    expect(table.isEmpty()).toBe(false);
    expect(table.size).toBe(2);
  });

  test('Une table doit pouvoir récupérer un élément', () => {
    const table = new HashTable();
    table.set('test', 42);
    expect(table.get('test')).toBe(42);
  });

  test('Une table doit pouvoir récupérer plusieurs éléments', () => {
    const table = new HashTable();
    table.set('test', 42);
    table.set('test2', 21);
    expect(table.get('test')).toBe(42);
    expect(table.get('test2')).toBe(21);
  });

  test('Une table doit pouvoir supprimer un élément', () => {
    const table = new HashTable();
    table.set('test', 42);
    table.delete('test');
    expect(table.isEmpty()).toBe(true);
    expect(table.size).toBe(0);
  });

  test('Une table doit pouvoir supprimer plusieurs éléments', () => {
    const table = new HashTable();
    table.set('test', 42);
    table.set('test2', 21);
    table.delete('test');
    table.delete('test2');
    expect(table.isEmpty()).toBe(true);
    expect(table.size).toBe(0);
  });

  test('Une table doit pouvoir supprimer un élément et récupérer un autre', () => {
    const table = new HashTable();
    table.set('test', 42);
    table.set('test2', 21);
    table.delete('test');
    expect(table.get('test2')).toBe(21);
    expect(table.get('test')).toBe(undefined);
  });

  test('Une table doit pouvoir supprimer plusieurs éléments', () => {
    const table = new HashTable();
    table.set('test', 42);
    table.set('test2', 21);
    table.delete('test');
    table.delete('test2');
    expect(table.isEmpty()).toBe(true);
    expect(table.size).toBe(0);
  });

  test('Cette table doit pouvoir réassigner une valeur pour la même clé', () => {
    const table = new HashTable();
    table.set('test', 42);
    expect(table.get('test')).toBe(42);
    table.set('test', 21);
    expect(table.get('test')).toBe(21);
    expect(table.size).toBe(1);
  });

  test("Cette table doit pouvoir gérer les collisions d'éléments", () => {
    const table = new HashTable();
    table.set('ad', 42);
    table.set(197, 21);
    table.set('Å', 12);
    expect(table.get('ad')).toBe(42);
    expect(table.get(197)).toBe(21);
    expect(table.get('Å')).toBe(12);
    expect(table.size).toBe(3);
  });

  test('Cette table doit pouvoir gérer les collisions de deux éléments et les supprimer', () => {
    const table = new HashTable();
    table.set('ad', 42);
    table.set(197, 21);
    table.delete('ad');
    table.delete(197);
    expect(table.get('ad')).toBe(undefined);
    expect(table.get(197)).toBe(undefined);
    expect(table.size).toBe(0);
  });

  test('Cette table doit pouvoir gérer les collisions de trois éléments et les supprimer', () => {
    const table = new HashTable();
    table.set('ad', 42);
    table.set(197, 21);
    table.set('Å', 12);
    table.delete('ad');
    table.delete(197);
    table.delete('Å');
    expect(table.get('ad')).toBe(undefined);
    expect(table.get(197)).toBe(undefined);
    expect(table.get('Å')).toBe(undefined);
    expect(table.size).toBe(0);
  });

  test('Cette table doit pouvoir gérer successivement des ajouts et suppressions avec collisions', () => {
    const table = new HashTable();
    table.set('ad', 42);
    expect(table.get('ad')).toBe(42);
    table.set(197, 21);
    expect(table.get(197)).toBe(21);
    table.set('Å', 12);
    expect(table.get('Å')).toBe(12);
    table.delete('ad');
    expect(table.get('ad')).toBe(undefined);
    table.set('ad', 42);
    expect(table.get('ad')).toBe(42);
    table.delete(197);
    expect(table.get(197)).toBe(undefined);
    table.set(197, 21);
    expect(table.get(197)).toBe(21);
    table.delete('Å');
    expect(table.get('Å')).toBe(undefined);
    table.set('Å', 12);
    expect(table.get('Å')).toBe(12);
    table.delete('ad');
    expect(table.get('ad')).toBe(undefined);
    expect(table.size).toBe(2);
  });

  test('Cette table doit pouvoir gérer les suppressions paresseuses', () => {
    const table = new HashTable();
    table.set('ad', 42);
    table.set(197, 21);
    table.delete('ad');
    table.get(197);
    expect(table.table[3].value).toBe(21);
  });

  test('Cette table doit pouvoir gérer les suppressions paresseuses', () => {
    const table = new HashTable();
    table.set('ad', 42);
    table.set(197, 21);
    table.set('Å', 12);
    table.delete('ad');
    table.delete(197);
    table.get('Å');
    expect(table.table[3].value).toBe(12);
  });
});
