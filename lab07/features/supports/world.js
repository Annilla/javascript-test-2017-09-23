var { defineSupportCode } = require('cucumber');
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
