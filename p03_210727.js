// 행렬 테두리 회전하기
// https://programmers.co.kr/learn/courses/30/lessons/77485

function solution(lottos, win_nums) {
    var answer = [7, 7];
    for(let i = 0; i < 6; i++){
        if(lottos[i] === 0){
            answer[0]--;
        } else if(win_nums.indexOf(lottos[i]) >= 0){
            answer[1]--;
            answer[0]--;
        }
    }
    if(answer[0] === 7){
        answer[0] = 6;
    }
    if(answer[1] === 7){
        answer[1] = 6;
    }
    return answer;
}

console.log(solution([44, 1, 0, 0, 31, 25], [31, 10, 45, 1, 6, 19]));