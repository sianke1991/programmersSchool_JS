function solution(n) {
    let noThreeIdx = 0;
    let numToCheck = 0;
    while (noThreeIdx<n) {
        numToCheck++;
        if (numToCheck%3 && String(numToCheck).indexOf("3")<0) noThreeIdx++;        
    }
    
    return numToCheck;
}