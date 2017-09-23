function ShoppingCart() {
}

ShoppingCart.prototype.getDiscountPrice = function (totalPrice) {
    if (totalPrice > 500) {
        return totalPrice * 0.8;
    }

    return totalPrice;
};

module.exports = ShoppingCart;