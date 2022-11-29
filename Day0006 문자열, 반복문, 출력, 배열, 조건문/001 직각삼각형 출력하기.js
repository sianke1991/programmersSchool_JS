const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let input = [];

rl.on('line', function (line) {
    input = line.split(' '); //입력한 문자열을 공백을 기준으로 나눠서 배열로 만든다.
}).on('close', function () {
    //출력부
    let numLines = parseInt(input[0]);
    let lineArr = null;
    for (let i=0; i<numLines; i++) {
        lineArr = new Array(i+1);
        for (let j=0; j<=i; j++) {
            lineArr[j]='*';
        } //j loop (col)
        console.log(lineArr.join(''));
    } //i loop (row)
});