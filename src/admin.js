import { http } from './http.js';
import { ui } from './ui.js';

// Get Products on DOM load
document.addEventListener('DOMContentLoaded', getProducts);

function getProducts() {
    http
        // .get('http://localhost:3000/products')
        .get('https://60872b8ca3b9c200173b7b27.mockapi.io/products')
        .then((data) => ui.showAdminProducts(data));
}



