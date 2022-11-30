function solution(n) {
    let sqrt = Math.sqrt(n);
    let numPairs = 0;
    for (let i=1; i<sqrt; i++) { //i가 sqrt 그 자체인 경우에는 반복문을 돌지 않는다. (sqrt가 정수인 경우에 처리 필요)
        if (Number.isInteger(n/i)) numPairs++;
    }
    var answer = Number.isInteger(sqrt) ? numPairs*2+1 : numPairs*2;
    return answer;
}