import { addProductsInLocalStorage, updateQuantityInLocalStorage, getElementFromLocalStorage, removeElementFromLocalStorage } from './localStorage.js';

class UI {
    constructor() {
        this.productsDiv = document.getElementById('products');
        this.detailsDiv = document.getElementById('wrapper');
        this.adminDiv = document.getElementById('products-admin');
        this.title = document.getElementById('title');
        this.author = document.getElementById('author');
        this.price = document.getElementById('price');
        this.image = document.getElementById('image');
        this.description = document.getElementById('description');
        this.id = document.getElementById('id');
        this.tableBody = document.getElementById('table-body');
        this.cartDiv = document.getElementById('cart');
        this.cartBody = document.getElementById('tablecart-body');
        this.navbar = document.getElementById('navbar');
        this.quantity = document.getElementById('quantity');
    }

    showProducts(products) {
        let output = '';
        products.forEach((product) => {
            output += `
            <div class="card elegant-color">
                <div class="view overlay hm-white-slight"><img class="img-fluid" src="${product.image}" alt="...">
                </div>
                <div class="card-body text-center">
                    <h4 class="card-title white-text py-3">${product.title}</h4>
                    <p class="card-text white-text">${product.price} Lei</p>
                    <button onclick="window.location.href='details.html?id=${product.id}'" type="button" class="btn btn-info my-3">Detalii</button>
                </div>
            </div>
            `;
            this.productsDiv.innerHTML = output;
        });
    }

    showDetails(product) {
        let output = '';
        
            output += `
                <div class="product-img"><img src="${product.image}" alt="..."></div>
                <div class="product-info">
                    <div class="product-text">
                        <h1 class="card-title">${product.title}</h1>
                        <h2 class="card-author">Autor: ${product.author}</h2>
                        <p class="card-description">Descriere: ${product.description}</p>
                        <h2 class="card-author">În stoc: ${product.stoc} buc.</h2>
                        <h2 class="card-author">Cantitate:<input id="quantity" type="number" value="1" min="1" max="100"></h2>
                    </div>
                    <div class="product-price-btn">
                        <p><span class="product-price">${product.price} Lei</span></p>
                        <button id="addtocartBtn" type="button">Adaugă în coș</button>
                    </div>
                </div>
                `;
                this.detailsDiv.innerHTML = output;

                let addProductToCart = document.getElementById('addtocartBtn');
                addProductToCart.addEventListener('click',() => {
                    let count = parseInt(quantity.value);
                    if (isNaN(count)) {
                        count = 1;
                    }
                    addProductsInLocalStorage(product, count);
                    Swal.fire({
                        title: 'Produsul a fost adăugat în coș!',
                        showClass: {
                          popup: 'animate__animated animate__fadeInDown'
                        },
                        hideClass: {
                          popup: 'animate__animated animate__fadeOutUp'
                        }
                      })
                      });
    }
                      
    showAdminProducts(products) {
        let output = '';
        products.forEach((product) => {
            output = `
                    <tr>
                        <td><img class="admin-image" src="${product.image}" alt="..."></td>
                        <td>${product.title}</td>
                        <td>${product.author}</td>
                        <td>${product.price}</td>
                        <td>${product.stoc}</td>
                        <td><button class="removeBtn delete" id="${product.id}">Șterge</button></td>
                    </tr>
            `;
            this.tableBody.innerHTML += output;
        });
    }

    showProductsCart(storageItems) {
            let output = "";
            storageItems.forEach((item) => {
            output = `
            <table id="table-cart">
                <tbody id="table-body">
                    <tr>
                        <td><img src="${item.product.image}" class="admin-card-img"</td>
                        <a href="details.html?id=${item.product.id}"<td>${item.product.title}</td></a>
                        <td>${item.product.price}</td>
                        <td><input value=${item.count} type="number" min="1" max="10"/></td>
                        <td id="subtotal">${item.product.price*item.count}</td>
                        <td><button id=${item.product.id} type="button" class="removeBtn delete" onclick="removeBtn delete">Șterge</button></td>
                    </tr>
                </tbody>
           </table>
            `;
        this.cartBody.innerHTML += output;
        });
    
    let inputFields = document.querySelectorAll("input");
        inputFields.forEach( (inputElement) => {
            let row = inputElement.parentElement.parentElement;
            let removeButton = row.lastElementChild.firstElementChild;

            let productId = removeButton.id;
            inputElement.addEventListener('change', (e) => {
                let count = parseInt(e.target.value);
                if(!isNaN(count) && count > 0) {
                    updateQuantityInLocalStorage(productId, count);
                    return window.location.reload();
                } else {
                    let storageElement = getElementFromLocalStorage(productId);
                    e.target.value = storageElement.count;
                }
            });  
            
            removeButton.addEventListener('click', (e) => {
                removeElementFromLocalStorage(e.target.id);
                row.remove();
                return window.location.reload();
            });  
        });
    }
}

export const ui = new UI();



