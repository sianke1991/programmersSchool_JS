/**
 * 정수 num 안에 숫자 7의 개수를 반환한다.
 */
 let numDigitSevens = (num) => {
    let str = String(num);
    let result = 0;
    for (let char of str) {
        if (char==='7') result++;
    }
    return result;
};

function solution(array) {
    var answer = 0;
    for (let elem of array) {
        answer += numDigitSevens(elem);
    }
    return answer;
}