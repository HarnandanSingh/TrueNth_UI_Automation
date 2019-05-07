import { LifeChanges, Treatment } from '../../src/enums';
import Homepage from '../../src/pageobjects/homepage';
import * as assert from 'assert';
import { Environment } from '../../src/environments';
import { Article } from '../../src/models/article';
import { parseJson } from '../../src/utilities/parser';

describe('Verify results for selected filters', function () {

    // Run setup before executing test steps
    before(function() {
        Environment.init();
    });

    it('Should display the correct articles list', async function() {

        let filters: String[] = Array(LifeChanges.SexAndIntimacy, Treatment.RadioTherapy);

        Homepage.selectFilters(filters);

        let apiResponse: string = await Environment.getResponseFromApi(Environment.ArticlesApi(LifeChanges.SexAndIntimacy, Treatment.RadioTherapy));
        let apiArticles: Article[] = parseJson<Article>(apiResponse);
        
        let pageArticles: Article[] = await Homepage.getResults();

        apiArticles.forEach((article, index) => {
            assert.equal(article.title.title, pageArticles[index].title.title, "Title did not match. Expected: " + article.title.title + " ***** Actual: " + pageArticles[index].title.title);
            assert.equal(article.subtitle, pageArticles[index].subtitle, "Subtitle did not match.");
            console.log("Api: ******** " + article.title.title);
            console.log("Page: ******** " + pageArticles[index].title.title);
        })
    });
})