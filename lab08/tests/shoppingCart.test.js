var Nightmare = require('nightmare');
var mocha = require('mocha');
var chai = require('chai');
chai.should();

describe('ShoppingCart', function () {
    var nightmare;
    var url = 'http://localhost:8080'
    before(() => {
        nightmare = Nightmare({
            show: true
        })
    });

    after(async () => {
        await nightmare.end();
    });

    var dataSet = [
        { args: [1, 200, 2, 'VIP'], expected: 400 },
        { args: [1, 200, 3, 'VIP'], expected: 480 },
        { args: [2, 500, 1, 'Normal'], expected: 500 },
        { args: [1, 200, 6, 'Normal'], expected: 1020 },
        { args: [3, 700, 2, 'Normal'], expected: 1400 },
        { args: [1, 200, 4, 'Normal'], expected: 800 },
    ]

    dataSet.forEach((data) => {
        it(`${data.args[3]} 會員, 購買 ${data.args[1]} 元商品 ${data.args[2]} 件, 結帳金額為 ${data.expected} 元`, async () => {
            // Arrange
            var productId = data.args[0];
            var qty = data.args[2];
            var level = data.args[3];
            var expected = data.expected;
            var actual = 0;

            // Act
            var priceText = await nightmare.goto(url)
                .viewport(1000, 760)
                .insert(`div.product:nth-child(${productId}) input[name=qty]`, false)
                .insert(`div.product:nth-child(${productId}) input[name=qty]`, qty)
                .select('select[name=memberLevel]', level)
                .evaluate(() => document.querySelector('#price').innerText);
            actual = parseInt(priceText);

            // Assert
            actual.should.equal(expected);
        });
    })
});