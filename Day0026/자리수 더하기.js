function solution(n)
{
    var answer = 0;
    let str = String(n);
    for (let char of str) {
        answer+=parseInt(char);
    }
    // [실행] 버튼을 누르면 출력 값을 볼 수 있습니다.
    console.log('Hello Javascript')

    return answer;
}