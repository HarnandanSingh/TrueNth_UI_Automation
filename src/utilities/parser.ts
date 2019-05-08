import * as fs from 'fs';

export function parseJson<T>(data: string ){
    let result: T[] = JSON.parse(data);
    return result;
}

export function parseCsv(filePath: string) {
    let inputs = ["treatment", "agegp", "nonwhite", "livingwithpartner", "empstatuspredx"];
    
    let data = fs.readFileSync(filePath).toString();
    let lines = data.split('\r\r');

    let result = [];

    let header = lines[0];

    lines = lines.splice(1, lines.length);

    lines.forEach((line, i) => {
        line = line.replace('\'', '').replace('\n', '');
        let values = line.split(',');

        let object = {};
        object["insights"] = {};

        values.forEach((value, index) => {
            if(inputs.includes(header.split(',')[index].trim())) {
                object[header.split(',')[index]] = value === '99' ? null : value;
            } else {
                object["insights"][header.split(',')[index]] = value;
            }
        });

        result.push(object);
    });

    return JSON.parse(JSON.stringify(result));
}