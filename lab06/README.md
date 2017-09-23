# Lab - 練習使用 Cucumber.js 的各種功能

## 練習步驟

1. 請嘗試練習在 Scenario 上加上 Tag

    ``` feature
    @foo
    場景: 1 加 1 應該為 2
    ```

2. 請嘗試修改 `package.json` 的 script，只執行某個 Tag 的測試

    ``` js
    "scripts": {
        "test": "cucumber-js --tags @foo"
    }
    ```

3. 請嘗試增加 Hooks，並觀察其行為

4. 請練習使用 Table 撰寫購物車加總邏輯

    ``` feature
    language: zh-TW
    功能: 購物車計算 計算購物車的總金額

    場景: 計算購物車的總金額
        假設 購物車中有商品如下
            |  name  | price |
            | Item 1 |   50  |
            | Item 2 |  100  |
        當 計算總價格
        那麼 總價格應該為 "150"
    ```

5. 實做測試邏輯，包含從 Table 取得物件

    ``` js
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
    ```

6. 執行測試，觀察測試結果是否正確