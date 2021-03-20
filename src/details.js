import { http } from './http.js';
import { ui } from './ui.js';

// document.addEventListener('DOMContentLoaded', getDetails);

window.onload = () => {
    if (window.location.search !== '') {
        const id = window.location.search.split('=')[1];
        http
            .get(`http://localhost:3000/products/${id}`)
            .then((data) => ui.showDetails(data));	
    }
}


