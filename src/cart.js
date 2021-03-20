import { http } from './http.js';
import { ui } from './ui.js';

// Get Products on DOM load
window.onload = () => {
    if (window.location.search !== '') {
        const id = window.location.search.split('=')[1];
        http
            .get(`http://localhost:3000/products/${id}`)
            .then((data) => ui.showProductsCart(data));	
    }
}

let addtocartBtn = document.getElementById('addtocartBtn');

localStorage.setItem('products', `${id}`);

detailsDiv.addEventListener('click', saveProductsFromCart);

function saveProductsFromCart() {
	localStorage.setItem('products', `${id}`);
	localStorage.setItem('products', product);
	localStorage.setItem('products', JSON.stringify(product));
}

addtocartBtn.addEventListener('click', getProductsFromCart);

function getProductsFromCart() {
	const products = JSON.parse(localStorage.getItem('products'));
	console.log(products);
}
