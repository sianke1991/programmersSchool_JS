/**
 *  spell 내의 로마자를 조합하여 word를 구성할 수 있는지 여부를 반환하는 함수
 */
 let isUnique = (word, spell) => {
    if (word.length!=spell.length) return false;
    let wordObj = {}; //word 안의 알파벳을 키로 갖는 object
    for (let char of word) {
        wordObj[char] = true;
    }
    for (let char of spell) { //spell 내의 로마자가 전부 word 안에 포함되어 있는가를 계산한다.
        if (!(char in wordObj)) return false;
    }
    return true;
}

function solution(spell, dic) {
    for (let word of dic) {
        if (isUnique(word, spell)) return 1;
    }
    return 2;
}