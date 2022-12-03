function solution(s) {
    let inputArray = s.split(' ');
    let recentNumber = undefined;
    var answer = 0;
    for (let input of inputArray) {
        if (input==='Z' && recentNumber!==undefined) {
            answer -= recentNumber;
            recentNumber = undefined;
        } else {
            let inputNumber = parseFloat(input);
            answer += inputNumber;
            recentNumber = inputNumber;
        }
    }
    return answer;
}