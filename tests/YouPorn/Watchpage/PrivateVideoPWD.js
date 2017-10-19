this.PrivateVideoPWD = function (browser) {
  browser
    // Opens private video url and maximizies the browser window
    .url("https://www.youporn.com/private/video/14138719/")
    .maximizeWindow()
    .waitForElementVisible('body', 1000)
    // Selects the PWD input and sends keys qwe123 then submits
    .click("#privateLogin_password")
    .setValue('input[type=text]',['qwe123'])
    .submitForm("#privateLogin_password")
    .waitForElementVisible('body', 1000)
    // Script end
    .end();
}
