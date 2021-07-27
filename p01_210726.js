// 폰켓몬
// https://programmers.co.kr/learn/courses/30/lessons/1845

function solution(nums) {
    let sh = new Map();
    for(let x of nums){
        sh.set(x, sh.get(x) + 1 || 1);
    }
    let answer = sh.size < (nums.length / 2) ? sh.size : nums.length / 2;
    return answer;
}

console.log(solution([3,1,2,3])); // 2

console.log(solution([3,3,3,2,2,4])); // 3

console.log(solution([3,3,3,2,2,2])); // 2