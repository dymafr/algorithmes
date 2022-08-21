import arrayGenerator from '../../arrayGenerator.js';

function selectionSort(tableau) {
  let n = tableau.length;

  // On parcourt tout le tableau sauf le dernier élément
  // car il sera forcément trié lorsque nous aurons trié l'avant-dernier élément
  for (let i = 0; i < n - 1; i++) {
    // Nous sauvegardons l'index du plus petit élément :
    let minIndex = i;
    // Nous parcourons la partie du tableau pas encore triée :
    for (let j = i + 1; j < n; j++) {
      // Nous récupérons l'index de l'élément le plus petit :
      if (tableau[j] < tableau[minIndex]) {
        minIndex = j;
      }
    }
    // Si l'index de l'élément le plus petit est égal à l'itération en cours
    // nous n'avons pas à faire d'échanges (swap)
    if (minIndex != i) {
      // Sinon on fait un échange entre le plus petit élément et l'emplacement
      // correspondant à l'itération en cours :
      let tmp = tableau[i];
      tableau[i] = tableau[minIndex];
      tableau[minIndex] = tmp;
    }
  }
  return tableau;
}

const tableauTrié = selectionSort(arrayGenerator(20, 200));
console.log(tableauTrié);
