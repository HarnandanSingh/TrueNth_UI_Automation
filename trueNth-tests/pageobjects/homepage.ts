import { Article, Title } from '../models/article';
import { Platform } from '../interfaces/platform';

class Homepage extends Platform{
    selectFilters(filters: String[]) {
        filters.forEach(filter => {
            $$(`button[data-value=${filter}]`)[1].click();
            browser.waitUntil(() => this.waitForSpinner());
            });
    }

    waitForSpinner = () => {
        const spinner = $(".spinner-wrapper");
        return spinner.getAttribute("class") == "spinner-wrapper"
    }
   
    getResults(): Article[] {
        let articles: Article[] = [];

        // await browser.pause(3000);

        const results = $$("a.results-item");

        for(var i=0; i < results.length; i++) {
            const titleElement = results[i].$(`p:nth-child(1)`);
            const subtitleElement = results[i].$(`p:nth-child(2)`);

            let article = new Article();
            let t = new Title();

            t.title = titleElement.getText();
            article.title = t;
            article.subtitle = subtitleElement.getText();

            articles.push(article);
        }

        return articles;
    }
}

export default new Homepage();