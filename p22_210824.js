// 거리두기 확인하기(Level 2)
// https://programmers.co.kr/learn/courses/30/lessons/81302

const check = arr => {
    for(let i = 0; i < 5; i++){
        for(let j = 0; j < 5; j++){
            if(i !== 0 && arr[i][j] === 'P'){
                if(arr[i - 1][j] === 'P' || arr[i - 1][j] === 1){
                    return 0;
                } else if(arr[i - 1][j] === 'O'){
                    arr[i - 1][j] = 1;
                }
            }
            if(i !== 4 && arr[i][j] === 'P'){
                if(arr[i + 1][j] === 'P' || arr[i + 1][j] === 1){
                    return 0;
                } else if(arr[i + 1][j] === 'O'){
                    arr[i + 1][j] = 1;
                }
            }
            if(j !== 0 && arr[i][j] === 'P'){
                if(arr[i][j - 1] === 'P' || arr[i][j - 1] === 1){
                    return 0;
                } else if(arr[i][j - 1] === 'O'){
                    arr[i][j - 1] = 1;
                }
            }
            if(j !== 0 && arr[i][j] === 'P'){
                if(arr[i][j + 1] === 'P' || arr[i][j + 1] === 1){
                    return 0;
                } else if(arr[i][j + 1] === 'O'){
                    arr[i][j + 1] = 1;
                }
            }
        }
    }
    return 1;
}


const solution = places => {
    const ans = [];
    for(let x of places){
        const arr = Array(5).fill().map((e1, v1) => Array(5).fill().map((e2, v2) => x[v1][v2]));
        
        ans.push(check(arr));
    }
    return ans;
}

const places = [["POOOP", "OXXOX", "OPXPX", "OOXOX", "POXXP"], ["POOPX", "OXPXP", "PXXXO", "OXXXO", "OOOPP"], ["PXOPX", "OXOXP", "OXPOX", "OXXOP", "PXPOX"], ["OOOXX", "XOOOX", "OOOXX", "OXOOX", "OOOOO"], ["PXPXP", "XPXPX", "PXPXP", "XPXPX", "PXPXP"]];

console.log(solution(places));
