function solution(my_string) {
    my_string = my_string.toLowerCase();
    let my_arr = my_string.split('');
    my_arr.sort();
    var answer = my_arr.join('');
    return answer;
}