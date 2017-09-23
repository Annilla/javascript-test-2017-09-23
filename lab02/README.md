# Lab - 練習使用 PageObject

## 練習步驟

1. 撰寫 ShoppingCartPage 的 PageObject

    ``` js
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
    ```

1. 測試改用 PageObject

    ``` js
    // Act
    var shoppingCartPage = new ShoppingCartPage(nightmare, rootUrl);
    await nightmare.viewport(1000, 760);

    await shoppingCartPage.visit();
    await shoppingCartPage.updateQty(productId, qty);
    await shoppingCartPage.selectLevel(level);

    actual = await shoppingCartPage.getPrice();
    ```