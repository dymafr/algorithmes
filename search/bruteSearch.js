// worst => n
// best => 1
// avg n / 2

function bruteSearch(sortedArray, key) {
  let comparaisons = 0;

  for (let i = 0; i < sortedArray.length; i++) {
    comparaisons++;
    if (sortedArray[i] === key) {
      return comparaisons;
    }
  }
  return -1;
}

const arrayOperations = [];
const arrayLength = 100_000_000;
const iterations = 1000;
const arr = Array.from({ length: arrayLength }, (x, i) => i);
for (let i = 0; i < iterations; i++) {
  const t0 = performance.now();
  const comparaisons = bruteSearch(
    arr,
    Math.floor(Math.random() * arrayLength)
  );
  const t1 = performance.now();
  const time = t1 - t0;
  arrayOperations.push({ comparaisons, time });
}
const totalOps = arrayOperations.reduce(
  (acc, curr) => {
    acc.comparaisons += curr.comparaisons;
    acc.time += curr.time;
    return acc;
  },
  { comparaisons: 0, time: 0 }
);
const resultat = {
  avgComps: Math.round(totalOps.comparaisons / arrayOperations.length),
  avgTime: Math.round(totalOps.time / arrayOperations.length),
};
console.log(resultat);
