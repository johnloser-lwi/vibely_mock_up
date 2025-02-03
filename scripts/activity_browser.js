import { Page } from './page.js';

export class ActivityBrowser extends Page {
    constructor () {
        super();
    }

    openActivity() {
        this.app.loadPage('watch_together');
    }

    init(app) {
        super.init(app);

        for (let act of this.app.doc.getElementsByClassName('activity'))
        {
            act.onclick = this.openActivity.bind(this);
        }
    }
}