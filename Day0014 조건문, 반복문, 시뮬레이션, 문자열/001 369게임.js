let is369 = {"3": true, "6": true, "9": true};
function solution(order) {
    //String으로의 형 변환
    let strOrder = String(order);
    var answer = 0;
    for (let char of strOrder) {
        if (is369[char]) answer++;
    }
    return answer;
}