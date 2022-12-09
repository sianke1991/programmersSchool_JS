function solution(common) {
    var answer = 0;
    if (common[1]*2 === common[0]+common[2]) { //등차수열인 경우
        let dif = common[1]-common[0]; //공차
        answer = common[common.length-1]+dif;
    } else if (common[1]*common[1] === common[0]*common[2]) { //등비수열인 경우
        let rto = common[1]/common[0]; //공비
        answer = common[common.length-1]*rto;
    }    
    return answer;
}