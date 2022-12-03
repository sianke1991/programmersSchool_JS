function solution(cipher, code) {
    var answer = [];
    let idx = code-1;
    while (idx<cipher.length) {
        answer.push(cipher[idx]); //index가 code-1, code*2-1, code*3-1 ... 번째인 문자만 취하여 배열에 넣는다.
        idx+=code;
    }
    return answer.join('');
}