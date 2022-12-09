function solution(n) {
    let sqrt = Math.sqrt(n);
    var answer = 0;
    for (let i=1; i<sqrt; i++) {
        if (n%i===0) {
            answer+=i;
            answer+=(n/i);
        }
    }
    if (Number.isInteger(sqrt)) answer+=sqrt;
    return answer;
}