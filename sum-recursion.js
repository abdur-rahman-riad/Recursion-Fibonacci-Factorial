function summation(i) {
    if (i == 5) {
        return 5;
    }
    return i + summation(i + 1);
}
console.log(summation(1));