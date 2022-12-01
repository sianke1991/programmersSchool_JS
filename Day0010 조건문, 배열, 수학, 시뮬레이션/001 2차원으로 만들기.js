function solution(num_list, n) {
    var answer = new Array(num_list.length/n);
    for (let i=0; i<answer.length; i++) {
        let elemArray = new Array(n);
        for (let j=0; j<n; j++) {
            elemArray[j] = num_list[n*i+j];
        } //j loop (elemArray index)
        answer[i] = elemArray;
    } //i loop (answer index)
    return answer;
}