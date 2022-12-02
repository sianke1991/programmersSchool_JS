function solution(my_string) {
    //replace 메서드는 교체하고자 하는 문자열 중 맨 먼저 등장하는 것만 교체한다.
    //문자열 내에 교체하고자 하는 문자열 전부를 교체하려면 replaceAll 메서드를 사용한다.
    var answer = my_string.replaceAll('a', '')
                          .replaceAll('e', '')
                          .replaceAll('i', '')
                          .replaceAll('o', '')
                          .replaceAll('u', '');
    return answer;
}