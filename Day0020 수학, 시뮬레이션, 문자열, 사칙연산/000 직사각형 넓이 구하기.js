function solution(dots) {
    //입력값이 -256 초과 256 미만이라는 사실을 알고 있으므로 최대치, 최소치를 구할 때 초기값을 설정할 수 있다.
    let minX = 256;
    let maxX = -256;
    let minY = 256;
    let maxY = -256;
    
    for (elem of dots) {
        let xCoor = elem[0];
        let yCoor = elem[1];
        if (xCoor < minX) minX = xCoor;
        if (xCoor > maxX) maxX = xCoor;
        if (yCoor < minY) minY = yCoor;
        if (yCoor > maxY) maxY = yCoor;
    }
    
    return (maxX-minX)*(maxY-minY);
}