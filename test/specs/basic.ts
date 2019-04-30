import { LifeChanges } from '../../src/enums';
import Homepage from '../../src/pageobjects/homepage';
import * as assert from 'assert';
import { Environment } from '../../src/environments';
import { Article } from '../../src/models/article';

describe('Launch TrueNth site', function () {

    // Run setup before executing test steps
    before(function() {
        Environment.init();
    });

    it('Select life changes', async function() {

        Homepage.selectLifeChanges(LifeChanges.SexAndIntimacy);

        let apiArticles: Article[] = await Environment.getArticlesFromApi(LifeChanges.SexAndIntimacy)

        console.log("Api count ------" + apiArticles.length);
        
        let pageArticles: Article[] = await Homepage.getResults();
        console.log("Page count ------" + pageArticles.length);

        assert.equal(apiArticles[0].title.title, pageArticles[0].title.title, "Title did not match.");
        assert.equal(apiArticles[0].subtitle, pageArticles[0].subtitle, "Subtitle did not match.");
    });
})