
export function parseJson<T>(data: string ){
    const result: T[] = JSON.parse(data);
    return result;
}