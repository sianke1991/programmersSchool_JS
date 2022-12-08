/**
 * 발음 가능한 단어들
 */
 const pronounceableWords = ["aya", "ye", "woo", "ma"];

 /**
  * 발음 가능한 문자열들
  */
 let pronounceableStrings = {"aya":true,"ye":true,"ma":true,"ayaye":true,"ayawoo":true,"ayama":true,"yeaya":true,"yewoo":true,"wooyema":true,"yema":true,"wooaya":true,"wooye":true,"wooma":true,"maaya":true,"maye":true,"mawoo":true,"ayayewoo":true,"ayawooye":true,"ayayema":true,"mayewooaya":true,"ayawooma":true,"ayamaye":true,"ayamawoo":true,"yewoomaaya":true,"yeayawoo":true,"yeayama":true,"yewooaya":true,"yewooma":true,"yemaaya":true,"yemawoo":true,"woo":true,"wooayama":true,"wooyeaya":true,"woomaaya":true,"woomaye":true,"maayaye":true,"maayawoo":true,"mayewoo":true,"mayeaya":true,"mawooye":true,"mawooaya":true,"ayayewooma":true,"ayayemawoo":true,"ayawooyema":true,"wooayaye":true,"":true,"ayawoomaye":true,"ayamayewoo":true,"ayamawooye":true,"yeayawooma":true,"yeayamawoo":true,"yewooayama":true,"yemaayawoo":true,"yemawooaya":true,"wooayayema":true,"wooayamaye":true,"wooyeayama":true,"wooyemaaya":true,"woomaayaye":true,"woomayeaya":true,"maayayewoo":true,"maayawooye":true,"mayeayawoo":true,"mawooayaye":true,"mawooyeaya":true};
 
 
 function solution(babbling) {
     var answer = 0;
     for (let str of babbling) {
         if (str in pronounceableStrings) answer++;
     }
     return answer;
 }