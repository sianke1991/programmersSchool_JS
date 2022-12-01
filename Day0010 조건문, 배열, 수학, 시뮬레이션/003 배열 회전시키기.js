function solution(numbers, direction) {
    var answer = new Array(numbers.length);
    if (direction==="right") {
        answer[0] = numbers[numbers.length-1]; //결과 배열의 맨 처음 값은 입력 배열의 맨 마지막 값이 된다.
        for (let i=1; i<numbers.length; i++) {
            answer[i] = numbers[i-1];
        }
    } else {
        answer[numbers.length-1] = numbers[0]; //결과 배열의 맨 마지막 값은 입력 배열의 맨 처음 값이 된다.
        for (let i=0; i<numbers.length-1; i++) {
            answer[i] = numbers[i+1];
        }
    }
    return answer;
}