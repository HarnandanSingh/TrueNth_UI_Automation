var request = require('sync-request');
/*
*   Calls an api endpoint
*
*   @param  apiEndpoint api endpoint to call
*   return              valid JSON formatted string
*/
export const Api = {
    get: (apiEndpoint: string): string => {

        const result = request("GET", apiEndpoint);
        console.log(result.getBody('utf8'));
        return result.getBody('utf8');
    }
}