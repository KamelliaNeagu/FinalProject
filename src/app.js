import { http } from './http.js';
import { ui } from './ui.js';

// Get Products on DOM load
document.addEventListener("DOMContentLoaded", () => {
    getProducts();
});

function getProducts() {
    http
        .get("https://60872b8ca3b9c200173b7b27.mockapi.io/products")
        .then((data) => ui.showProducts(data));
}

// Add product to db
document.getElementById('add-product').addEventListener('click', addNewProduct);

function addNewProduct() {
    const titleValue = document.getElementById('title').value;
    const authorValue = document.getElementById('author').value;
    const priceValue = document.getElementById('price').value;
    const imageValue = document.getElementById('image').value;
    const descriptionValue = document.getElementById('description').value;
    const stocValue = document.getElementById('stoc').value;

    let product = {
        title: titleValue,
        author: authorValue,
        price: priceValue,
        image: imageValue,
        description: descriptionValue,
        stoc: stocValue
    };

    http
        .post("https://60872b8ca3b9c200173b7b27.mockapi.io/products", product)
        .then((data) => getProducts());
}

document.getElementById('products-admin').addEventListener('click', deleteProduct);

function deleteProduct(e) {
    if(e.target.classList.contains('delete')) {
        const id = e.target.id;
        http.delete(`https://60872b8ca3b9c200173b7b27.mockapi.io/products/${id}`)
        .then((data) => getProducts())
        .catch('Error on delete!')
    }
}

