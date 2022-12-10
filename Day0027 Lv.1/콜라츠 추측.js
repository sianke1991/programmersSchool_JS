function solution(num) {
    var answer = 0;
    let i=0;
    for (i=0; i<=500; i++) {
        if (num===1) {
            answer=i;
            break;
        }
        if (num%2===0) {
            num/=2;
        } else {
            num = num*3+1;
        }
    } //i loop
    return i>=500 ? -1 : answer;
}