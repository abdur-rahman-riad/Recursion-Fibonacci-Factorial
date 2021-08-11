const products = [
    { productName: 'htc 728 phone', price: 22000 },
    { productName: 'acer core i5', price: 60000 },
    { productName: 'samsung phone', price: 1200 },
    { productName: 'mouse', price: 1800 },
    { productName: 'redmi 6 phone', price: 12800 },
    { productName: 'pendrive', price: 1800 },
];

function searchProducts(products, search) {
    for (const product of products) {
        if (product.productName.indexOf(search) != -1) {
            console.log(product.productName);
        }
    }
}
searchProducts(products, 'p');