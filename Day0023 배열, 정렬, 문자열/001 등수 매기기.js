function solution(score) {
    let sumArr = new Array(score);
    for (let i=0; i<score.length; i++) {
        sumArr[i] = score[i][0]+score[i][1];
    }
    
    var answer = new Array(score);
    for (let i=0; i<score.length; i++) {
        let rank=1;
        for (let j=0; j<score.length; j++) {
            if (sumArr[j]>sumArr[i]) rank++;
        } //j loop
        answer[i] = rank;
    } //i loop
    return answer;
}