function solution(array, height) {
    var answer = 0;
    for (let elem of array) {
        if (elem>height) answer++;''
    }
    return answer;
}