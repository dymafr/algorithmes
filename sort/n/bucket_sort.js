import arrayGenerator from '../arrayGenerator.js';
import { insertionSort } from '../n2/implementations/insertionSort.js';

function createBuckets(arr, bucketSize, n) {
  let minValue = arr[0];
  let maxValue = arr[0];
  for (let i = 1; i < n; i++) {
    if (arr[i] < minValue) {
      minValue = arr[i];
    } else if (arr[i] > maxValue) {
      maxValue = arr[i];
    }
  }
  const bucketCount = Math.floor((maxValue - minValue) / bucketSize) + 1;
  const buckets = [];
  for (let i = 0; i < bucketCount; i++) {
    buckets[i] = [];
  }
  for (let i = 0; i < n; i++) {
    buckets[Math.floor((arr[i] - minValue) / bucketSize)].push(arr[i]);
  }
  return buckets;
}

function sortBuckets(buckets) {
  const sortedArray = [];
  for (let i = 0; i < buckets.length; i++) {
    if (buckets[i] != null) {
      insertionSort(buckets[i]);
      sortedArray.push(...buckets[i]);
    }
  }
  return sortedArray;
}

export function bucketSort(arr, bucketSize = 5, n = arr.length) {
  if (n < 2) {
    return arr;
  }
  const buckets = createBuckets(arr, bucketSize, n);
  return sortBuckets(buckets);
}

const arr = arrayGenerator(20, 200);
console.log(bucketSort(arr));
