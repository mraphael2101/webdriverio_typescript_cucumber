import { $, driver } from '@wdio/globals';
import { browser } from '@wdio/globals'
export default class HomePageObjectsMobile {

  public get labelApp() {
    return $('~App');
  }
  public get labelAccessibility() {
    return $('~Accessibility');
  }
  public get labelAccessibilityServices() {
    return $('~Accessibility Service');
  }
  public get labelSearch() {
    return $('~Search');
  }
  public get labelInvokeSearch() {
    return $('~Invoke Search');
  }
  public get inputAppData() {
   if(driver.isAndroid){
    return $('android.widget.EditText[resource-id="io.appium.android.apis:id/txt_query_appdata"]');}
   else
     return // write xpath for iOS
  }

}