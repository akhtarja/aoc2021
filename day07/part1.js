const { readFileSync } = require('fs');

const fuelConsumption = () => {
  const filePath = 'day07/testInput.txt';
  const inputs = readFileSync(filePath, { encoding: 'utf8' })
    .split(',')
    .map((input) => parseInt(input, 10));

  return inputs;
};

console.log(`\nDay 7, part 1: ${fuelConsumption()}\n`);
