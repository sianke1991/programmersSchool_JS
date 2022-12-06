function solution(keyinput, board) {
    let characterPosition = [0, 0];                 //머쓱이의 위치
    let boardWidthEdge    = Math.floor(board[0]/2); //가로 방향의 상한
    let boardHeightEdge   = Math.floor(board[1]/2); //세로 방향의 상한
    for (let input of keyinput) {
        switch (input) {
            case "left":
                if (characterPosition[0]>-boardWidthEdge) characterPosition[0]--; 
                //왼쪽으로 움직일 수 있으면 움직인다.
                break;
            case "right":
                if (characterPosition[0]<boardWidthEdge) characterPosition[0]++;
                //오른쪽으로 움직일 수 있으면 움직인다.
                break;
            case "up":
                if (characterPosition[1]<boardHeightEdge) characterPosition[1]++;
                //위로 움직일 수 있으면 움직인다.
                break;
            case "down":
                if (characterPosition[1]>-boardHeightEdge) characterPosition[1]--;
                //아래로 움직일 수 있으면 움직인다.
                break;
        }
    } //input loop
    return characterPosition;
}