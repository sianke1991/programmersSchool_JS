function solution(box, n) {
    let boxWidth = box[0];
    let boxHeight = box[1];
    let boxDepth = box[2];
    let numDiceWidth = Math.floor(boxWidth/n);
    let numDiceHeight = Math.floor(boxHeight/n);
    let numDiceDepth = Math.floor(boxDepth/n);
    let answer = numDiceWidth * numDiceHeight * numDiceDepth
    return answer;
}