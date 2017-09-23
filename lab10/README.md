# Lab - 練習產生測試涵蓋率報告

## 練習步驟

1. 安裝 istanbul，測試涵蓋率套件

    ```
    npm install --save-dev istanbul
    ```

1. 新增 npm coverage alias, 方便執行測試涵蓋率

    ```
    "scripts": {
        "coverage": "istanbul cover _mocha -- tests/"
    } 
    ```

1. 執行測試涵蓋率，觀察測試結果是否正確

    ```
    npm run coverage
    ```

1. 讓測試涵蓋率達到 100 %