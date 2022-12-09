let romanToIdx = (roman) => {
    switch (roman) {
        case 'a': return 0;
        case 'b': return 1;
        case 'c': return 2;
        case 'd': return 3;
        case 'e': return 4;
        case 'f': return 5;
        case 'g': return 6;
        case 'h': return 7;
        case 'i': return 8;
        case 'j': return 9;
        case 'k': return 10;
        case 'l': return 11;
        case 'm': return 12;
        case 'n': return 13;
        case 'o': return 14;
        case 'p': return 15;
        case 'q': return 16;
        case 'r': return 17;
        case 's': return 18;
        case 't': return 19;
        case 'u': return 20;
        case 'v': return 21;
        case 'w': return 22;
        case 'x': return 23;
        case 'y': return 24;
        case 'z': return 25;
    }
}

function solution(before, after) {
    /*문자열 before를 구성하는 로마자 분포를 저장하는 배열*/
    let beforeProfile = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
    /*문자열 after를 구성하는 로마자 분포를 저장하는 배열*/
    let afterProfile  = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
    /*beforeProfile 구성*/
    for (let char of before) {
        beforeProfile[romanToIdx(char)]++;
    }
    /*afterProfile 구성*/
    for (let char of after) {
        afterProfile[romanToIdx(char)]++;
    }
    /*두 profile이 같아야 before를 섞어서 after를 만들 수 있다. 두 profile 배열이 같은지 여부를 조사한다.*/
    for (let i=0; i<beforeProfile.length; i++) {
        if (beforeProfile[i]!==afterProfile[i]) return 0;
    }
    return 1;
}