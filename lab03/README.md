# Lab - 練習重構

## 練習步驟

1. 練習分開 jQuery 與 計算邏輯

    ``` js
    var price = 0;
    if (level === 'VIP') {
        if(totalPrice > 500){
            price = totalPrice * 0.8;
        }
        else{
            price = totalPrice;
        }
    }
    else if(level === 'Normal'){
        if(totalPrice > 1000 && totalQty > 3){
            price = totalPrice * 0.85;
        }
        else {
            price = totalPrice;
        }
    }

    $('#price').text(price);
    ```

1. 把計算邏輯抽到 shoppingCart.js

    ``` js
    function ShoppingCart() {
    }

    ShoppingCart.prototype.Calculate = function (totalPrice, totalQty, level) {
        var price = 0;
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

    module.exports = ShoppingCart;
    ```

1. 替 shoppingCart.js 撰寫測試

1. 繼續重構、測試