import { LifeChanges, Treatment } from '../../src/enums';
import Homepage from '../../src/pageobjects/homepage';
import * as assert from 'assert';
import { Environment } from '../../src/environment';
import { Api } from '../../src/api';
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

        let apiResponse: string = await Api.getResponse(
                                                        Api.Articles(
                                                                LifeChanges.SexAndIntimacy,
                                                                Treatment.RadioTherapy)
                                                        );
                                                        
        let apiArticles: Article[] = parseJson<Article>(apiResponse);
                
        let pageArticles: Article[] = await Homepage.getResults();

        apiArticles.forEach((article, index) => {
            assert.equal(pageArticles[index].title.title, article.title.title,
                "Title did not match. Expected: " + article.title.title + " ***** Actual: " + pageArticles[index].title.title);

            assert.equal(pageArticles[index].subtitle, article.subtitle, "Subtitle did not match.");
        });
    });
});