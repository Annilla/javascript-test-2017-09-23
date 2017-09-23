# Lab - 練習產生報告

## 練習步驟

1. 啟動網頁

    ```
    npm run dev
    ```    

2. 啟動測試

    ```
    npm test
    ```

3. 設定 `cucumber-html-reporter`，打開 reports/report.js

    ```
    var reporter = require('cucumber-html-reporter');

    var options = {
        theme: 'bootstrap',
        jsonFile: 'reports/report.json',
        output: 'reports/cucumber_report.html',
        reportSuiteAsScenarios: true,
        launchReport: true,
        metadata: {
            "App Version": "0.3.2",
            "Test Environment": "STAGING",
            "Browser": "Chrome  54.0.2840.98",
            "Platform": "Windows 10",
            "Parallel": "Scenarios",
            "Executed": "Remote"
        }
    };

    reporter.generate(options);
    ```

4. 產生報表

    ```
    npm run report
    ```