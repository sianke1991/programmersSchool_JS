function solution(n) {
    let arr = String(n).split(''); //n의 각 숫자를 원소로 하는 배열
    arr.sort().reverse(); //arr을 내림차순으로 정렬
    var answer = parseInt(arr.join('')); //arr을 하나로 합쳐서 정수로 만듦
    return answer;
}