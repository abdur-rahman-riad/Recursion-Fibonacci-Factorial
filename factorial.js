function factorial(i) {
    if (i == 1) {
        return 1;
    }
    return i * factorial(i - 1);
}
console.log(factorial(5));

/* let fact = 1;
for (let i = 5; i >= 1; i--) {
    fact = fact * i;
}
console.log(fact); */