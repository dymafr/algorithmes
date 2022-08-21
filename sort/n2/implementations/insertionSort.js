import arrayGenerator from '../../arrayGenerator.js';

function insertionSort(tableau) {
  const n = tableau.length;

  for (let i = 1; i < n; i++) {
    let current = tableau[i];
    let j = i;
    while (j > 0 && current < tableau[j - 1]) {
      tableau[j] = tableau[j - 1];
      j--;
    }
    tableau[j] = current;
  }
  return tableau;
}

const tableauTrié = insertionSort(arrayGenerator(20, 200));
console.log(tableauTrié);
