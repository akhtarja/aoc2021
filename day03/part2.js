const { readFileSync } = require('fs');

const scrubberRating = () => {
  let transposed;
  let bitCriteria;
  const filePath = 'day03/input.txt';
  const inputs = readFileSync(filePath, { encoding: 'utf8' }).split('\n');
  let oxygen = inputs;
  let carbonDioxide = inputs;

  for (let position = 0; position < inputs[0].length; position++) {
    if (oxygen.length > 1) {
      transposed = transpose(oxygen, position);
      bitCriteria = mostCommon(transposed);
      oxygen = oxygen.filter((input) => input[position] === bitCriteria);
    }
  }

  for (let position = 0; position < inputs[0].length; position++) {
    if (carbonDioxide.length > 1) {
      transposed = transpose(carbonDioxide, position);
      bitCriteria = mostCommon(transposed);
      carbonDioxide = carbonDioxide.filter(
        (input) => input[position] !== bitCriteria
      );
    }
  }

  return parseInt(oxygen, 2) * parseInt(carbonDioxide, 2);
};

const transpose = (inputs, position) => inputs.map((input) => input[position]);

const mostCommon = (values) => {
  const ones = values.filter((value) => parseInt(value) === 1).length;

  if (ones >= values.length / 2) {
    return '1';
  } else {
    return '0';
  }
};

console.log(`\nDay3, part 2: ${scrubberRating()}\n`);
