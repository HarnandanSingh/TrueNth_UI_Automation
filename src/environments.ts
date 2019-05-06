import "isomorphic-fetch";
import { Article } from './models/article';

export const Environment = {
    TEST: "https://test.truenth.org/",

    PROD: "https://truenth.org/",

    GB: "en-gb",

    init: () => {
        browser.url(Environment[process.env.environment] + Environment[process.env.country]);
    },
    
    getArticlesFromApi: async (lifeChange = '', treatment = '') => {

        return fetch(`https://truenth.org/en-gb/api/articles/?life_change=${lifeChange}&treatment=${treatment}`)
                .then(response => {
                    return response.json().then(res => {
                        let result: Article[] = JSON.parse(JSON.stringify(res));
                        return result;
                    });
                });
    }
}