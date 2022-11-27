/**
 * 두 정수의 최대공약수를 계산하여 반환한다.
 * @param {number} num1 최대공약수를 계산할 정수1
 * @param {number} num2 최대공약수를 계산할 정수2
 * @returns {number} num1, num2의 최대공약수
 */
let GCD = (num1, num2) => {
    while (num2>0) {
        let r = num1%num2;
        num1 = num2;
        num2 = r;
    }

    return num1;
}

function solution(denum1, num1, denum2, num2) {
    var denum3 = denum1*num2 + denum2*num1; //두 분수의 합의 분자 (약분하기 전)
    var num3   = num1*num2;                 //두 분수의 합의 분모 (약분하기 전)
    var gcd    = GCD(denum3, num3);         //두 분수의 합을 약분하기 위해 나누어야 할 수
    var answer = [denum3/gcd, num3/gcd];
    return answer;
}