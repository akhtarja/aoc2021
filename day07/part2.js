const { readFileSync } = require('fs');

const fuelConsumption = () => {
  const filePath = 'day07/input.txt';
  const inputs = readFileSync(filePath, { encoding: 'utf8' })
    .split(',')
    .map((input) => parseInt(input, 10));
  let lastFuel = 0;
  let currentFuel;

  for (
    let position = Math.min(...inputs);
    position <= Math.max(...inputs);
    position++
  ) {
    currentFuel = 0;
    inputs.forEach(
      (input) => (currentFuel += fuelForMove(Math.abs(input - position)))
    );
    if (currentFuel < lastFuel || lastFuel === 0) lastFuel = currentFuel;
  }

  return lastFuel;
};

const fuelForMove = (distance) => {
  let fuel = 0;

  for (let step = 1; step <= distance; step++) {
    fuel += step;
  }

  return fuel;
};

console.log(`\nDay 7, part 1: ${fuelConsumption()}\n`);
