const a = [];
const b = [];
const c = [];

function initHanoi(n) {
  while (n > 0) {
    a.push(n);
    n--;
  }
}

function solveHanoi(n, source, auxilliaire, destination) {
  if (n > 0) {
    solveHanoi(n - 1, source, destination, auxilliaire);
    destination.push(source.pop());
    console.log(a, b, c);
    solveHanoi(n - 1, auxilliaire, source, destination);
  }
}

const n = 3; // Nombre de disques
initHanoi(n);
solveHanoi(n, a, b, c);
