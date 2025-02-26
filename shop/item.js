let cart = JSON.parse(localStorage.getItem("cart_cache"))

if (!cart) cart = [];

const sku = document.getElementById("sku").innerText.replace(/\D/g,'');

function cart_add_sku() {
    console.log(sku)
}

const button = document.getElementById("add_to_cart")
button.onclick = cart_add_sku
