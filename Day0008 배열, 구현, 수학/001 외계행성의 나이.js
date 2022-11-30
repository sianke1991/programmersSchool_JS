//다행히도 PROGRAMMERS-962 행성에서도 10진법이 사용되고 있었군요!!
function solution(age) {
    let ageArr = String(age).split('');
    for (let i=0; i<ageArr.length; i++) {
        switch (ageArr[i]) {
            case '0':
                ageArr[i]='a';  //javascript 에서는 char와 string을 구분하지 않는다.
                break;          //ageArr[i] = 'a'+parseInt(ageArr[i]); 으로 작성한 경우
            case '1':           //문자열 concat이 이루어진다.
                ageArr[i]='b';
                break;
            case '2':
                ageArr[i]='c';
                break;
            case '3':
                ageArr[i]='d';
                break;
            case '4':
                ageArr[i]='e';
                break;
            case '5':
                ageArr[i]='f';
                break;
            case '6':
                ageArr[i]='g';
                break;
            case '7':
                ageArr[i]='h';
                break;
            case '8':
                ageArr[i]='i';
                break;
            case '9':
                ageArr[i]='j';
                break;
        }
    }
    var answer = ageArr.join('');
    return answer;
}