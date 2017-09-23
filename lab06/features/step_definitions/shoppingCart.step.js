var { defineSupportCode } = require('cucumber');
var chai = require('chai');
chai.should();

defineSupportCode(function ({ Given, When, Then }) {
    Given(/^購物車中有商品如下$/, function (table) { 
        this.items = table.hashes(); 
        console.log(this.items); 
    });

    When(/^計算總價格$/, function () { 
        this.result = 0; 
        this.items.map((item) => { this.result += +item.price; }) 
    });

    Then(/^總價格應該為 "([^"]*)"$/, function (result) { 
        this.result.should.equal(+result); 
    }); 
})