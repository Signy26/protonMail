module.exports = {

    beforeEach: function(browser){
      browser
        .url('https://beta.protonmail.com')
        .login(browser)
    },

    'Add and remove folder' : function (browser) {
      
      browser
      .url('https://beta.protonmail.com/settings/labels')
      .waitForElementVisible('[data-test-id="folders/labels:addFolder"]', function(){
        this.click('[data-test-id="folders/labels:addFolder"]');
        })    
      .waitForElementVisible('[data-test-id="label/folder-modal:name"]', function(){
        this
        .setValue('[data-test-id="label/folder-modal:name"]','protonmail')
        .click('button[type="submit"]')
      })
      .waitForElementVisible('[data-test-id="folders/labels:item-name"]',function(){
        this.click('[data-test-id="dropdown:open"]',function(){
          this.click('[data-test-id="folders/labels:item-delete"]')
        })
      })
      .waitForElementVisible('button[type=submit]',function(){
        this.click('button[type=submit]')
      })
      .end();
  }
};