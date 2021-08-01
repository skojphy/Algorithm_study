// 내적
// https://programmers.co.kr/learn/courses/30/lessons/70128

function solution(a, b) {
    const arr = a.map((v, i) => v * b[i]);
    const answer = arr.reduce((acc, curr) => acc + curr);
    return answer;
}

console.log(solution([1,2,3,4], [-3,-1,0,2])); // 테스트1

console.log(solution([-1,0,1], [1,0,-1])); // 테스트2