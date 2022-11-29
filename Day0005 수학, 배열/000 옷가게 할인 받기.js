function solution(price) {
    var answer = 0;
    if (price>=500000) {
        answer = price*8/10; //입력값이 10의 배수로 들어오는 것을 알고 있으므로 (/10) 연산 결과는 정수가 된다.
    } else if (price>=300000) {
        answer = price*9/10; //입력값이 10의 배수로 들어오는 것을 알고 있으므로 (/10) 연산 결과는 정수가 된다.
    } else if (price>=100000) {
        answer = Math.floor(price*95/100);
        //입력값이 100의 배수가 아닐 수 있으므로 (/100) 연산 결과는 정수가 아닐 수 있다.
        //소수점 이하를 버린 정수를 얻기 위해 Math.floor 함수를 사용한다.
    } else {
        answer = price;
    }
    return answer;
}