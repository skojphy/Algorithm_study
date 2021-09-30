const solution = board => {
  let target = [];
  let day = 0;
  board.forEach((row, i) =>
    row.forEach((el, j) => {
      if (el === 1) {
        target.push([i, j]);
        console.log(target);
      }
    })
  );
  console.log(board);

  while (target.length > 0) {
    const current = [...target];
    target = [];
    current.forEach(el => {
      const [x, y] = [el[0], el[1]];
      if (x > 0 && board[x - 1][y] === 0) {
        board[x - 1][y] = 1;
        target.push([x - 1, y]);
      }
      if (x < board.length - 1 && board[x + 1][y] === 0) {
        board[x + 1][y] = 1;
        target.push([x + 1, y]);
      }
      if (y > 0 && board[x][y - 1] === 0) {
        board[x][y - 1] = 1;
        target.push([x, y - 1]);
      }
      if (y < board[0].length - 1 && board[x][y + 1] === 0) {
        board[x][y + 1] = 1;
        target.push([x, y + 1]);
      }
    });
    day += 1;
    console.log(board, day);
  }
  return board.some(row => row.some(el => el === 0)) ? -1 : day - 1;
};

const board = [
  [0, 0, -1, 0, 0, 0],
  [0, 0, 1, 0, -1, 0],
  [0, 0, -1, 0, 0, 0],
  [0, 0, 0, 0, -1, 1],
];

// const board = [
//   [0, 0, -1, 0, 0, 0],
//   [0, 0, 1, 0, -1, 0],
//   [0, 0, -1, 0, 0, 0],
//   [0, -1, -1, 0, -1, 0],
// ];

console.log(solution(board));
