function solution(n) {
    let arr = String(n).split('');
    var answer = 0;
    for (let char of arr) {
        answer += parseInt(char);
    }
    return answer;
}