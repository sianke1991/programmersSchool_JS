function solution(num_list) {
    let numOdds  = 0;
    for (let num of num_list) {
        if (num%2) {
            numOdds++;
        }
    }
    var answer = [num_list.length-numOdds, numOdds];
    return answer;
}