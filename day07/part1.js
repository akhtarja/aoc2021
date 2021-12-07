const { readFileSync } = require('fs');

const fuelConsumption = () => {
  const filePath = 'day07/input.txt';
  const inputs = readFileSync(filePath, { encoding: 'utf8' })
    .split(',')
    .map((input) => parseInt(input, 10));
  let lastFuel = Math.max(...inputs) * inputs.length;
  let currentFuel;

  for (
    let position = Math.min(...inputs);
    position <= Math.max(...inputs);
    position++
  ) {
    currentFuel = 0;
    inputs.forEach((input) => (currentFuel += Math.abs(input - position)));
    if (currentFuel < lastFuel) lastFuel = currentFuel;
  }

  return lastFuel;
};

console.log(`\nDay 7, part 1: ${fuelConsumption()}\n`);
