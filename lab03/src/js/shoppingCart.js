export default class ShoppingCart {
    totalPrice(cart){
        return cart.reduce((s, i) => s += i.price * i.qty, 0);
    }
    
    totalQty(cart) {
        return cart.reduce((s, i) => s += parseInt(i.qty), 0);
    }

    Calculate(level, cart) {
        var price = 0;
        var totalPrice = this.totalPrice(cart);
        var totalQty = this.totalQty(cart);

        if (level === 'VIP') {
            if (totalPrice > 500) {
                price = totalPrice * 0.8;
            }
            else {
                price = totalPrice;
            }
        }
        else if (level === 'Normal') {
           if (totalPrice > 1000 && totalQty > 3) {
               price = totalPrice * 0.85;
           }
           else {
               price = totalPrice;
           }
        }
        return price;
    }
}