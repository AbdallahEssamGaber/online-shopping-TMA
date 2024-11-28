let cartCount = 0;
let cartTotalPrice = 0;
let cartProducts = {};  

function addToCart(productName, productPrice) {
    // Check if the product is already in the cart
    if (cartProducts[productName]) {
        alert(`${productName} is already in the cart!`);
        return;  
    }

    cartProducts[productName] = productPrice; 
    cartCount++;  
    cartTotalPrice += productPrice;  

    
    
    document.getElementById('total-items').innerText = cartCount;
    document.getElementById('total-price').innerText = cartTotalPrice;

    
    alert(`${productName} has been added to your cart. Price: $${productPrice}`);
}

function searchProducts() {
    const searchQuery = document.getElementById('search-bar').value.toLowerCase();
    const products = document.querySelectorAll('.product');

    products.forEach(product => {
        const productName = product.querySelector('.product-name').innerText.toLowerCase();
        const productSpecs = product.querySelector('.product-specs').innerText.toLowerCase();
        
        // Check if search query matches product name or specs
        if (productName.includes(searchQuery) || productSpecs.includes(searchQuery)) {
            product.style.display = 'block';  // Show product if match
        } else {
            product.style.display = 'none';  // Hide product if no match
        }
    });
}
