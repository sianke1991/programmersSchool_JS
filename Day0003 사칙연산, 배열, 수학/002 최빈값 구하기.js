function solution(array) {
    const distributionArray = new Array(1000);
    distributionArray[0] = 0; //distributionArray[0]은 null, undefined가 아닐 필요가 있다.
    for (let val of array) {
        if (distributionArray[val] === undefined) {
            distributionArray[val] = 1;
        } else {
            distributionArray[val]++;
        }
    }
    let mode = 0;
    let isDuplicated = false;
    for (let i=1; i<distributionArray.length; i++) {
        if (distributionArray[mode] < distributionArray[i]) {
            mode = i;
            isDuplicated = false;
        } else if (distributionArray[mode] === distributionArray[i]) {
            isDuplicated = true;
        }
    } //i loop
    var answer = isDuplicated ? -1 : mode;
    return answer;
}