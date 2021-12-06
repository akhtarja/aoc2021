const { readFileSync } = require('fs');
const _ = require('underscore');

const finalScore = () => {
  let boards = [];
  let board = [];
  let boardRow;
  let rowData;
  let currentNumber;
  let bingo = 0;
  const filePath = 'day04/testInput.txt';
  const inputs = readFileSync(filePath, { encoding: 'utf8' }).split('\n');
  const numbersToDraw = inputs[0]
    .split(',')
    .map((number) => parseInt(number, 10));

  for (let index = 2; index < inputs.length - 2; index += 6) {
    board = [];
    for (boardRow = 0; boardRow <= 4; boardRow++) {
      rowData = inputs[index + boardRow];
      board[boardRow] = [
        parseRow(rowData, 0, 2),
        parseRow(rowData, 3, 5),
        parseRow(rowData, 6, 8),
        parseRow(rowData, 9, 11),
        parseRow(rowData, 12, 14),
      ];
    }
    boards.push(board);
  }

  numbersToDraw.forEach((value) => {
    if (bingo === 0) {
      currentNumber = value;
      boards = playBingo(boards, value);
      if (value == 24)
        if (boards.length === 1)
          bingo = completeColumn(boards) || completeRow(boards);
    }
  });

  return currentNumber;
};

const parseRow = (rowData, start, end) =>
  parseInt(rowData.substring(start, end), 10);

const playBingo = (boards, value) => {
  for (let board = 0; board < boards.length; board++) {
    for (let boardRow = 0; boardRow < boards[board].length; boardRow++) {
      for (
        let position = 0;
        position < boards[board][boardRow].length;
        position++
      ) {
        if (boards[board][boardRow][position] === value) {
          boards[board][boardRow][position] = -1;
        }
      }
    }

    if (completeColumn([boards[board]] || completeRow[boards[board]] > 0)) {
      boards.splice(board, 1);
      return boards;
    }
  }
  return boards;
};

const completeColumn = (boards) =>
  completeRow(boards.map((board) => _.unzip(board)));

const completeRow = (boards) => {
  let unmarkedSum = 0;
  boards.forEach((board) => {
    board.forEach((boardRow) => {
      if (boardRow.reduce((a, b) => a + b) === -5) {
        console.log(boards);
        unmarkedSum = sumOfUnmarkedItems(board);
      }
    });
  });
  return unmarkedSum;
};

const sumOfUnmarkedItems = (board) => {
  let unmarkedSum = 0;
  board.forEach((boardRow) => {
    unmarkedSum += boardRow.reduce((a, b) => (b !== -1 ? a + b : a), 0);
  });
  return unmarkedSum;
};

console.log(`\nDay 4, part 1: ${finalScore()}`);
