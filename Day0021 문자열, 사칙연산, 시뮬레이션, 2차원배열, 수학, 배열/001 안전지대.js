const dRow = [-1, -1, 0, 1, 1, 1, 0, -1];
const dCol = [0, 1, 1, 1, 0, -1, -1, -1];

/**
 * 2차원 배열 board 내의 row 행, col 열이 안전한 지역인지 여부를 반환한다.
 */
let isSafeSquare = (row, col, board) => {
    if (board[row][col]) return false;
    let boardSize = board.length;
    for (let i=0; i<dRow.length; i++) {
        let nRow = row+dRow[i];
        let nCol = col+dCol[i];
        if (nRow<0 || nRow>=boardSize || nCol<0 || nCol>=boardSize) {
            continue; //out of bounds
        }
        if (board[nRow][nCol]) return false;
    } //i loop
    return true;
}

function solution(board) {
    var answer = 0;
    let boardSize = board.length;
    for (let row=0; row<boardSize; row++) {
        for (let col=0; col<boardSize; col++) {
            if (isSafeSquare(row, col, board)) answer++;
        } //col loop
    } //row loop
    return answer;
}