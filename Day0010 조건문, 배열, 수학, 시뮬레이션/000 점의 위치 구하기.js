function solution(dot) {
    let x = dot[0];
    let y = dot[1];
    var answer = 0;
    if (x>0) {
        answer = y>0 ? 1 : 4;
    } else {
        answer = y>0 ? 2 : 3;
    }
    return answer;
}