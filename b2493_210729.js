// 탑
// https://www.acmicpc.net/problem/2493

// var fs = require('fs');
// const input = fs.readFileSync('/dev/stdin').toString().split('\n');
// const num = input[0] - 0;
// const nums = input[1].split(' ').map(a => a - 0);

const num = 5;
const nums = [6, 9, 5, 7, 4];
const answer = new Array(num).fill(0);

const stack = [[nums[0], 1]];

for(let i = 1; i < num; i++){
    if(stack.length === 0 || nums[i] > stack[stack.length - 1][0]){
        while(stack.length > 0 && nums[i] > stack[stack.length - 1][0]){
            console.log(i, stack[stack.length - 1]);
            stack.pop();
        }
        answer[i] = stack[stack.length - 1][1];
        stack.push([nums[i], i+1]);
    }
    if(stack.length > 0 && nums[i] < stack[stack.length - 1]){
        answer[i] = stack[stack.length - 1][1];
        stack.push([nums[i], i + 1]);
    }
}

console.log(answer.join(' '));