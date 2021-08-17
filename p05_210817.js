// 문자열 압축
// https://programmers.co.kr/learn/courses/30/lessons/60057

const solution = s => {
    if(s.length === 1){
        return 1;
    }
    let ans = s.length;
    for(let i = 1; i <= s.length / 2; i++){
        const stack = [s.slice(0, i)];
        let cnt = s.length;
        let flag = 0;
        let cnt2 = 2;
        for(let j = 1; j < Math.floor(s.length / i); j++){
            if(s.slice(i * j, i * j + i) !== stack[stack.length - 1]){
                flag = 0;
                cnt2 = 2;
                stack.push(s.slice(i * j, i * j + i));
            } else{
                if(flag === 0){
                    flag = 1;
                    cnt = cnt - i + 1;
                } else{
                    cnt -= i;
                    cnt2++;
                    if(cnt2 === 10){
                        cnt++;
                    } else if(cnt2 === 100){
                        cnt++;
                    } else if(cnt2 === 1000){
                        cnt++;
                    }
                }
            }
        }
        ans = Math.min(ans, cnt);
    }
    return ans;
}



// const s = 'aabbaccc';
// const s = 'ababcdcdababcdcd';
// const s = 'abcabcdede';
// const s = 'abcabcabcabcdededededede';
// const s = 'xababcdcdababcdcd';
const s = 'sssssddddd';

console.log(solution(s));