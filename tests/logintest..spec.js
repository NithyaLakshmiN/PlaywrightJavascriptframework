import { test, expect } from '@playwright/test';
import {LoginPage} from '../pages/login'

test('Valid Login test', async ({ page }) => {
    const Login = new LoginPage(page)
    await Login.gotopreloginpage()
    await Login.validlogin('dummy','dummy1')
    
});

test('Invalid Login test', async ({ page }) => {
    const Login = new LoginPage(page)
    await Login.gotopreloginpage()
    await Login.invalidlogin('dummy1','dummy2')
   
}





);