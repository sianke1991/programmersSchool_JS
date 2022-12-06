function solution(numbers) {
    numbers.sort((a, b)=>a-b);
    let rightSideProd = numbers[numbers.length-1] * numbers[numbers.length-2];
    let leftSideProd  = numbers[0] * numbers[1];
    var answer = Math.max(rightSideProd, leftSideProd);
    return answer;
}