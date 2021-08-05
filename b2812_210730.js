var fs = require('fs');
var input = fs.readFileSync('/dev/stdin').toString().split('\n');
var num = parseInt(input[0][1]);
var k = parseInt(input[1]);
// var num = 1924;
// var k = 2;
function solution(num, k){
    let answer = 0;
    const nums = (num + '').split('').map(a => a - 0);
    const stack = [nums[0]];
    for(let i = 1; i < nums.length; i++){
        if(k === 0 || nums[i] <= stack[stack.length - 1]){
            stack.push(nums[i]);
        } else if(nums[i] > stack[stack.length - 1]){
            while(k > 0 && nums[i] > stack[stack.length - 1]){
                stack.pop();
                k--;
            }
            stack.push(nums[i]);
        }
    }
    if(k > 0){
        while(k > 0){
            stack.pop();
            k--;
        }
    }
    if(stack.length === 0){
        return 0;
    }
    answer = stack.join('') - 0;
    return answer;
}

console.log(solution(num, k)); // 출력