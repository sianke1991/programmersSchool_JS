let combiArray = new Array(31);
for (let i=0; i<31; i++) combiArray[i] = new Array(i+1);

/**
 * a choose b를 계산하여 반환한다.
 */
function combi(a, b) {
    //base case
    if (a<=0) return 1;
    if (b<=0) return 1;
    if (b>=a) return 1;
    
    //이전에 계산하여 적어둔 값이 있으면 이를 반환한다.
    if (combiArray[a][b]!==undefined) return combiArray[a][b];
    
    //점화식 설정
    combiArray[a][b] = combi(a-1, b-1) + combi(a-1, b);
    return combiArray[a][b];
}


function solution(balls, share) {
    var answer = combi(balls, share);
    return answer;
}