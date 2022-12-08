function solution(numlist, n) {
    var answer = [...numlist];
    answer.sort((a, b) => {
        if (Math.abs(a-n) > Math.abs(b-n)) return 1; //a가 [n을 기준으로] 더 먼 경우
        else if (Math.abs(a-n) < Math.abs(b-n)) return -1; //a가 [n을 기준으로] 더 가까운 경우
        else return b-a; //a와 b가 [n을 기준으로] 동일한 거리에 있는 경우 (이 경우 역순 정렬)
    });
    return answer;
}