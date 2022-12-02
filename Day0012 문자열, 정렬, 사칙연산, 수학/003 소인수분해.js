let isPrime = {};

function solution(n) {
    for (let i=2; i<=n; i++) {
        if (isPrime[i]===undefined) {
            isPrime[i] = true;
            for (let j=i*2; j<=n; j+=i) isPrime[j] = false;
        }
    }    
    var answer = [];
    for (let prime in isPrime) {
        if (!isPrime[prime]) continue; //prime이 소수가 아닌 경우...
        let primeNumber = parseInt(prime); //독특하게 prime 그 자체는 string으로 나온다...
        if (n%primeNumber===0) answer.push(primeNumber);
    }
    return answer;
}