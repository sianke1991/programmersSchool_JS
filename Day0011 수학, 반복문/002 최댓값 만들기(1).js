function solution(numbers) {
    //js에서 크기 순으로 배열 정렬
    //콜백 함수를 넣지 않으면 문자열 기준으로 배열을 정렬한다.
    numbers.sort((a, b)=>a-b);
    return numbers[numbers.length-1] * numbers[numbers.length-2];
}