function memoize (fn) {
    const cache = {};
    return function (...args){
        const key = JSON.stringify(args);
        if(cache[key]) {
            console.log("Fetching from cache:", key);
            return cache[key];
        }
        else{
            console.log("Calculating result for:", key);
            let result = fn(...args);
            cache[key] = result;
            return result;
        }
    }
}

//expensvie function

const fib = n => {
    if(n<=1) return 1;
    return fib(n-1) + fib(n-2);
}

const memoizedfib = memoize(fib);

console.log(memoizedfib(5));
console.log(memoizedfib(6));
console.log(memoizedfib(5));