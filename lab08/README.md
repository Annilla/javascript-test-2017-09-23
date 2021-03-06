# Lab - 練習使用 Cucumber.js 撰寫自動化測試

## 練習步驟

1. 啟動網頁

    ```
    npm run dev
    ```    

1. 使用 nightwatch.js 完成測試程式

    ``` js
    var url = "http://localhost:8080"
    Given('進入購物車頁面', function () {
        return client
            .url(url)
            .waitForElementVisible('body', 1000)
    });

    Given('選擇第 {string} 個商品，價格為 {string} 元，數量 {string} 件', function (index, price, qty) {
        return client
            .clearValue(`div.product:nth-child(${index}) input[name=qty]`)
            .setValue(`div.product:nth-child(${index}) input[name=qty]`, qty);
    });

    Given('選擇會員等級為 {string}', function (level) {
        return client
            .click("select[name=memberLevel]")
            .click(`select[name=memberLevel] option[value=${level}]`)
    });

    When('選擇完畢，計算價格', function () {
        return client;
    });

    Then('折扣後價格為 {string} 元', function (price) {
        return client
            .assert.containsText('#price', price);
    });
    ```

1. 執行測試

    ```
    npm test
    ```