// Pour n on a :
// k n complexité en temps où k est le nombre max de chiffres.

function getDigit(num, i) {
  return Math.floor(num / Math.pow(10, i)) % 10;
}

function digitCount(num) {
  if (num === 0) return 1;
  return Math.floor(Math.log10(num)) + 1;
}

function mostDigits(nums) {
  return digitCount(Math.max(...nums));
}

function radixSort(nums) {
  let maxDigitCount = mostDigits(nums);
  for (let k = 0; k < maxDigitCount; k++) {
    let digitBuckets = Array(10)
      .fill()
      .map(() => []);
    for (let i = 0; i < nums.length; i++) {
      let digit = getDigit(nums[i], k);
      digitBuckets[digit].push(nums[i]);
    }
    nums = digitBuckets.flat();
  }
  return nums;
}

console.log(radixSort([23, 345, 5467, 12]));
