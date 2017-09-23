var Nightmare = require('nightmare');
var mocha = require('mocha');
var chai = require('chai');
chai.should();

describe('ShoppingCart', function () {
    var rootUrl = "http://localhost:8080";
    var nightmare;
    before(() => {
        nightmare = Nightmare({
            show: true
        });
    });

    after(async () => {
        await nightmare.end();
    });

    function ShoppingCartPage(nightmare, rootUrl){
        this.rootUrl = rootUrl;
        this.nightmare = nightmare;

        this.visit = async () => {
            var url = `${this.rootUrl}/src/`;
            await this.nightmare.goto(url);
        }

        this.updateQty = async (id, qty) =>{
            await this.nightmare
                .insert(`div.product:nth-child(${id}) input[name=qty]`, false)
                .insert(`div.product:nth-child(${id}) input[name=qty]`, qty);
        }

        this.selectLevel = async(level)=>{
            await this.nightmare
                .select('select[name=memberLevel]', level);
        }

        this.getPrice = async()=>{
            var price = await this.nightmare
                .evaluate(() => document.querySelector('#price').innerText);
            return parseInt(price);
        }
    }

    it('VIP 會員, 購買 200 元商品 2 件, 結帳金額為 400 元', async () => {
        // Arrange
        var productId = 1;
        var qty = 2;
        var expected = 400;
        var level = 'VIP';
        var actual = 0;

        // Act
        var shoppingCartPage = new ShoppingCartPage(nightmare, rootUrl);
        await nightmare.viewport(1000, 760);
    
        await shoppingCartPage.visit();
        await shoppingCartPage.updateQty(productId, qty);
        await shoppingCartPage.selectLevel(level);
    
        actual = await shoppingCartPage.getPrice();

        // Assert
        actual.should.equal(expected);
    });
});