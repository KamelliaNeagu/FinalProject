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
        this.cartBody = document.getElementById('cart-body');
    }

    showProducts(products) {
        let output = '';
        products.forEach((product) => {
            output = `
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
            this.productsDiv.innerHTML += output;
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
                    </div>
                    <div class="product-price-btn">
                        <p><span class="product-price">${product.price} Lei</span></p>
                        <button onclick="window.location.href='cart.html?id=${product.id}'" id="addtocartBtn" type="button">Adauga in cos</button>
                    </div>
                </div>
                `;
                this.detailsDiv.innerHTML = output;
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
                        <td>none</td>
                        <td><button class="removeBtn delete" id="${product.id}">Sterge</button></td>
                    </tr>
            `;
            this.tableBody.innerHTML += output;
        });
    }

    showProductsCart(product) {
        let output = '';
        
            output = `
            <table id="table-cart">
            <tbody> 
            <tr>
                <td><img src="${product.image}" class="admin-card-img"</td>
                <td>${product.title}</td>
                <td>${product.price}</td>
                <td><input type="number" min="1" max="10"</td>
                <td>10</td>
                <td><button id=${product.id} type="button" class="removeBtn delete">Sterge</button></td>
           </tr>
        </tbody>   
        </table> 
            `;
        this.tableBody.innerHTML += output;
        };
}

export const ui = new UI();



