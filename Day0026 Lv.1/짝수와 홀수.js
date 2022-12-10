function solution(num) {
    var answer = '';
    switch (num%2) {
        case 0:
            answer="Even"; 
            break;
        default: 
            answer="Odd"; 
            break;
    }
    return answer;
}