function solution(sides) {
    //배열을 가변 인자로 넣어주기
    let maxSide = Math.max(...sides);
    //세 선분의 합이 가장 긴 선분의 두 배보다 길면 세 선분으로 삼각형을 만들 수 있다.
    //(입력값의 특성 상 음수는 들어오지 않는다고 한다.)
    return 2*maxSide<(sides[0]+sides[1]+sides[2]) ? 1 : 2;
}