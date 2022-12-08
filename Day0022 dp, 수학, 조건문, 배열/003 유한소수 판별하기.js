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

/**
 * 입력받은 수의 소인수를 찾아서 반환한다.
 * @param {number} num 소인수를 찾을 정수
 * @returns {array} num의 소인수로 이루어진 배열
 */
let primeFactors = (num) => {
    let isPrime = {}; //num 이하의 소수를 찾기 위한 object
    for (let i=2; i<=num; i++) {
        if (isPrime[i]===undefined) {
            isPrime[i] = true;
            for (let j=i*2; j<=num; j+=i) isPrime[j] = false;
        }
    }
    var answer = [];
    for (let prime in isPrime) {
        if (!isPrime[prime]) continue; //prime이 소수가 아닌 경우...
        let primeNumber = parseInt(prime); //독특하게 prime 그 자체는 string으로 나온다...
        if (num%primeNumber===0) answer.push(primeNumber);
    }
    return answer;
}


function solution(a, b) {
    let gcd = GCD(a, b);
    let primes = primeFactors(b/gcd); //기약분수로 나타낸 뒤의 분모의 소인수
    switch (primes.length) {
        case 0: //기약분수로 나타낸 결과가 정수인 경우(분모가 1인 경우)
            return 1;
        case 1:
            return (primes[0]===2 || primes[0]===5) ? 1 : 2;
        case 2:
            return ((primes[0]===2 && primes[1]===5) || (primes[0]===5 && primes[1]===2)) ? 1 : 2;
        default:
            return 2;
    }
    
}