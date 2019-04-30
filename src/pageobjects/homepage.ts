import { Article, Title } from '../models/article';
import WebdriverIO from '@wdio/mocha-framework';

class Homepage {
    selectLifeChanges(lifeChange: String) {
        $$(`button[data-value=${lifeChange}]`)[1].click();
    }

    async getResults(): Promise<Article[]> {
        let articles: Article[] = [];

        const results = await $$("a.results-item");

        for(var i=0; i < results.length; i++) {
            await new Promise(async resolve => {
                let titleElement = await $(`a.results-item > p:nth-child(1)`);
                let subtitleElement = await $(`a.results-item > p:nth-child(2)`);

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