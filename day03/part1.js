import { readFileSync } from 'fs';

const powerConsumption = () => {
  let transposed = [];
  let gamma = '';
  let epsilon = '';
  const filePath = 'day03/input.txt';
  const inputs = readFileSync(filePath, { encoding: 'utf8' }).split('\n');

  for (let position = 0; position < inputs[0].length; position++) {
    transposed[position] = transpose(inputs, position);
  }

  transposed.forEach((item) => (gamma += mostCommon(item)));

  for (let position = 0; position < gamma.length; position++) {
    epsilon += bitFlip(gamma[position]);
  }

  return parseInt(epsilon, 2) * parseInt(gamma, 2);
};

const transpose = (inputs, position) => inputs.map((input) => input[position]);

const mostCommon = (values) => {
  const ones = values.filter((value) => parseInt(value) === 1).length;

  if (ones >= values.length / 2) {
    return 1;
  } else {
    return 0;
  }
};

const bitFlip = (bit) => {
  if (bit === '1') {
    return 0;
  } else {
    return 1;
  }
};

console.log(`\nDay 3, part 1: ${powerConsumption()}\n`);
