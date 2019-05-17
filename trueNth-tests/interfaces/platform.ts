export abstract class Platform{
    abstract selectFilters(filters: String[]): void

    waitForSpinner(): boolean {
        const spinner = $(".spinner-wrapper");
        return spinner.getAttribute("class") == "spinner-wrapper"
    }

    // cookieBannerLoaded = async function(): Promise<void> {
    //     await browser.pause(4000)
    //     const cookieBanner: any = await $$(".cookie-consent");
    //     console.log(cookieBanner)
    //     const cookieLocation = await cookieBanner[0].getLocation()
    //     console.log(cookieLocation)
         
    // }

    // cookieBannerLoaded = function(): boolean {
    //     browser.pause(1000)
    //     const cookieBanner: any = $$(".cookie-consent");
        // while loop - check to see if height and bottom are equal, if they are equal return true
            //doesnt work because bottom and height are always the same
        //waitforcookiebanner below should be waiting for this^ to return true 
    // }
    
    // waitForCookieBanner() {
    //     browser.waitUntil(() => this.cookieBannerLoaded());
    // }    

}
