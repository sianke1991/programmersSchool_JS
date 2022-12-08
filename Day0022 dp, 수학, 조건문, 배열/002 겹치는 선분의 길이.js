/**
 * 해당 점이 해당 선 위에 있는지 여부를 반환한다.<br/>
 * 점이 선 위에 있으면 1을, 그렇지 않으면 0을 반환한다.
 */
 let isOverLine = (point, line) => point>=Math.min(line[0], line[1]) && point<=Math.max(line[0], line[1]);

 function solution(lines) {
     var answer = 0;
     for (let point = -99.5; point<=99.5; point+=1.0) {
         let isOverLine0 = isOverLine(point, lines[0]);
         let isOverLine1 = isOverLine(point, lines[1]);
         let isOverLine2 = isOverLine(point, lines[2]);
         if (isOverLine0+isOverLine1+isOverLine2>1) answer++;
     }
     return answer;
 }