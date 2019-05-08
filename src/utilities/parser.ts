
export function parseJson<T>(data: string ){
    let result: T[] = JSON.parse(data);
    return result;
}