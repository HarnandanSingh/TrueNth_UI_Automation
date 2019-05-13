
export const getElementsByClass = async (locator: string) => $$(`.${locator}`);

export const getElementsByClassAndIndex = async function (locator: string, index: number = 0) {
    let elements = await $$(`.${locator}`);
    return elements[index];
}

export const getElementById = async (locator: string) => $(`#${locator}`);

export const getElementsByTagName = async (locator: string, all: boolean = true, ) => $$(`<${locator} />`);

export const getNumberOfElementsByTagName = async function (locator: string, numberOfElements: number = 0) {
    let elements = await $$(`<${locator} />`);

    let els = [];
    for(let i = 0; i < numberOfElements; i++) {
        els.push(elements[i]);
    }

    return els;
}

export const getElementByTagNameAndIndex = async function (locator: string = '', index: number = 0) {
    let elements = await $$(`<${locator} />`);
    return elements[index];
}