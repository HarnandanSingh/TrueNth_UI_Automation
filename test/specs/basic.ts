import { LifeChanges, Treatment } from '../../src/enums';
import Homepage from '../../src/pageobjects/homepage';
import * as assert from 'assert';
import { Environment } from '../../src/environments';
import { Article } from '../../src/models/article';

describe('Launch TrueNth site', function () {

    // Run setup before executing test steps
    before(function() {
        Environment.init();
    });

    it('Verify life changes results', async function() {

        Homepage.selectLifeChanges(LifeChanges.SexAndIntimacy);
        Homepage.selectTreatment(Treatment.RadioTherapy);

        let apiArticles: Article[] = await Environment.getArticlesFromApi(LifeChanges.SexAndIntimacy, Treatment.RadioTherapy);
        
        let pageArticles: Article[] = await Homepage.getResults();

        apiArticles.forEach((article, index) => {
            assert.equal(article.title.title, pageArticles[index].title.title, "Title did not match.");
            assert.equal(article.subtitle, pageArticles[index].subtitle, "Subtitle did not match.");
            console.log("Api: ******** " + article.title.title);
            console.log("Page: ******** " + pageArticles[index].title.title);
        })
    });
})