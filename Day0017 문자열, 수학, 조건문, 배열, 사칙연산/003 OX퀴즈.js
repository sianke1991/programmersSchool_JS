/**
 * 등식 equation을 입력받아 해당 등식이 옳은지 여부를 반환한다.
 */
 let isCorrect = (equation) => {
    let itmArr = equation.split(' ');
    let operand0 = parseInt(itmArr[0]);
    let operator = itmArr[1];
    let operand1 = parseInt(itmArr[2]);
    let rhs      = parseInt(itmArr[4]);
    switch (operator) {
        case "+":
            return rhs === operand0+operand1;
        case "-":
            return rhs === operand0-operand1;
        default:
            return false;
    }
}

function solution(quiz) {
    var answer = [];
    for (let equation of quiz) {
        if (isCorrect(equation)) answer.push("O");
        else answer.push("X");
    }    
    return answer;
}