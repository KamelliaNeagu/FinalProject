import { http } from './http.js';
import { ui } from './ui.js';

// Get Products on DOM load
document.addEventListener('DOMContentLoaded', getProducts);

function getProducts() {
    http
        .get('http://localhost:3000/products')
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

    let product = {
        title: titleValue,
        author: authorValue,
        price: priceValue,
        image: imageValue,
        description: descriptionValue
    };

    http
        .post('http://localhost:3000/products', product)
        .then((data) => getProducts());
}

document.getElementById('products-admin').addEventListener('click', deleteProduct);

function deleteProduct(e) {
    // console.log(e.target);
    if(e.target.classList.contains('delete')) {
        const id = e.target.id;
        http.delete(`http://localhost:3000/products/${id}`)
        .then((data) => getProducts())
        .catch('Error on delete!')
    }
}

// document.getElementById('cart').addEventListener('click', deletefromCart);

// function deletefromCart(e) {
//     // console.log(e.target);
//     if(e.target.classList.contains('delete')) {
//         const id = e.target.id;
//         http.delete(`http://localhost:3000/products/${id}`)
//         .then((data) => getProducts())
//         .catch('Error on delete!')
//     }
// }

cartDiv.addEventListener ('click', deleteElement);

function deleteElement(e) {
	if(e.target.classList.contains('delete')) {
		e.target.remove();
	}
}