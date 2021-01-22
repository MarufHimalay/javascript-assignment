// fib = [0, 1]
// for (i=2; i<=10; i++){
//     fib[i] = fib[i-1] + fib[i-2];
// }
// console.log(fib);

function fibonacci(n){
    if (n===0){
        return [0];
    }
    else if (n==1){
        return[0, 1];
    }
    else{
        var fib = fibonacci(n-1);
        var nextElement = fib[n-1]+fib[n-2];
        fib.push(nextElement);
        return fib;
    }
}
result = fibonacci(5);
console.log(result);