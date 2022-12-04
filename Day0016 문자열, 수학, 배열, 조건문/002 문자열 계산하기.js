function solution(my_string) {
    let inputArr = my_string.split(' ');
    var answer = parseInt(inputArr[0]);
    let idx = 1;
    let operator = '';
    let operand = 0;
    while (idx<inputArr.length) {
        operator = inputArr[idx];
        idx++;
        operand = parseInt(inputArr[idx]);
        switch (operator) {
            case '+':
                answer+=operand;
                break;
            case '-':
                answer-=operand;
                break;
        }
        idx++;
    }
    return answer;
}