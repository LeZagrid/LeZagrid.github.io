let cart = JSON.parse(localStorage.getItem("cart_cache"))

if (!cart) cart = [];

let sku = document.getElementById("sku").innerText.replace(/\D/g,'');

function cart_add_sku() {
    
}