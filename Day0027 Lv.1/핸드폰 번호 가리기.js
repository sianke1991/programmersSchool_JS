/**
 * 길이 length 만큼의 별표 문자열을 반환한다.
 * 음의 값이 들어올 경우 빈 문자열을 반환한다.
 */
let getAsterisks = (length) => {
    if (length<=0) return "";
    let tmpArr = new Array(length);
    for (let i=0; i<length; i++) {
        tmpArr[i] = '*';
    }
    return tmpArr.join('');
}

function solution(phone_number) {
    let len    = phone_number.length;
    var answer = `${getAsterisks(len-4)}${phone_number.substring(len-4, len)}`;
    return answer;
}