/**
 * 정수 num을 입력받아 num을 구성하는 숫자들의 합을 반환한다.
 */
let sumDigits = (num) => {
    let str = String(num);
    let result = 0;
    for (let char of str) {
        result += parseInt(char);
    }
    return result;
}

function solution(x) {
    var answer = (x%sumDigits(x))===0;
    return answer;
}