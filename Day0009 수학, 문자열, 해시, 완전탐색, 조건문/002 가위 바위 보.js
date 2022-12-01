/**key를 이길 수 있는 선택을 value에 둔다.*/
let winningChoice = {"2":"0", "0":"5", "5":"2"};

function solution(rsp) {
    let winningArray = new Array(rsp.length);
    for (let i=0; i<rsp.length; i++) {
        winningArray[i] = winningChoice[rsp[i]];
    }
    var answer = winningArray.join('');
    return answer;
}