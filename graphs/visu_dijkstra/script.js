import MinPriorityQueue from '../../binary_heaps/MinPriorityQueue.js';
let fps = 60;
let map = [];
const nLignes = 20;
const nColonnes = 20;
const squareSize = 30;
const nbrObstacles = 5;
const obstacleMaxSize = 2;

// Dijkstra
let distances;
let previous;
let queue;
let trouve;

let canvas = document.getElementById('moncanvas');
let ctx = canvas.getContext('2d');

canvas.width = nColonnes * squareSize;
canvas.height = nLignes * squareSize;

init();

document.addEventListener('keydown', keyDownListener);

function keyDownListener(event) {
  if (event.key === 'm') {
    init();
  }
}

function getRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Position de départ = 1
// Position d'arrivée = 2
// Mur = 7
function init() {
  for (let i = 0; i < nLignes; i++) {
    map[i] = [];
    for (let j = 0; j < nColonnes; j++) {
      map[i][j] = 0;
    }
  }

  // position aléatoire du début et de la fin (début à gauche et fin à droite)
  const posDepart = getRandomNumber(0, nLignes - 1);
  const posFin = getRandomNumber(0, nLignes - 1);
  map[posDepart][0] = 1;
  map[posFin][nColonnes - 1] = 2;
  //   génération de murs aléatoires
  for (let i = 1; i <= nbrObstacles; i++) {
    const x = getRandomNumber(1, nLignes - obstacleMaxSize);
    const y = getRandomNumber(1, nColonnes - obstacleMaxSize);
    const longueur = getRandomNumber(1, obstacleMaxSize);
    const largeur = getRandomNumber(1, obstacleMaxSize);
    for (let j = x; j <= x + largeur; j++) {
      for (let k = y; k <= y + longueur; k++) {
        // pas d'obstacle sur le départ ou l'arrivée
        if (j > 0 && j < nLignes - 1 && k > 0 && k < nColonnes - 1) {
          map[j][k] = 7;
        }
      }
    }
  }

  init_dijkstra();
  requestAnimationFrame(renduCanvas);
}

function init_dijkstra() {
  distances = {};
  previous = {};
  queue = new MinPriorityQueue();
  trouve = false;
  for (let i = 0; i < nLignes; i++) {
    for (let j = 0; j < nColonnes; j++) {
      if (map[i][j] === 1) {
        distances[`${i}-${j}`] = 0;
        queue.insert({ vertex: `${i}-${j}`, priority: 0 });
      } else {
        distances[`${i}-${j}`] = Infinity;
      }
    }
  }
}

function dijkstraNextMove() {
  const { vertex } = queue.extractMin();
  const [x, y] = vertex.split('-').map((v) => parseInt(v, 10));
  if (map[x][y] === 2) {
    trouve = true;
    constructEndPath(vertex);
    return;
  }
  if (map[x][y] !== 1) {
    map[x][y] = 3;
  }
  for (const neighbor of getNeighbors(x, y)) {
    const newDistance = distances[vertex] + 1;
    if (newDistance < distances[neighbor]) {
      distances[neighbor] = newDistance;
      previous[neighbor] = vertex;
      queue.insert({ vertex: neighbor, priority: newDistance });
    }
  }
}

function constructEndPath(endVertex) {
  let previousVertex = previous[endVertex];
  while (previousVertex) {
    const [x, y] = previousVertex.split('-').map((v) => parseInt(v, 10));
    if (map[x][y] === 1) break;
    map[x][y] = 4;
    previousVertex = previous[previousVertex];
  }
}

function getNeighbors(x, y) {
  const neighbors = [];
  if (x > 0 && map[x - 1][y] !== 7) {
    neighbors.push(`${x - 1}-${y}`);
  }
  if (x < nLignes - 1 && map[x + 1][y] !== 7) {
    neighbors.push(`${x + 1}-${y}`);
  }
  if (y > 0 && map[x][y - 1] !== 7) {
    neighbors.push(`${x}-${y - 1}`);
  }
  if (y < nColonnes - 1 && map[x][y + 1] !== 7) {
    neighbors.push(`${x}-${y + 1}`);
  }
  return neighbors;
}

function renduCanvas() {
  ctx.beginPath();
  ctx.fillStyle = '#FFFFFF';
  ctx.fillRect(0, 0, nColonnes * squareSize, nLignes * squareSize);
  ctx.strokeStyle = '#000000';
  ctx.font = '16px Arial';
  for (let i = 0; i < nColonnes; i++) {
    ctx.moveTo(i * squareSize, 0);
    ctx.lineTo(i * squareSize, nLignes * squareSize);
  }
  for (let i = 0; i < nLignes; i++) {
    ctx.moveTo(0, i * squareSize);
    ctx.lineTo(nColonnes * squareSize, i * squareSize);
  }

  if (!trouve) dijkstraNextMove();

  for (let i = 0; i < nLignes; i++) {
    for (let j = 0; j < nColonnes; j++) {
      // le départ
      if (map[i][j] === 1) {
        ctx.fillStyle = '#0000FF';
        ctx.fillRect(
          j * squareSize + 1,
          i * squareSize + 1,
          squareSize - 2,
          squareSize - 2
        );
        ctx.fillStyle = '#FFFFFF';
        ctx.fillText('D', j * squareSize + 5, i * squareSize + 15);
      }
      // l'arrivée
      if (map[i][j] === 2) {
        ctx.fillStyle = '#FF0000';
        ctx.fillRect(
          j * squareSize + 1,
          i * squareSize + 1,
          squareSize - 2,
          squareSize - 2
        );
        ctx.fillStyle = '#FFFFFF';
        ctx.fillText('A', j * squareSize + 5, i * squareSize + 15);
      }
      // un mur
      if (map[i][j] === 7) {
        ctx.fillStyle = '#000000';
        ctx.fillRect(
          j * squareSize + 1,
          i * squareSize + 1,
          squareSize - 2,
          squareSize - 2
        );
      }
      // la zone explorée
      if (map[i][j] === 3) {
        ctx.fillStyle = '#26c4ec';
        ctx.fillRect(
          j * squareSize + 2,
          i * squareSize + 2,
          squareSize - 2,
          squareSize - 2
        );
      }
      // le tracé du chemin final
      if (trouve && map[i][j] === 4) {
        ctx.fillStyle = '#FFFF00';
        ctx.fillRect(
          j * squareSize + 1,
          i * squareSize + 1,
          squareSize - 2,
          squareSize - 2
        );
      }
    }
  }
  ctx.stroke();

  if (!trouve) {
    setTimeout(() => requestAnimationFrame(renduCanvas), 1000 / fps);
  }
}
