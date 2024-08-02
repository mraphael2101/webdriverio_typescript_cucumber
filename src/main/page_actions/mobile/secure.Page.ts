import { $ } from '@wdio/globals'
import MobilePage from './mobile.Page';

/**
 * sub-page containing specific selectors and methods for a specific page
 */
class SecurePage extends MobilePage {
    /**
     * define selectors using getter methods
     */
    public get flashAlert () {
        return $('#flash');
    }
}

export default new SecurePage();
