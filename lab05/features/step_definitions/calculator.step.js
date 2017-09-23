var Calculator = require('../../src/calculator');
var { defineSupportCode } = require('cucumber');
var chai = require('chai');
chai.should();

defineSupportCode(function ({ Given, When, Then }) {

    Given('顧客消費總金額為 {string} 元', function (totalPrice) {
        this.totalPrice = +totalPrice;
    });

    When('計算折扣後金額', function () {
        var calculator = new Calculator();
        this.actual = calculator.Calculate(this.totalPrice);
    });

    Then('折扣後金額應該為 {string} 元', function (expected) {
        this.actual.should.be.equal(+expected);
    });
});