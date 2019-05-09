import { Article, Title } from '../models/article';

class Homepage {
    selectFilters(filters: String[]) {
        filters.forEach(async filter => {
            await $$(`button[data-value=${filter}]`)[1].click();
            const item = await $("a.results-item");
            await item.waitForDisplayed(3000);
        });
    }

    async getResults(): Promise<Article[]> {
        let articles: Article[] = [];

        const results = await $$("a.results-item");

        for(var i=0; i < results.length; i++) {
            await new Promise(async resolve => {
                const titleElement = await results[i].$(`p:nth-child(1)`);
                const subtitleElement = await results[i].$(`p:nth-child(2)`);

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