
// 콜라츠 추측(Level 1)
// https://programmers.co.kr/learn/courses/30/lessons/12943

const solution = (n) => {
    let cnt = 0;
    while(n !== 1){
        if(cnt >= 500){
            return -1;
        }
        cnt++;
        n % 2 === 0 ? n /= 2 : n = n * 3 + 1;
    }
    return cnt;
}

const n = 6;

// const n = 16;

// const n = 626331;

console.log(solution(n));