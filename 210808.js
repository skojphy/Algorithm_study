function solution(nums) {
    let answer = 0;
    const dist = Math.max(...nums) - Math.min(...nums);

    let dy = new Array(nums.length).fill(0).map(a => new Array(dist * 2 + 1).fill(1));

    for(let i = 0; i < nums.length; i++){
        for(let k = 0; k < i; k++){
            dy[i][nums[i] - nums[k] + dist] = dy[k][nums[i] - nums[k] + dist] + 1;
        }
    }

    let max = 0;
    for(let i = 0; i < nums.length; i++){
        max = dy.reduce((a, b) => Math.max(a, Math.max(...b)), 0);
    }
    return max;
}

console.log(solution([1, 2, 3, 5, 7, 8, 9]));

console.log(solution([25, 20, 15, 30, 10, 40, 5]));