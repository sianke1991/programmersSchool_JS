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

function solution(n) {
    let LCM = (6*n)/GCD(6, n); //6과 n의 최소공배수를 구한다. 이 값이 피자 조각 개수가 된다.
    var answer = LCM/6; //피자 조각 개수를 피자 한 판 당 조각 개수로 나누면 피자 판 수가 된다.
    return answer;
}
