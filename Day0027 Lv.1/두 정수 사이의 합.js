let sumZeroTo = (num) => {
    if (num>=0) return num*(num+1)/2;
    else        return -sumZeroTo(-num);
}

function solution(a, b) {
    if (a===b) {
        return a;
    } else if (a===0) {
        return sumZeroTo(b);
    } else if (b===0) {
        return sumZeroTo(a);
    }
    let max = Math.max(a, b);
    let min = Math.min(a, b);
    
    if (min>0) { //두 수가 전부 양수일 경우
        return sumZeroTo(max)-sumZeroTo(min-1);
    } else if (max<0) { //두 수가 전부 음수일 경우
        return sumZeroTo(min)-sumZeroTo(max+1);
    } else { //두 수의 부호가 서로 다른 경우
        return sumZeroTo(max)+sumZeroTo(min);
    }
}