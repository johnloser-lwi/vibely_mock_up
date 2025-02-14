import { Page } from './page.js';

export class Home extends Page {
    constructor () {
        super();
    }

    openActivity() {
        this.app.loadPage('watch_together');
    }

    openBrowser() {
        this.app.loadPage('browser');
    }

    init(app) {
        super.init(app);

        for (let act of this.app.doc.getElementsByClassName('activity'))
        {
            act.onclick = this.openActivity.bind(this);
        }

        let new_act_btn = this.app.doc.getElementById('new-act-button');
        new_act_btn.onclick = this.openBrowser.bind(this);

    }
}