/*
*   Launches browser and navigates to a URL
*
*   @param  url     url to navigate to
*/
export const initialize = (url: string) => {
    browser.url(url);
}