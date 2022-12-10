function solution(s) {
    let numPs = 0, numYs = 0;
    for (let char of s) {
        switch (char) {
            case 'p': case 'P':
                numPs++;
                break;
            case 'y': case 'Y':
                numYs++;
                break;
        }
    } //char loop
    var answer = numPs===numYs;

    // [실행] 버튼을 누르면 출력 값을 볼 수 있습니다.
    console.log('Hello Javascript')

    return answer;
}