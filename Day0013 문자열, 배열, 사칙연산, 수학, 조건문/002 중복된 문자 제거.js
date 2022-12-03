function solution(my_string) {
    let doesCharExist = {};
    var answer = [];
    for (let char of my_string) {
        if (!doesCharExist[char]) {
            doesCharExist[char] = true;
            answer.push(char);
        }
    }
    return answer.join('');
}