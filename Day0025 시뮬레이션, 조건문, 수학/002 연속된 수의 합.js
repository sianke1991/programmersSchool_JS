function solution(num, total) {
    let initial = (total - (num-1)*num/2)/num; //연속된 정수로 이루어진 수열의 초항
    var answer = [];
    for (let i=0; i<num; i++) {
        answer.push(initial+i);
    }
    return answer;
}