let cart = JSON.parse(localStorage.getItem("cart_cache"))

const sku = document.getElementById("sku").innerText.replace(/\D/g,'');

function cart_add_sku() {
    console.log(sku)
    if (cart.length == 0) 
        cart.push(item)
    else { 
        let exist = cart.filter(_item => item.id == _item.id)
        if (exist.length != 0) {
            cart.find(_item =>  _item.quantity += 1)
        } else {
            cart.push(item)
        }
     }
}

function cart_quantity() {
    let quantity = JSON.parse(localStorage.getItem("cart_quantity"))
    console.log("_quantity", quantity)
    if (!quantity) quantity = 0
    let quantity_button = document.getElementById("shop_quantity")
    quantity_button.innerText = quantity
}

function quantity() {
    let quantity = 0;
    const _cart = JSON.parse(localStorage.getItem("cart_cache")) 
    _cart.forEach(item => quantity += item.quantity)
    console.log("quantity", quantity)
    localStorage.setItem("cart_quantity", quantity)
    cart_quantity()
}

quantity()