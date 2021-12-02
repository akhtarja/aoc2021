import { readFileSync } from 'fs';

const depthXPosition = () => {
  let aim = 0;
  let position = 0;
  let depth = 0;
  const filePath = 'day02/input.txt';

  readFileSync(filePath, { encoding: 'utf8' })
    .split('\n')
    .map((input) => input.split(' '))
    .map((input) => [input[0], parseInt(input[1])])
    .map((input) => {
      switch (input[0]) {
        case 'forward':
          position += input[1];
          depth += aim * input[1];
          break;
        case 'up':
          aim -= input[1];
          break;
        case 'down':
          aim += input[1];
          break;
        default:
          break;
      }
    });

  return position * depth;
};

console.log(`\nDay 2, part 2: ${depthXPosition()}\n`);
