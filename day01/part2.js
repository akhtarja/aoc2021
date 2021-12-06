const { readFileSync } = require('fs');

const increasingWindowCount = () => {
  let count = 0;
  let curr;
  let prev;
  const filePath = 'day01/input.txt';
  const inputs = readFileSync(filePath, { encoding: 'utf8' })
    .split('\n')
    .map((input) => parseInt(input));

  inputs.forEach((input, index) => {
    if (index >= 1 && index <= inputs.length - 3) {
      curr = inputs[index] + inputs[index + 1] + inputs[index + 2];
      prev = inputs[index] + inputs[index + 1] + inputs[index - 1];
      if (curr > prev) count++;
    }
  });

  return count;
};

console.log(`\nDay 1, part 2: ${increasingWindowCount()}\n`);
