/**수 num에 숫자 digit가 몇 번 등장하는지 반환하는 함수*/
let numDigits = (num, digit) => {
    let str = String(num);
    let result = 0;
    for (let char of str) {
        if (char==digit) result++;
    }
    return result;
}

function solution(i, j, k) {
    var answer = 0;
    for (let num=i; num<=j; num++) {
        answer += numDigits(num, k);
    }
    return answer;
}