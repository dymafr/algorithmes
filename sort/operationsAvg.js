import arrayGenerator from './arrayGenerator.js';

export default (fonctionDeTri) => {
  const n = 10000;
  const iterations = 1000;
  const operations = [];
  for (let i = 0; i < iterations; i++) {
    const array = arrayGenerator(n, 10000);
    const arrayOperations = fonctionDeTri(array);
    operations.push(arrayOperations);
  }
  const totalOps = operations.reduce(
    (acc, curr) => {
      acc.comparaisons += curr.comparaisons;
      acc.writes += curr.writes;
      acc.time += curr.time;
      return acc;
    },
    { comparaisons: 0, writes: 0, time: 0 }
  );
  const resultat = {
    avgWrites: Math.round(totalOps.writes / operations.length),
    avgComps: Math.round(totalOps.comparaisons / operations.length),
  };
  if (n >= 10000) {
    resultat.avgTime = Math.round(totalOps.time / operations.length);
  }
  return resultat;
};
