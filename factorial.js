function fact(num) {
  if (num == 1){
    return 1;
  }
  else{
      return num * fact(num-1);
  }
}
 
ans = fact(3);
console.log(ans);