function solution(numbers, k) {
    let currIdx = 0;
    while (k>1) {
        currIdx = (currIdx+2)%numbers.length;
        k--;
    }
    var answer = numbers[currIdx];
    return answer;
}