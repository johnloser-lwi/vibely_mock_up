import { Page } from './page.js';

export class Login extends Page {
    constructor () {
        super();
    }

    callToActionHandler() {
        this.app.loadPage('home');
    }

    init(app) {
        super.init(app);

        for (let button of this.app.doc.getElementsByClassName('cta-button')) {
            button.onclick = this.callToActionHandler.bind(this);
        }
        
    }
}