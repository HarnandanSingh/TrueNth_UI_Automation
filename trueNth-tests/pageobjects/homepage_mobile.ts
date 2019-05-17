import { Article, Title } from '../models/article';
import { Platform } from '../interfaces/platform';

class MobileHomepage extends Platform{
    selectFilters(filters: String[]) {
        filters.forEach(async filter => {
            await $("button=Let's get started").click();
            // need to wait for animation?
            await $$(`button[data-value=${filter[0]}]`)[1].click();
            //need to wait for animation?
            await $$(`button[data-value=${filter[1]}]`)[1].click();
            browser.waitUntil(() => this.waitForSpinner());
        });
    }

}


export default new MobileHomepage();