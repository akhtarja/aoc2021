const { readFileSync } = require('fs');

const lanternfishCount = () => {
  let newborns;
  const filePath = 'day06/input.txt';
  let inputs = readFileSync(filePath, { encoding: 'utf8' })
    .split(',')
    .map((input) => parseInt(input, 10));

  for (let day = 0; day < 80; day++) {
    newborns = 0;
    inputs = inputs.map((input) => {
      if (input === 0) {
        newborns++;
        return 6;
      } else {
        return input - 1;
      }
    });

    for (let index = 0; index < newborns; index++) {
      inputs.push(8);
    }
  }

  return inputs.length;
};

console.log(`\nDay 6, part 1: ${lanternfishCount()}\n`);
