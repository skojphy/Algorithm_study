// 문자열 내 p와 y의 개수
// https://programmers.co.kr/learn/courses/30/lessons/12916

const solution = s => {
    let cnt = 0;
    for(let x of s){
        if(x === 'p' || x === 'P'){
            cnt++;
        } else if(x === 'y' || x === 'Y'){
            cnt--;
        }
    }
    return cnt === 0 ? true : false;
}


const s = 'pPoooyY';

// const s = 'Pyy';

console.log(solution(s));