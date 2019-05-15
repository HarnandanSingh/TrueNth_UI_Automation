import * as fs from 'fs';

/*
*   Parses a valid JSON formatted string to type T
*
*   <T> class that the parsed data should be mapped to
*
*   @param  data    valid JSON formatted string
*/
export function parseJson<T>(data: string ){
    const result: T[] = JSON.parse(data);
    return result;
}

/*
*   Parses a CSV file
*
*   @param  filePath        path of the csv file to parse
*   @param  lineSeparator   character(s) to use to split the lines/rows in the file. Defaults to "\r" (carriage return/enter)
*   @param  valueSeparator  character to use to split the values in a line. Defaults to "," (comma)
*/
export function parseCsv(filePath: string, lineSeparator: string = '\r', valueSeparator: string = ','): {} {
    
    const data = fs.readFileSync(filePath).toString();
    let lines = data.split(lineSeparator);

    let parsed = {};
    parsed["header"] = lines[0];

    let objects: Array<{}> = new Array();
    
    /*
    *   Only keep lines 1 to n
    *   and exclude line 0 i.e. the header line 
    */
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