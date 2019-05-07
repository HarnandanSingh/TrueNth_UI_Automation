import "isomorphic-fetch";

export const Api = {
    Articles: (lifeChange = '', treatment = '') => `https://truenth.org/en-gb/api/articles/?life_change=${lifeChange}&treatment=${treatment}`,
    
    getResponse: async (apiEndpoint: string) => {

        return fetch(apiEndpoint)
                .then(async response => {
                    return response.json().then(res => {
                        return JSON.stringify(res);
                    });
                });
    }
}