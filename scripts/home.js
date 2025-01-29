import { Page } from './page.js';

export class Home extends Page {
    constructor () {
        super();
    }

    openActivity() {
        this.app.loadPage('activity');
    }

    init(app) {
        super.init(app);

        for (let act of this.app.doc.getElementsByClassName('activity'))
        {
            act.onclick = this.openActivity.bind(this);
        }
    }
}