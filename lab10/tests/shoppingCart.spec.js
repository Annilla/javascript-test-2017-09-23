var mocha = require('mocha');
var chai = require('chai');

chai.should();

var ShoppingCart = require('../src/shoppingCart');

describe('ShoppingCart', () => {
    describe('#getDiscountPrice(totalPrice)', () => {
        it('should get 80% discount if totalPrice over 500', () => {
            // Arrange
            var totalPrice = 600;
            var expected = 480;
            var actual = 0;
            var shoppingCart = new ShoppingCart();

            // Act
            actual = shoppingCart.getDiscountPrice(totalPrice);

            // Assert
            actual.should.equal(expected);
        });
    });
});