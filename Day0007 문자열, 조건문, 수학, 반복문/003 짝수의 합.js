function solution(n) {
    let numEvens = Math.floor(n/2);
    var answer = (numEvens)*(numEvens+1);
    return answer;
}