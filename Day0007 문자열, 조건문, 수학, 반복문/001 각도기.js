function solution(angle) {
    if (angle===90) return 2;
    switch (Math.floor(angle/90)) {
        case 0:
            return 1;
        case 1:
            return 3;
        case 2:
            return 4;
    }
}