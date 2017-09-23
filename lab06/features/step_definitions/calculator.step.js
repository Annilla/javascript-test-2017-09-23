var { defineSupportCode } = require('cucumber');
var chai = require('chai');
chai.should();

defineSupportCode(function ({ Given, When, Then, Before }) {
    Before({tags: "@foo"}, function () {
        // 在 @foo 的 Feature 前執行
    });

    Given('第一個數字為 {string}', function (first) {
        this.first=+first;
    });

    Given('第二個數字為 {string}', function (second) {
        this.second = +second;
    });

    When('計算兩數相加', function () {
        this.actual = this.first + this.second;
    });
    Then('結果應該為 {string}', function (expected) {
        this.actual.should.equal(+expected);
    });
})