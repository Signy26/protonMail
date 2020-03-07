module.exports.command = function(browser){
    browser 
      .waitForElementVisible('body')
      .assert.titleContains('Login | ProtonMail')
      .assert.visible('#username')
      .setValue('#username', process.env.ENV_EMAIL)
      .assert.visible('#password')
      .setValue('#password', process.env.ENV_PASS)
      .assert.visible('#login_btn')
      .click('#login_btn')
      .assert.visible('.pm-button')
  };