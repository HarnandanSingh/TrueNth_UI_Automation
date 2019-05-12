import * as fs from 'fs';


export function parseJson<T>(data: string ){
    const result: T[] = JSON.parse(data);
    return result;
}

export function parseCsv(filePath: string, lineSeparator: string = '\r\r', valueSeparator: string = ','): {} {
    
    const data = fs.readFileSync(filePath).toString();
    let lines = data.split(lineSeparator);

    let parsed = {};
    parsed["header"] = lines[0];

    let objects: Array<{}> = new Array();
    
    // Only keep lines 1 to n
    // and exclude line 0 i.e. the header line
    lines = lines.splice(1, lines.length - 1);
    
    lines.forEach((line, index) => {
        let object = {};
        line = line.replace('\'', '').replace('\n', '');

        object['values'] = line.split(valueSeparator);

        objects.push(object);
    });

    parsed["objects"] = objects;

    return parsed;
}