module.exports = function zeros(expression) {
  let arr = expression.split('*'), x = 0, cnt50 = 0, cnt20 = 0, cntTen = 0, cntFive = 0, cntTwo = 0, cnt = 0;
  for (let i = 0; i < arr.length; i++) {
    x = arr[i].search('!!');
    let str = arr[i], num = parseInt(str.substring(0,x));
    if (x != -1) {
      if (num % 10 == 0 && num > 50)
      cnt50 += Math.floor(num / 50);
      cnt20 += Math.floor(num / 20);
      if (num % 10 == 0) {
      cntTen += num / 10;
      cntTwo += num / 2;
      }
      if (num % 2 == 0)   
      cntTwo += num / 2;
      else
      cntFive += Math.floor(num / 5);
    }
    else {
      x = arr[i].search('!');
      str = arr[i], num = parseInt(str.substring(0,x));
      cntFive += Math.floor(num / 5);
      cntTwo += Math.floor(num / 2);
      // if (num % 10 == 0) {
      // cntFive += num / 5;
      // cntTwo += num / 2;
      // }
      // else
      // cntFive += Math.floor(num / 5);
      // cntTwo += Math.floor(num / 2);
    }    
  } 
  cnt = Math.min(cnt50, cnt20) + cntTen + Math.min(cntFive, cntTwo);
  return cnt;
}

