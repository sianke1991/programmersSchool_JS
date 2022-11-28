function solution(array) {
    array.sort((a, b) => (a-b));
    var answer = array[(array.length-1)/2];
    return answer;
}