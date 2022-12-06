function solution(polynomial) {
    let termArr = polynomial.split(" + ");
    let coefficient = 0;
    let constantTerm = 0;
    for (let term of termArr) {
        if (term.indexOf("x")<0) { //상수항인 경우
            constantTerm += parseInt(term);
        } else if (term==="x") { //1x인 경우 (계수가 생략된 경우)
            coefficient++;
        } else { //nx인 경우 (계수가 나타난 경우)
            coefficient += parseInt(term.replace("x", "")); //x를 제거한 결과를 계수에 더한다.
        }
    }
    
    if (coefficient===0) { //1차항이 없는 경우 (계수가 0인 경우) 상수항만 보여준다.
        answer = String(constantTerm);
    } else if (coefficient===1) { //1차항의 계수가 1인 경우 계수를 생략하여 보여준다.
        if (constantTerm===0) //상수항이 0인 경우 상수항은 생략한다.
            answer = "x";
        else
            answer = `x + ${constantTerm}`;
    } else { //1차항의 계수가 0, 1이 아닌 경우 계수를 생략하지 않는다.
        if (constantTerm===0)
            answer = `${coefficient}x`;
        else
            answer = `${coefficient}x + ${constantTerm}`;
    }
    return answer;
}