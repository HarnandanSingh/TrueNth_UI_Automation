import { Article, Title } from '../models/article';

class Homepage {
    selectFilters(filters: String[]) {
        filters.forEach(filter => $$(`button[data-value=${filter}]`)[1].click());
    }

    async getResults(): Promise<Article[]> {
        let articles: Article[] = [];

        // At times the list of results does not get updated in time
        // and the test picks up incorrect items, so adding a pause to
        // ensure we always get an updated list of results
        await browser.pause(2000);

        const results = await $$("a.results-item");

        for(var i=0; i < results.length; i++) {
            await new Promise(async resolve => {
                let titleElement = await results[i].$(`p:nth-child(1)`);
                let subtitleElement = await results[i].$(`p:nth-child(2)`);

                let article = new Article();
                let t = new Title();

                t.title = await titleElement.getText();
                article.title = t;
                article.subtitle = await subtitleElement.getText();

                articles.push(article);
                return resolve(article);
            });
        }

        return articles;
    }
}

export default new Homepage();