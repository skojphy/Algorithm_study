const rl = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.on('line', line => {
    input = line.split(' ').map(a => a - 0);

    console.log(input.reduce((a, b) => a + b * b, 0) % 10);

    rl.close();
}).on("close", () => {
    process.exit();
});