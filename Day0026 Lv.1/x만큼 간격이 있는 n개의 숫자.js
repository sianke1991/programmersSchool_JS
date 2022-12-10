function solution(x, n) {
    var answer = new Array(n);
    let elem = 0;
    for (let i=0; i<n; i++) {
        elem+=x;
        answer[i] = elem;
    }
    return answer;
}