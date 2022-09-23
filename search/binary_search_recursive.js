import arrayGenerator from '../sort/arrayGenerator.js';

function recursive_binary_search(
  recherche,
  tableau,
  debut = 0,
  fin = tableau.length - 1
) {
  if (debut > fin) {
    return null;
  } else {
    const mid = Math.floor((debut + fin) / 2);
    if (tableau[mid] === recherche) {
      return mid;
    } else if (tableau[mid] > recherche) {
      return recursive_binary_search(recherche, tableau, debut, mid - 1);
    } else {
      return recursive_binary_search(recherche, tableau, mid + 1, fin);
    }
  }
}

const tableau = arrayGenerator(20, 500).sort((a, b) => a - b);
const recherche = tableau[Math.round(Math.random() * 19)];

console.log('Tableau :', tableau);
console.log('Elément à trouver :', recherche);
console.log('Position :', recursive_binary_search(recherche, tableau));
