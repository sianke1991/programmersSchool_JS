function solution(my_string, n) {
    let charArr = new Array(my_string.length*n);
    let charArrIdx = 0;
    for (let char of my_string) {
        for (let i=0; i<n; i++) {
            charArr[charArrIdx] = char;
            charArrIdx++;
        } //i loop
    } //char loop
    var answer = charArr.join('');
    return answer;
}