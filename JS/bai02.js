
function fibonacci(n) {
    let a = 0, b = 1;
    
    if (n === 0) return a;
    if (n === 1) return b;

    for (let i = 2; i <= n; i++) {
        let temp = a + b;
        a = b;
        b = temp;
    }

    return b;
}

console.log(fibonacci(5));
