function solution(numbers) {
    let sum = 0;
    for (let num of numbers) {
        sum += num;
    }
    var answer = sum/numbers.length;
    return answer;
}