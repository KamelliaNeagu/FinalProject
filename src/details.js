import { http } from './http.js';
import { ui } from './ui.js';

window.onload = () => {
    if (window.location.search !== '') {
        const id = window.location.search.split('=')[1];
        http
            // .get(`http://localhost:3000/products/${id}`)
            .get(`https://60872b8ca3b9c200173b7b27.mockapi.io/products/${id}`)
            .then((data) => ui.showDetails(data));	
    }
}



