const X = 0;
const Y = 1;

/**
 * 두 점을 입력받아 기울기=[dx, dy]를 반환한다.
 */
let slope = (dot0, dot1) => {
    let result = [0, 0];
    result[X] = dot1[X]-dot0[X];
    result[Y] = dot1[Y]-dot0[Y];
    return result;
};

/**
 * 두 기울기를 입력받아 서로 동일한지 여부를 반환한다.
 */
let equals = (slope0, slope1) => {
    return slope0[X]*slope1[Y]===slope1[X]*slope0[Y];
};

function solution(dots) {
    //직선01과 직선23의 기울기가 같으면 1 반환
    let slope01 = slope(dots[0], dots[1]);
    let slope23 = slope(dots[2], dots[3]);
    if (equals(slope01, slope23)) return 1;
    //직전02와 직선13의 기울기가 같으면 1 반환
    let slope02 = slope(dots[0], dots[2]);
    let slope13 = slope(dots[1], dots[3]);
    if (equals(slope02, slope13)) return 1;
    //직선03과 직선12의 기울기가 같으면 1 반환
    let slope03 = slope(dots[0], dots[3]);
    let slope12 = slope(dots[1], dots[2]);
    if (equals(slope03, slope12)) return 1;
    //그 외의 경우 0 반환
    else return 0;
}