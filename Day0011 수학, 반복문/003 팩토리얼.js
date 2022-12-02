let factorial = [1, 1, 2, 6, 24, 120, 720, 5040, 40320, 362880, 3628800, 39916800];

function solution(n) {
    for (let i=0; i<factorial.length; i++) {
        if (factorial[i]>n) return i-1;
    }
}