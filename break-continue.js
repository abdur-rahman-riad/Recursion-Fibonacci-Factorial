const products = [
    { productName: 'htc 728 phone', price: 22000 },
    { productName: 'acer core i5', price: 60000 },
    { productName: 'samsung phone', price: 1200 },
    { productName: 'mouse', price: 1800 },
    { productName: 'redmi 6 phone', price: 12800 },
    { productName: 'pendrive', price: 1800 },
];

for (const product of products) {
    if (product.price < 5000) {
        continue;
    }
    console.log(product.productName);
}