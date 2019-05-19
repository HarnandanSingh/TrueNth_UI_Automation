import { Article, Title } from '../models/article';
import { Platform } from '../interfaces/platform';

class MobileHomepage extends Platform{
    selectFilters(filters: String[]) {
        filters.forEach(filter => {
            $("button=Let's get started").click();
            // need to wait for animation?
            $$(`button[data-value=${filter[0]}]`)[1].click();
            //need to wait for animation?
            $$(`button[data-value=${filter[1]}]`)[1].click();
            browser.waitUntil(() => this.waitForSpinner());
        });
    }

}


export default new MobileHomepage();