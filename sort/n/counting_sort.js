function get_max(arr) {
  let max = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
    }
  }
  return max;
}

function countingSort(arr) {
  // Nous récupérons la plus grande valeur du tableau :
  const max = get_max(arr);

  // Nous allons créer un tableau de comptage de k + 1 éléments :
  const counts = new Array(max + 1);

  // Nous allons initialiser le tableau de comptage avec des 0 :
  for (let i = 0; i < counts.length; i++) {
    counts[i] = 0;
  }

  // Nous allons compter le nombre d'occurences de chaque élément :
  for (let i = 0; i < arr.length; i++) {
    counts[arr[i]]++;
  }

  // Nous allons calculer la position de chaque élément dans le tableau trié :
  for (let i = 1; i < counts.length; i++) {
    counts[i] += counts[i - 1];
  }

  // Nous allons créer le tableau de sortie :
  const sortedArr = new Array(arr.length);

  // Nous allons placer chaque élément dans le tableau de sortie :
  for (let i = arr.length - 1; i >= 0; i--) {
    const value = arr[i];
    const position = counts[value];
    sortedArr[position - 1] = value;
    counts[value]--;
  }
  return sortedArr;
}

const arr = [7, 5, 2, 4, 3, 9];
console.log(countingSort(arr));
