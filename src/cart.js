import { ui } from './ui.js';
import { getCartFromLocalStorage } from './localStorage.js';

document.addEventListener('DOMContentLoaded', () => {
  let storageItems = getCartFromLocalStorage();
  ui.showProductsCart(storageItems);
  console.log("total = " + getCartTotal(storageItems));
  storageItems.forEach((item) => {console.log("subtotal: "+getElementSubtotal(item));})
});

function getCartTotal (storageItems) {
	let total = 0;
	for (let item of storageItems) {
		let numberOfProducts = parseInt(item.count);
		let productPrice = parseInt(item.product.price);
		total = total + numberOfProducts * productPrice;
	}
	return total;
}

function getElementSubtotal (storageElement) {
	let numberOfProducts = parseInt(storageElement.count);
	let productPrice = parseInt(storageElement.product.price);
	return numberOfProducts*productPrice;
}