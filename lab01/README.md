# Lab - 撰寫整合測試

## 練習步驟

1. 進入 tests/shoppingCart.test.js

1. 初始化 `nightmare`

    ``` js
    var url = "http://localhost:8080/src"
    var nightmare;
    before(() => {
        nightmare = Nightmare({
            show: true
        });
    });
    ```

1. 設定測試結束後，結束 `nightmare`

    ``` js
    after(async () => {
        await nightmare.end();
    });
    ```

1. 撰寫自動化測試

    VIP 會員, 購買 200 元商品 2 件, 結帳金額為 400 元

    ``` js
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
    ```

## 進階題

1. 練習 VsCode 的偵錯
1. 練習使用 DevTool
1. 完成其他自動化測試案例
    * VIP 會員, 購買 150 元商品 3 件, 結帳金額為 450 元
    * VIP 會員, 購買 150 元商品 5 件, 結帳金額為 600 元
    * 一般 會員, 購買 300 元商品 2 件, 結帳金額為 600 元
    * 一般 會員, 購買 600 元商品 4 件, 結帳金額為 2040 元
    * 一般 會員, 購買 600 元商品 2 件, 結帳金額為 1200 元
    * 一般 會員, 購買 200 元商品 4 件, 結帳金額為 800 元
