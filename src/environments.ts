import "isomorphic-fetch";
import { Article } from './models/article';

export const Environment = {
    TEST: "https://test.truenth.org/",

    PROD: "https://truenth.org/",

    init: () => {
        browser.url(Environment[process.env.environment] + "en-gb");
    },
    
    getArticlesFromApi: async (lifeChange = '', treatment = '') => {
        lifeChange = lifeChange === undefined ? '' : lifeChange;
        treatment = treatment === undefined ? '' : treatment;
        return fetch(`https://truenth.org/en-gb/api/articles/?life_change=${lifeChange}&treatment=${treatment}`)
                .then(response => {
                    return response.json().then(res => {
                        let result: Article[] = JSON.parse(JSON.stringify(res));
                        return result;
                    });
                });
    }
}