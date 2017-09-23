function Calculator() {
}

Calculator.prototype.Calculate = function (totalPrice) {
    if (totalPrice > 200) {
        return totalPrice * 0.8;
    }

    return totalPrice;
}

module.exports = Calculator;