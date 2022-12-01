function solution(hp) {
    //배열 설정
    var dpArray = new Array(hp+1);
    //여기서 dpArray(hp)는 체력 hp의 사냥감을 사냥하기 위해 필요로 하는 최소한의 개미 수를 의미한다.
    
    //초기값 설정
    dpArray[0] = 0;
    dpArray[1] = 1;
    dpArray[2] = 2; //과하게 공격력을 사용하는 것은 금지되어 있는 듯 하다.
                    //병정개미 한 마리로도 hp가 2인 사냥감을 사냥할 수 있지만 이는 공격력을 과하게 사용하는 것이다.
    dpArray[3] = 1;
    dpArray[4] = 2;
    dpArray[5] = 1;
    
    //점화식 설정
    for (let i=6; i<=hp; i++) {
        dpArray[i] = Math.min(dpArray[i-1], dpArray[i-3], dpArray[i-5])+1;
    } //i loop
    
    var answer = dpArray[hp];
    return answer;
}