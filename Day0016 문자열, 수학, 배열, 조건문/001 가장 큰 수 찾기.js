function solution(array) {
    let maxValue = array[0];
    let maxIndex = 0;
    for (let i=1; i<array.length; i++) {
        if (array[i]>maxValue) {
            maxValue = array[i];
            maxIndex = i;
        }
    }
    var answer = [maxValue, maxIndex];
    return answer;
}