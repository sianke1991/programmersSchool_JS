function solution(arr) {
    var answer = 0;
    for (let elem of arr) {
        answer+=elem;
    }
    return answer/arr.length;
}