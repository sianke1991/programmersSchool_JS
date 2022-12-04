function solution(my_string, num1, num2) {
    let strArr = my_string.split('');
    let charAtNum1 = strArr[num1];
    strArr[num1] = strArr[num2];
    strArr[num2] = charAtNum1;
    var answer = strArr.join('');
    return answer;
}