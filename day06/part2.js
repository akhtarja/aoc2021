const { readFileSync } = require('fs');

const lanternfishCount = () => {
  let newborns;
  const filePath = 'day06/input.txt';
  const inputs = readFileSync(filePath, { encoding: 'utf8' })
    .split(',')
    .map((input) => parseInt(input, 10));

  let buckets = bucketize(inputs);

  for (let day = 0; day < 256; day++) {
    newborns = buckets.shift();
    buckets[8] = newborns;
    buckets[6] += newborns;
  }

  return buckets.reduce((a, b) => a + b);
};

const bucketize = (inputs) => {
  let buckets = new Array(9).fill(0);
  inputs.forEach((input) => buckets[input]++);
  return buckets;
};

console.log(`\nDay 6, part 1: ${lanternfishCount()}\n`);
