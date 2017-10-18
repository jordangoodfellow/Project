this.Homepage = function (browser) {
  browser
    .url("https://www.youporn.com/")
    .maximizeWindow()
    .waitForElementVisible('body', 1000)
    // Tests the YP Homepage logo
    .click("#js_logo_img")
    .waitForElementVisible('body', 1000)
    // Clicks the Videos option from main menu & verifies the url after
    .click("#video-menu > a")
    .assert.urlContains('https://www.youporn.com/')
    // Selects the YP Logo
    .click("#js_logo_img")
    .waitForElementVisible('body', 1000)
    // Selects Catergories option from main menu & verifies the url after
    .click("#category-menu > a")
    .waitForElementVisible('body', 1000)
    .assert.urlContains('https://www.youporn.com/categories/')
    // Back to homepage
    .click("#js_logo_img")
    .waitForElementVisible('body', 1000)
    // Selects Top Rated option from main menu & verifies the url after
    .click("#headerMainMenu > li:nth-child(5) > a")
    .waitForElementVisible('body', 1000)
    .assert.urlContains('https://www.youporn.com/top_rated/')
    // Back to homepage
    .click("#js_logo_img")
    .waitForElementVisible('body', 1000)
    // Selects Most Viewed option from main menu & verifies the url after
    .click("#headerMainMenu > li:nth-child(6) > a")
    .waitForElementVisible('body', 1000)
    .assert.urlContains('https://www.youporn.com/most_viewed/')
    // Back to homepage
    .click("#js_logo_img")
    .waitForElementVisible('body', 1000)
    // Selects Channels option from main menu & verifies the url after
    .click("#headerMainMenu > li:nth-child(8) > a")
    .waitForElementVisible('body', 1000)
    .assert.urlContains('https://www.youporn.com/channels/')
    // Back to homepage
    .click("#js_logo_img")
    .waitForElementVisible('body', 1000)
    // Selects Pornstars option from main menu & verifies the url after
    .click("#headerMainMenu > li:nth-child(9) > a")
    .waitForElementVisible('body', 1000)
    .assert.urlContains('https://www.youporn.com/pornstars/')
    // Script shut down
    .end();
}
