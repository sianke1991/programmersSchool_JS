let morse = { 
    '.-':'a','-...':'b','-.-.':'c','-..':'d','.':'e','..-.':'f',
    '--.':'g','....':'h','..':'i','.---':'j','-.-':'k','.-..':'l',
    '--':'m','-.':'n','---':'o','.--.':'p','--.-':'q','.-.':'r',
    '...':'s','-':'t','..-':'u','...-':'v','.--':'w','-..-':'x',
    '-.--':'y','--..':'z'
};

function solution(letter) {
    let codeArray = letter.split(" ");
    let alphabetArray = new Array(codeArray.length);
    for (let i=0; i<codeArray.length; i++) {
        alphabetArray[i] = morse[codeArray[i]];
    }
    return alphabetArray.join('');
}