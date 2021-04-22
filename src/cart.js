import { ui } from './ui.js';
import { getCartFromLocalStorage } from './localStorage.js';

document.addEventListener('DOMContentLoaded', () => {
	let storageItems = getCartFromLocalStorage();
	ui.showProductsCart(storageItems);
	getCartTotal(storageItems);
});

function getCartTotal (storageItems) {
	let total = 0;

	for (let item of storageItems) {
		let numberOfProducts = parseInt(item.count);
		let productPrice = parseInt(item.product.price);
		total = total + numberOfProducts * productPrice;
	}
	console.log(total);
	addEventListener('DOMContentLoaded', () => {
		document.getElementById('total').innerHTML += total + " " + "Lei";
		
	});
	return total;
}

let buyProducts = document.getElementById('buyProducts');

buyProducts.addEventListener('click', () => {
	let storageItems = getCartFromLocalStorage();
	if(storageItems == 0) {
		Swal.fire({
			icon: 'error',
			title: 'Oops...',
			text: 'Coșul dumneavoastră este gol!',
			footer: '<a href ="index.html">Adăugați produse în coș!</a>'
		})
	} else {
		Swal.fire(
			'Vă mulțumim!',
			'Comandă recepționată.',
			'success'
		)
	} 
});

