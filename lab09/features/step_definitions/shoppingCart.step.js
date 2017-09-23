var { defineSupportCode } = require('cucumber');
var chai = require('chai');
chai.should();

defineSupportCode(function ({ Given, When, Then }) {
    var url = "http://localhost:8080"
    Given('進入購物車頁面', async function () {
        await this.driver.goto(url)
            .viewport(1000, 760);
    });

    Given('選擇第 {string} 個商品，價格為 {string} 元，數量 {string} 件', async function (index, price, qty) {
        await this.driver
            .insert(`div.product:nth-child(${index}) input[name=qty]`, false)
            .insert(`div.product:nth-child(${index}) input[name=qty]`, +qty);
    });

    Given('選擇會員等級為 {string}', async function (level) {
        await this.driver
            .select('select[name=memberLevel]', level);
    });

    When('選擇完畢，計算價格', async function () {
        var price = await this.driver
            .evaluate(() => document.querySelector('#price').innerText);

        this.actual = +price;
    });


    Then('折扣後價格為 {string} 元', function (expected) {
        this.actual.should.equal(+expected);
    });
})