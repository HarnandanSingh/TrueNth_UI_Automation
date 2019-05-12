import "isomorphic-fetch";

export const Api = {
    get: async (apiEndpoint: string) => {

        return fetch(apiEndpoint)
                .then(async response => {
                    return response.json().then(res => {
                        return JSON.stringify(res);
                    });
                });
    }
}