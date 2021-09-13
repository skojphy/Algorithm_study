// 게임 맵 최단거리(Level2)
// https://programmers.co.kr/learn/courses/30/lessons/1844

const solution = maps => {
  const dx = [-1, 0, 1, 0];
  const dy = [0, 1, 0, -1];
  maps = maps.map(v => v.map(el => el * -1));
  maps[0][0] = 1;

  const queue = [[0, 0]];
  while (queue.length) {
    const curr = queue.shift();
    for (let j = 0; j < 4; j++) {
      const nextX = curr[0] + dx[j];
      const nextY = curr[1] + dy[j];
      if (
        nextX >= 0 &&
        nextX < maps.length &&
        nextY >= 0 &&
        nextY < maps[0].length &&
        maps[nextX][nextY] === -1
      ) {
        maps[nextX][nextY] = maps[curr[0]][curr[1]] + 1;
        queue.push([nextX, nextY]);
      }
    }
  }

  return maps[maps.length - 1][maps[0].length - 1];
};

const maps = [
  [1, 0, 1, 1, 1],
  [1, 0, 1, 0, 1],
  [1, 0, 1, 1, 1],
  [1, 1, 1, 0, 1],
  [0, 0, 0, 0, 1],
];

// const maps = [
//   [1, 0, 1, 1, 1],
//   [1, 0, 1, 0, 1],
//   [1, 0, 1, 1, 1],
//   [1, 1, 1, 0, 0],
//   [0, 0, 0, 0, 1],
// ];

console.log(solution(maps));
