const { readFileSync } = require('fs');

const increasesCount = () => {
  let count = 0;
  const filePath = 'day01/input.txt';
  const inputs = readFileSync(filePath, { encoding: 'utf8' })
    .split('\n')
    .map((input) => parseInt(input));

  inputs.forEach((input, index) => {
    if (index !== 0 && input > inputs[index - 1]) {
      count++;
    }
  });
  return count;
};

console.log(`\nDay 1, part 1: ${increasesCount()}\n`);
