function solution(my_string) {
    let charArr = my_string.split('');
    charArr.reverse();
    var answer = charArr.join('');
    return answer;
}