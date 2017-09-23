# Lab - 練習使用 Cucumber.js 撰寫自動化測試

## 練習步驟

1. 啟動網頁

    ```
    npm run dev
    ```    

2. 新增 features/supports/world.js，設定 nightmare 初始化

    ``` js
    var {defineSupportCode} = require('cucumber');
    var Nightmare = require('nightmare');
    const nightmare = Nightmare({ show: true });

    function CustomWorld({attach}) {
      this.driver = nightmare;
    }

    defineSupportCode(function ({ setWorldConstructor, AfterAll }) {
        setWorldConstructor(CustomWorld)

        AfterAll(async function () {
            await nightmare.end()
        })
    })
    ```

3. 新增 ShoppingCart.feature

    ``` feature
    # language: zh-TW
    功能: 購物車
        建立一個 購物車 應用程式，必須要能夠根據會員的等級，提供不同的折扣方式。

        * 如果是 VIP 會員，只要購物滿 500 元，就一律有 8 折優惠
        * 如果是 一般會員 (Normal)，除了購物必須要滿 1000 元，而且購買超過 3 件商品才能擁有 85 折優惠

        場景: VIP 會員, 購買 200 元商品 3 件, 結帳金額為 480 元
            假設 進入購物車頁面
            並且 選擇第 "1" 個商品，價格為 "200" 元，數量 "3" 件
            並且 選擇會員等級為 "VIP"
            當 選擇完畢，計算價格
            那麼 折扣後價格為 "480" 元
    ```

4. 執行測試 `npm test`，產生框架並完成測試程式

    ``` js
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
    ```

5. 嘗試補上其他測試案例