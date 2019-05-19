import { LifeChanges, Treatment } from '../../enums';
import Homepage from '../../pageobjects/homepage';
import MobileHomepage from '../../pageobjects/homepage_mobile'
import { Platform } from '../../interfaces/platform'
import * as assert from 'assert';
import { initialize } from '../../../src/environment';
import { Environment } from '../../envs';
import { Api } from '../../../src/api';
import { Articles } from '../../apiEndpoints';
import { Article } from '../../models/article';
import { parseJson } from '../../../src/utilities/parser';

describe('Verify results for selected filters', function () {

    // Run setup before executing test steps
    before(function() {
        initialize(Environment.url());
    });

    it('Should display the correct articles list', function() {

        const filters: String[] = Array(LifeChanges.SexAndIntimacy, Treatment.RadioTherapy);
        
        if (process.env.platform == "web") {
            var platform: Platform = Homepage
        } else {
            var platform: Platform = MobileHomepage
        }
        // var platform: Platform = process.env.platform == "web" ? Homepage | MobileHomepage

        // platform.waitForCookieBanner()

        // browser.pause(5000)

        platform.selectFilters(filters);

        const apiResponse: string = Api.get(
                                                    Articles(
                                                        LifeChanges.SexAndIntimacy,
                                                        Treatment.RadioTherapy
                                                    )
                                                );
                                                        
        const apiArticles: Article[] = parseJson<Article>(apiResponse);
                
        const pageArticles: Article[] = Homepage.getResults();
        console.log(pageArticles[0].title.title);

        apiArticles.forEach((article, index) => {
            assert.equal(pageArticles[index].title.title, article.title.title,
                "Title did not match. Expected: " + article.title.title + " ***** Actual: " + pageArticles[index].title.title);

            assert.equal(pageArticles[index].subtitle, article.subtitle, "Subtitle did not match.");
        });
    });
});