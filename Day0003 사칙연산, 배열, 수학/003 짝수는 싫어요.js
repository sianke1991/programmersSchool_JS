function solution(n) {
    let oddArray = null;
    
    if (n%2) { //if n is odd
        oddArray = new Array((n+1)/2);
    } else {
        oddArray = new Array(n/2);
    }
    
    for (let i=0; i<oddArray.length; i++) {
        oddArray[i] = 2*i+1;
    } //i loop

    var answer = oddArray;
    return answer;
}