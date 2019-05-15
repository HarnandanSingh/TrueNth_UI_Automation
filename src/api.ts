import "isomorphic-fetch";

/*
*   Calls an api endpoint
*
*   @param  apiEndpoint api endpoint to call
*   return              valid JSON formatted string
*/
export const Api = {
    get: async (apiEndpoint: string): Promise<string> => {

        return fetch(apiEndpoint)
                .then(async response => {
                    return response.json().then(res => {
                        return JSON.stringify(res);
                    });
                });
    }
}