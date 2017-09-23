var Nightmare = require('nightmare');
var mocha = require('mocha');
var chai = require('chai');
chai.should();

describe('ShoppingCart', function () {
    // 初始化 nightmare
    var url = "http://localhost:8080/src"
    var nightmare;
    before(() => {
        nightmare = Nightmare({
            show: true
        });
    });

    // 設定測試結束後，結束 nightmare
    after(async () => {
        await nightmare.end();
    });

    // 撰寫自動化測試
    it('VIP 會員, 購買 200 元商品 2 件, 結帳金額為 400 元', async () => {
        // Arrange
        var productId = 1;
        var qty = 2;
        var expected = 400;
        var actual = 0;

        // Act
        var priceText = await nightmare.goto(url)
            .viewport(1000, 760)
            .insert(`div.product:nth-child(1) input[name=qty]`, false)
            .insert(`div.product:nth-child(1) input[name=qty]`, qty)
            .select('select[name=memberLevel]', 'VIP')
            .evaluate(() => document.querySelector('#price').innerText);
        actual = parseInt(priceText);

        // Assert
        actual.should.equal(expected);
    });
});