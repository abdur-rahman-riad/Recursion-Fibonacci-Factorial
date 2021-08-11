function sum(i) {
    if (i == 1) {
        return 1;
    }
    return sum(i - 1) + i;
}
console.log(sum(5));

/* function sumAgain(j) {
    if (j == 5) {
        return 5;
    }
    return sumAgain(j + 1) + j;
}
console.log(sumAgain(1)); */


// Increment
/* let sum = 0;
for (let i = 1; i <= 6; i++) {
    sum = sum + i;
}
console.log(sum); */


//Decrement
/* let sum = 0;
for (let i = 6; i >= 1; i--) {
    sum = sum + i;
}
console.log(sum); */