// 48. Rotate Image(Medium)
// https://leetcode.com/problems/rotate-image/

const rotate = matrix => {
  const arr = matrix.map((el, i) => {
    let temp = [];
    matrix.forEach(el2 => {
      temp = [el2[i], ...temp];
    });
    return temp;
  });
  arr.forEach((el, i) => {
    matrix[i] = el;
  });
};

const matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

console.log(rotate(matrix));
