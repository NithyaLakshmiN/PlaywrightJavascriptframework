exports.LoginPage = class LoginPage{
  constructor(page){
    this.page = page 
       
    this.signinemail_button= page.getByRole('button', { name: 'Sign in with email' });
    this.emailoption_button = page.getByLabel('Email');
    this.username_textbox= page.getByLabel('Email');
    this.next_button =page.getByRole('button', { name: 'Next' });
    this.password_textbox=page.getByLabel('Password');
    this.signin_button=page.getByRole('button', { name: 'Sign In' });
    this.username_display =page.getByRole('button', { name: 'NT' });
    this.logout_menu =page.getByRole('menuitem', { name: 'Logout' });
    this.logout_button =page.getByRole('button', { name: 'Logoff' });
    this.invalidloginmsg_text =page.locator('div').filter({ hasText: /^Password$/ })

}

async gotopreloginpage(){
    await this.page.goto('https://dev-reader.afdsjfhdjsfhdjsfhdjkasfhsdjf.com/jupiter/index.html#/');
    
}

async validlogin(username,password){
    
    await this.signinemail_button.click();
    await this.emailoption_button.click();
    await this.username_textbox.fill(username);
    await this.next_button.click();
    await this.password_textbox.fill(password);
    await this.signin_button.click();
    await this.username_display.click();
    await this.logout_menu.click();
    await this.logout_button.click();

}

async invalidlogin(username,invalidpassword){
    await this.signinemail_button.click();
    await this.emailoption_button.click();
    await this.username_textbox.fill(username);
    await this.next_button.click();
    await this.password_textbox.fill(invalidpassword);
    await this.signin_button.click();
    await this.page.locator('div').filter({ hasText: /^Password$/ })
    console.log ("********** Testing Completed*****************")

}


}