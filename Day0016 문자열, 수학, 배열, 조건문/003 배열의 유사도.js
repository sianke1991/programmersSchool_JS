function solution(s1, s2) {
    let s1Object = {};
    let s2Object = {};
    for (let elem of s1) s1Object[elem] = true;
    for (let elem of s2) s2Object[elem] = true;
    var answer = 0;
    for (let key in s1Object) {
        if (s2Object[key]) answer++;
    }
    return answer;
}