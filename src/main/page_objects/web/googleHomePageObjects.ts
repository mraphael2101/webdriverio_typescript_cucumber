import { $ } from '@wdio/globals';

export default class GoogleHomePageObjects{

  public get modelFrame(){
    return $("div[class='KxvlWc']");
  }
  public get buttonAcceptAll(){
    return $("button[id='L2AGLb']");
  }
  public get buttonRejectAll(){
    return $("button[id='W0wltc']");
  }

  public get inputSearchBar(){
    return $('[name="q"]');
  }
public get linkFirstSearchResult(){
    return $('<h3>');
}
  public get textFirstResult() {
    return $('#search .g:first-child');
  }



}

