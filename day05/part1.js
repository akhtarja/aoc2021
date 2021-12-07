const { readFileSync } = require('fs');

const overlapCount = () => {
  const filePath = 'day05/input.txt';
  const inputs = readFileSync(filePath, { encoding: 'utf8' })
    .split('\n')
    .map((input) => input.split(' -> '))
    .map((input) => [parseCoordinates(input[0]), parseCoordinates(input[1])]);

  const max = Math.max(...inputs.flat(2));
  let map = [];
  for (let index = 0; index < max + 1; index++) {
    map[index] = Array(max + 1).fill(0);
  }

  inputs.forEach((input) => (map = mapCoordinates(input, map)));

  return intersectionsCount(map);
};

const parseCoordinates = (coordinates) => [
  parseInt(coordinates.split(',')[0], 10),
  parseInt(coordinates.split(',')[1], 10),
];

const mapCoordinates = (coordinates, map) => {
  const fromX = Math.min(coordinates[0][0], coordinates[1][0]);
  const fromY = Math.min(coordinates[0][1], coordinates[1][1]);
  const toX = Math.max(coordinates[0][0], coordinates[1][0]);
  const toY = Math.max(coordinates[0][1], coordinates[1][1]);

  if (fromX === toX) {
    for (let y = fromY; y <= toY; y++) {
      map[y][fromX]++;
    }
  } else if (fromY === toY) {
    for (let x = fromX; x <= toX; x++) {
      map[fromY][x]++;
    }
  }

  return map;
};

const intersectionsCount = (map) => {
  let count = 0;
  const flattenedMap = map.flat();
  for (let i in flattenedMap) {
    if (flattenedMap[i] > 1) {
      count++;
    }
  }
  return count;
};

console.log(`\nDay 5, part 1: ${overlapCount()}\n`);
