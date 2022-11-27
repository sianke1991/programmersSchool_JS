function solution(numbers) {
    var answer = new Array(numbers.length);
    let i=0;
    for (number of numbers) { //array에 대해서 또는 object의 value에 대해서 루프를 돌 때는 for/of를 사용한다.
        answer[i] = number<<1;
        i++;
    }
    return answer;
}