require('bootstrap');
require('bootstrap/dist/css/bootstrap.css');
require('../css/custom.css');

import ShoppingCart from './shoppingCart';

$(document).ready(function () {
    $('input[name=qty]').on('change', CalculatePrice);
    $('select').on('change', CalculatePrice);
});

function CalculatePrice() {
    // Get Data From UI
    var cart = getCart();
    var level = $('select[name=memberLevel]').val();

    // Business Logic
    var shoppingCart = new ShoppingCart();
    var price = shoppingCart.Calculate(level, cart);

    // Set Data to UI
    $('#totalPrice').text(totalPrice);
    $('#totalQty').text(totalQty);
    $('#price').text(price);
}

function getCart() {
    var cart = [];
    $('.product').each(function() {
        var price = $(this).find('p').text();
        var qty = $(this).find('input').val();
        cart.push({
            price: price,
            qty: qty
        });
    });
    return cart;
}