function solution(emergency) {
    var answer = new Array(emergency.length);
    
    for (let rank=1; rank<=emergency.length; rank++) {
        let maxIdx=0;
        for (let maxSch=1; maxSch<emergency.length; maxSch++) { //응급도가 변하지 않은 환자들 중에 가장 위험한 환자를 찾는다.
            if (emergency[maxIdx] < emergency[maxSch]) maxIdx = maxSch;
        } //maxSearch loop
        answer[maxIdx] = rank; //해당 인덱스의 순위를 기록하고,
        emergency[maxIdx] = -1; //해당 인덱스의 응급도를 최저로 변경한다.
     } //rank loop
    return answer;
}