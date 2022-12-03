let isUpperCase = {"A":"a", "B":"b", "C":"c", "D":"d", "E":"e", "F":"f", "G":"g", "H":"h", "I":"i", "J":"j", "K":"k", "L":"l", "M":"m", "N":"n", "O":"o", "P":"p", "Q":"q", "R":"r", "S":"s", "T":"t", "U":"u", "V":"v", "W":"w", "X":"x", "Y":"y", "Z":"z"};
let isLowerCase = {"a":"A", "b":"B", "c":"C", "d":"D", "e":"E", "f":"F", "g":"G", "h":"H", "i":"I", "j":"J", "k":"K", "l":"L", "m":"M", "n":"N", "o":"O", "p":"P", "q":"Q", "r":"R", "s":"S", "t":"T", "u":"U", "v":"V", "w":"W", "x":"X", "y":"Y", "z":"Z"};

function solution(my_string) {
    var answer = new Array(my_string.length);
    for (let i=0; i<my_string.length; i++) {
        let caseConvert = undefined;
        if (caseConvert=isUpperCase[my_string[i]]) answer[i] = caseConvert;
        else if (caseConvert=isLowerCase[my_string[i]]) answer[i] = caseConvert;
    } //i loop
    return answer.join('');
}