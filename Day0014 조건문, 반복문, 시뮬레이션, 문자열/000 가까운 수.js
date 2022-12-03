function solution(array, n) {
    let minDif = array[0]-n;
    let closestElem = array[0];
    
    for (let elem of array) {
        let dif = elem-n;
        if (Math.abs(minDif) > Math.abs(dif)) { //더 가까운 수를 찾았을 때
            minDif = dif;
            closestElem = elem;
        } else if (Math.abs(minDif) === Math.abs(dif) && minDif>dif) { //가까운 정도는 같으나 더 작은 값을 찾았을 때
            closestElem = elem;
        }
    }
    
    var answer = closestElem;
    return answer;
}