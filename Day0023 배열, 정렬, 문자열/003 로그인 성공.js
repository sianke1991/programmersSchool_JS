function solution(id_pw, db) {
    let getPasswordById = {};
    for (let elem of db) {
        getPasswordById[elem[0]] = elem[1];
    }
    let realPw = undefined;
    if (realPw = getPasswordById[id_pw[0]]) { //아이디가 등록된 경우
        return realPw===id_pw[1] ? "login" : "wrong pw";
    } else { //아이디가 등록되지 않은 경우
        return "fail";
    }
}