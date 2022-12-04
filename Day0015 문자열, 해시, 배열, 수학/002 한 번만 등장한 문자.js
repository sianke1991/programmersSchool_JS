function solution(s) {
    let charDistribution = {};
    for (let char of s) {
        if (charDistribution[char]) {
            charDistribution[char]++;
        } else {
            charDistribution[char] = 1;
        }
    }
    let singletonCharsArr = [];
    for (let char in charDistribution) {
        if (charDistribution[char]==1) singletonCharsArr.push(char);
    }
    singletonCharsArr.sort();
    var answer = singletonCharsArr.join('');
    return answer;
}