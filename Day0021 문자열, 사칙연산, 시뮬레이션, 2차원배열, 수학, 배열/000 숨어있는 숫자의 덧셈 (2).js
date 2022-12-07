function solution(my_string) {
    let roman     = /[a-zA-Z]/;
    let digitsArr = my_string.split(roman);
    var answer = 0;
    for (let num of digitsArr) {
        if (num==="") continue;
        answer += parseInt(num);
    }    
    return answer;
}