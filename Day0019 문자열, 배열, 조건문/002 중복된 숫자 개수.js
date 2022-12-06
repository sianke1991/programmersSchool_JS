function solution(array, n) {
    var answer = 0;
    for (let elem of array) {
        if (elem === n) answer++;
    }
    return answer;
}