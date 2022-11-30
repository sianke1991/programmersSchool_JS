function solution(n, k) {
    let priceLambSkewers = n*12000;
    let numDrinksOnTheHouse = Math.floor(n/10);
    let priceDrinks = Math.max(k-numDrinksOnTheHouse, 0)*2000;
    
    var answer = priceLambSkewers + priceDrinks;
    return answer;
}