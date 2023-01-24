// Table de hachage basique sans aucune gestion des collisions
// Les collisions sont gérées en remplaçant la valeur
// Les clés sont des chaînes de caractères ou des nombres
// Les valeurs peuvent être de n'importe quel type

import HashTable from './HashTableBasic';

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
    expect(table.get('test')).toBe(null);
  });

  test('Cette table ne doit pas gérer les collisions et doit remplacer la valeur', () => {
    const table = new HashTable();
    table.set('test', 42);
    table.set('test', 21);
    expect(table.get('test')).toBe(21);
    expect(table.size).toBe(1);
  });
});
