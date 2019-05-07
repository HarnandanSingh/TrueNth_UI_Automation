import "isomorphic-fetch";
import { Article } from './models/article';

export const Environment = {
    TEST: "https://test.truenth.org/",

    PROD: "https://truenth.org/",

    GB: "en-gb",

    ArticlesApi: (lifeChange = '', treatment = '') => `https://truenth.org/en-gb/api/articles/?life_change=${lifeChange}&treatment=${treatment}`,

    init: () => {
        browser.url(Environment[process.env.environment] + Environment[process.env.country]);
    },
    
    getResponseFromApi: async (apiEndpoint) => {

        return fetch(apiEndpoint)
                .then(response => {
                    return response.json().then(res => {
                        return JSON.stringify(res);
                    });
                });
    }
}