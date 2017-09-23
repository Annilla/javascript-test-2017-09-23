# Lab - 練習使用 Cucumber.js 撰寫測試

## 練習步驟

1. 需求如下

    為了根據顧客消費金額，提供專門計算金額的 Calculator 用來計算折扣後的金額，當金額高於 200 元時，可享有 80% 折扣

1. 撰寫 Feature 

    ``` feature
    # language: zh-TW
    功能: Calculator
       為了根據顧客消費金額，
       提供專門計算金額的 Calculator 用來計算折扣後的金額

      場景: 當金額高於 200 元時，可享有 80% 折扣
        假設 顧客消費總金額為 "250" 元
        當 計算折扣後金額
        那麼 折扣後金額應該為 "200" 元
    ```

1. 執行測試 `npm test`，產生 cucumber 框架，並完成測試邏輯

    ``` js
    Given('顧客消費總金額為 {string} 元', function (totalPrice) {
        this.totalPrice = +totalPrice;
    });

    When('計算折扣後金額', function () {
        var calculator = new Calculator();
        this.actual = calculator.Calculate(this.totalPrice);
    });

    Then('折扣後金額應該為 {string} 元', function (expected) {
        this.actual.should.be.equal(+expected);
    });
    ```

1. 執行測試 `npm test` ，看到紅燈

1. 完成程式碼部分

    ``` js
    Calculator.prototype.Calculate = function (totalPrice) {
        if (totalPrice > 200) {
            return totalPrice * 0.8;
        }

        return totalPrice;
    }
    ```

1. 執行測試 `npm test` ，看到綠燈