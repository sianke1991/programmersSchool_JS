function solution(sides) {
    let sideA = sides[0];
    let sideB = sides[1];
    //정수 sideC의 최대치는 sideA+sideB-1
    //최소치는 Math.abs(sideA-sideB)+1 이다. 이 사이에 들어올 수 있는 정수의 개수를 구한다.
    var answer = (sideA+sideB-1)-(Math.abs(sideA-sideB)+1)+1;
    return answer;
}