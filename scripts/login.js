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

        let button = this.app.doc.getElementsByClassName('cta-button')[0];
        button.onclick = this.callToActionHandler.bind(this);
    }
}