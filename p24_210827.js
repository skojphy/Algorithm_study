// 가장 먼 노드(Level 3)
// https://programmers.co.kr/learn/courses/30/lessons/49189

const solution = (n, vertex) => {
    const graph = Array(n).fill().map(a => Array(n).fill(0));
    for (let [a, b] of vertex) {
        graph[a - 1][b - 1] = b - 1;
        graph[b - 1][a - 1] = a - 1;
    }

    let arr = graph[0];
    const check = new Set().add(0);
    let temp = new Set();
    let cnt = 1;

    while (check.size < n) {
        cnt = check.size;
        console.log(check);
        for (let x of arr) {
            if (!check.has(x)) {
                check.add(x);
                temp = new Set([...temp, ...graph[x]]);
            }
        }
        arr = Array(...temp);
        temp.clear;
    }
    return n - cnt;
}

// const n = 6;
// const vertex = [
//     [3, 6],
//     [4, 3],
//     [3, 2],
//     [1, 3],
//     [1, 2],
//     [2, 4],
//     [5, 2]
// ];

// console.log(solution(6, [[3, 6], [4, 3], [3, 2], [1, 3], [1, 2], [2, 4], [5, 2]])) // 3
// console.log(solution(11, [[1, 2], [1, 3], [2, 4], [2, 5], [3, 5], [3, 6], [4, 8], [4, 9], [5, 9], [5, 10], [6, 10], [6, 11]])) // 4
// console.log(solution(4, [[1, 2], [2, 3], [3, 4]])) // 1
// console.log(solution(2, [[1, 2]])) // 1
// console.log(solution(5, [[4, 3], [3, 2], [1, 3], [1, 2], [2, 4], [5, 2]])) // 2
// console.log(solution(4, [[1, 2], [1, 3], [2, 3], [2, 4], [3, 4]])) // 1
// console.log(solution(4, [[1, 4], [1, 3], [2, 3], [2, 1]])) // 3
// console.log(solution(4, [[3, 4], [1, 3], [2, 3], [2, 1]])) // 1
// console.log(solution(4, [[4, 3], [1, 3], [2, 3]])) // 2

// console.log(solution(n, vertex));