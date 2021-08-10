const rl = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});
const input = [];
rl.on('line', line => {
    input.push(line);
}).on("close", () => {

    const nums = input.slice(1).map(a => Number(a));

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
    console.log(answer);


    process.exit();
});