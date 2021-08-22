// 체육복(Level 1)
// https://programmers.co.kr/learn/courses/30/lessons/42862

const solution = (n, lost, reserve) => {
    let ans = n;
    const arr = Array(n).fill(1).map((v, i) => {
        if(lost.includes(i + 1)){
            v--;
        }
        if(reserve.includes(i + 1)){
            v++;
        }
        return v;
    });
    for(let i = 0; i < n; i++){
        if(arr[i] === 0 && (i === 0 || arr[i - 1] < 2)){
            if((i !== n - 1) && arr[i + 1] === 2){
                arr[i + 1] = 1;
            } else{
                ans--;
            }
        }
    }
    return ans;
}

const n = 5;
const lost = [2, 4];
const reserve = [1, 3, 5];

// const n = 5;
// const lost = [2, 4];
// const reserve = [3];

// const n = 3;
// const lost = [3];
// const reserve = [1];

console.log(solution(n, lost, reserve));