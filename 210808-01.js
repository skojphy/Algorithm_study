function solution(nums) {
    let answer = 0;
    if(nums.length < 3){
        return nums.length;
    }

    const dist = Math.max(...nums) - Math.min(...nums);

    let dy = new Array(nums.length).fill(1);

    for(let i = dist * -1; i < dist; i++){
        for(let j = 1; j < nums.length; j++){
            const arr = [...nums].splice(0, j);
            const num = arr.indexOf(nums[j] - i);
            if(num === -1){
                dy[j] = 1;
            } else{
                dy[j] = dy[num] + 1;
            }
        }
        answer = Math.max(answer, Math.max(...dy));
    }
    return answer;
}

console.log(solution([1, 2, 3, 5, 7, 8, 9]));

// console.log(solution([25, 20, 15, 30, 10, 40, 5]));