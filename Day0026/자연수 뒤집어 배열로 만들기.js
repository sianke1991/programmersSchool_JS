function solution(n) {
    let str = String(n);
    var answer = new Array(str.length);
    for (let i=0; i<str.length; i++)
        answer[i] = parseInt(str[str.length-1-i]);
    return answer;
}