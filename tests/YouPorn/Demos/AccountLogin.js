this.YP_AccountLogin = function (browser) {
  browser
    .url('https://www.youporn.com')
    .waitForElementVisible('body', 1000)
    .click("#js_signupLink.login-link")
    .waitForElementVisible('body', 1000)
    .click("#login_username")
    .setValue('input[type=text]', 'scott_heron')
    .click("#login_password")
    .setValue('input[type=text]', 'qwe123')
    .click("#user_login_form > button")
    .waitForElementVisible('body', 15000)
    .end();
}
