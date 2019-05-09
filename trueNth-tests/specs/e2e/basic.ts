import { LifeChanges, Treatment } from '../../enums';
import Homepage from '../../pageobjects/homepage';
import * as assert from 'assert';
import { Browser } from '../../../src/browser';
import { Environment } from '../../envs';
import { Api } from '../../../src/api';
import { TestApi } from '../../api';
import { Article } from '../../models/article';
import { parseJson } from '../../../src/utilities/parser';

describe('Verify results for selected filters', function () {

    // Run setup before executing test steps
    before(function() {
        Browser.init(Environment.getUrl());
    });

    it('Should display the correct articles list', async function() {

        const filters: String[] = Array(LifeChanges.SexAndIntimacy, Treatment.RadioTherapy);

        Homepage.selectFilters(filters);

        const apiResponse: string = await Api.getResponse(
                                                        TestApi.Articles(
                                                                LifeChanges.SexAndIntimacy,
                                                                Treatment.RadioTherapy)
                                                        );
                                                        
        const apiArticles: Article[] = parseJson<Article>(apiResponse);
                
        const pageArticles: Article[] = await Homepage.getResults();

        apiArticles.forEach((article, index) => {
            assert.equal(pageArticles[index].title.title, article.title.title,
                "Title did not match. Expected: " + article.title.title + " ***** Actual: " + pageArticles[index].title.title);

            assert.equal(pageArticles[index].subtitle, article.subtitle, "Subtitle did not match.");
        });
    });
});