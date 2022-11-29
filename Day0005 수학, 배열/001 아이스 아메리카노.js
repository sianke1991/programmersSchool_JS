function solution(money) {
    let remains = money%5500; //잔돈. 5500은 아이스 아메리카노 한 잔의 가격
    let numCups = (money-remains)/5500; //구입 가능한 아이스 아메리카노 잔의 개수    
    var answer = [numCups, remains];
    return answer;
}