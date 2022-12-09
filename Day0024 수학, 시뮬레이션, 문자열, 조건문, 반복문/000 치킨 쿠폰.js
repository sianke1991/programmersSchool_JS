function solution(chicken) {
    var answer = 0;
    
    let remainCoupons = chicken;
    while (remainCoupons>=10) { //남은 쿠폰 개수가 10 장 이상이면 서비스 받는 치킨이 남아있다는 뜻이다.
        let chickensFree = Math.floor(remainCoupons/10);
        answer += chickensFree;
        remainCoupons -= chickensFree*9; //서비스 받는 치킨 한 마리당 쿠폰 9 장이 감소한다.
    }    
    return answer;
}