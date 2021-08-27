// 징검다리 건너기(Level 3)
// https://programmers.co.kr/learn/courses/30/lessons/64062

const solution = (stones, k) => {
    if(k === 1){
        return Math.min(stones);
    }

    let lt = 0;
    let rt = lt + 1;
    let max = 0;
    let min = Number.MAX_SAFE_INTEGER;
    let curr = lt;
    while(rt < stones.length - 1){
        if(stones[rt] >= max){
            curr = rt;
            max = stones[rt];
        }
        rt++;
        if(rt - lt >= k){
            lt = curr + 1;
            curr = lt;
            rt = lt + 1;
            min = Math.min(min, max);
            max = stones[lt];
        }
    }
    return min;
}

const stones = [2, 4, 5, 3, 2, 1, 4, 2, 5, 1];
const k = 3;

console.log(solution(stones, k));
