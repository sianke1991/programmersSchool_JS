function solution(numbers, num1, num2) {
    var answer = numbers.slice(num1, num2+1); //slice는 배열 버전의 substring 처럼 작동한다.
    return answer;
}