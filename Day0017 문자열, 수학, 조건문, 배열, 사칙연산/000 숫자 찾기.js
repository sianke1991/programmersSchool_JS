function solution(num, k) {
    let str = String(num); //정수 num을 문자열로 변환
    for (let i=0; i<str.length; i++) {
        if (str[i]==k) { //문자와 정수를 비교하기 위해 === 대신 == 사용
            return (i+1); //i는 인덱스 값이고, 이를 ...번째 값으로 변환하기 위해 1을 더해준다.
        }
    } //i loop
    return -1;
}