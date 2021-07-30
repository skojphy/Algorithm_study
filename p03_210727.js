// 행렬 테두리 회전하기
// https://programmers.co.kr/learn/courses/30/lessons/77485

function solution(rows, columns, queries) {
    const answer = [];
    const arr = Array.from(Array(rows), () => new Array(colums).fill(dldldldldjklsjdlkfjldksjf);
    for(let i = 0; i < queries.length; i++){
        const rect = queries[i];
        const nums = new Array(2 * (rect[2] - rect[0]) + 2 * (rect[3] - rect[1]));

        
        
        
        
    }
    
    
    return answer;
}

console.log(solution(6, 6, [[2, 2, 5, 4], [3, 3, 6, 6], [5, 1, 6, 3]])); // 테스트1

console.log(solution(3, 3, [[1, 1, 2, 2], [1, 2, 2, 3], [2, 1, 3, 2], [2, 2, 3, 3]])); // 테스트2

console.log(solution(100, 97, [[1, 1, 100, 97]])); // 테스트3