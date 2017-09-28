module.exports = function zeros(expression) {
  let arr = [], x, cntTen = 0, cntFive = 0, cntTwo = 0;
  expression = expression.split('*');
  for (let i = 0; i < expression.length; i++) {
    x = expression[i].search('!!');
    if (x != -1) {
      x = Number(expression[i].replace('!!', ''));
      let tmp = x;
      for (let j = 0; j < tmp / 2; j++) {
        arr = arr.concat(x);
        x -= 2;
      } 
    }     
    else {
      x = Number(expression[i].replace('!', ''));
      let tmp = x;
      for (let j = 0; j < tmp; j++) {
        arr = arr.concat(x);
        x--;
      }
    }
  }
  for (i = 0; i < arr.length; i++) {
    if (arr[i] % 5 == 0)
    ++cntFive;
    if (arr[i] % 25 == 0)
    ++cntFive;
    if (arr[i] % 2 == 0)
    ++cntTwo;
  }
  cnt = Math.min(cntFive, cntTwo);
  return cnt;
}

