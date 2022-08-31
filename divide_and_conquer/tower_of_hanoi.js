// 2^n - 1 déplacements (O(2^n))
// Mémoire O(n)

function towerOfHanoi(n, source, destination, auxilliaire) {
  if (n === 1) {
    console.log(`Déplacer le disque ${n} de ${source} vers ${destination}`);
  } else {
    towerOfHanoi(n - 1, source, auxilliaire, destination);
    console.log(`Déplacer le disque ${n} de ${source} vers ${destination}`);
    towerOfHanoi(n - 1, auxilliaire, destination, source);
  }
}

const n = 3; // Nombre de disques
towerOfHanoi(n, 'A', 'C', 'B');
