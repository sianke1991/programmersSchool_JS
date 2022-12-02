let isDigit = {"0": true, "1": true, "2": true, "3": true, "4": true, "5": true, "6": true, "7": true, "8":true, "9": true};

function solution(my_string) {
    var answer = 0;
    for (let char of my_string) {
        if (isDigit[char]) answer+=parseInt(char);
    }    
    return answer;
}