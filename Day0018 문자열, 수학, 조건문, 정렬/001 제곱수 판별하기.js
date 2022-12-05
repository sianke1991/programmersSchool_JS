function solution(n) {
    var sqrt = Math.sqrt(n);
    
    var answer = Number.isInteger(sqrt) ? 1 : 2;
    return answer;
}