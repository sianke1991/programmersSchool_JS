let rightShift = (str) => {
    let arr = new Array(str.length);
    arr[0] = str[str.length-1];
    for (let i=1; i<arr.length; i++) {
        arr[i] = str[i-1];
    }
    return arr.join('');
};

function solution(A, B) {
    for (let i=0; i<A.length; i++) {
        if (A===B) return i;
        A = rightShift(A);
    } 
    
    var answer = -1;
    return answer;
}