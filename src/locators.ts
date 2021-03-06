/*
*   Gets web elements using the class locator
*
*   @param  locator     class name to use to locate the elements on the webpage
*   return              array of web elements
*/
export const getElementsByClass = (locator: string) => $$(`.${locator}`);

/*
*   Gets a specific web element using the class locator and index of the element in the list of elements
*
*   @param  locator     class name to use to locate the elements on the webpage
*   @param  index       index number of the element
*   return              web element
*/
export const getElementByClassAndIndex = function (locator: string, index: number = 0) {
    let elements = $$(`.${locator}`);
    return elements[index];
}

/*
*   Gets a web element using the id of the element
*
*   @param  locator             id to use to locate the elements on the webpage
*   return                      web element
*/
export const getElementById = (locator: string) => $(`#${locator}`);

/*
*   Gets web elements using the tag name
*
*   @param  locator             tag name to use to locate the elements on the webpage
*   return                      array of web elements
*/
export const getElementsByTagName = (locator: string) => $$(`<${locator} />`);

/*
*   Gets specific number of web elements using the tag name
*
*   @param  locator             tag name to use to locate the elements on the webpage
*   @param  numberOfElements    number of elements to return
*   return                      array of web elements
*/
export const getNumberOfElementsByTagName = function (locator: string, numberOfElements: number = 0) {
    let elements = $$(`<${locator} />`);

    let els = [];
    for(let i = 0; i < numberOfElements; i++) {
        els.push(elements[i]);
    }

    return els;
}

/*
*   Gets a specific web element using the tag name and index of the element in the list of elements
*
*   @param  locator     tag name to use to locate the elements on the webpage
*   @param  index       index number of the element
*   return              web element
*/
export const getElementByTagNameAndIndex = function (locator: string = '', index: number = 0) {
    let elements = $$(`<${locator} />`);
    return elements[index];
}