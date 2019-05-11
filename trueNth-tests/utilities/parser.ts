import * as fs from 'fs';

export function parseCsv(filePath: string, mappings) {
    const inputs = ["treatment", "agegp", "nonwhite", "livingwithpartner", "empstatuspredx"];
    
    const data = fs.readFileSync(filePath).toString();
    let lines = data.split('\r\r');

    let result = [];

    const header = lines[0];

    lines = lines.splice(1, lines.length);

    lines.forEach((line, lineIndex) => {
        line = line.replace('\'', '').replace('\n', '');
        let values = line.split(',');

        let object = {};
        // object["insights"] = {};

        values.forEach((value, index) => {
            if(inputs.includes(header.split(',')[index].trim())) {
                object[header.split(',')[index].trim()] = value === '99' ? null : mappings[header.split(',')[index].trim()](value);
            } else {
                // object["insights"][header.split(',')[index].trim()] = value;
                object[header.split(',')[index].trim()] = value;
            }

            // add insight number as per the data file
            object["insightIndex"] = lineIndex;
        });

        result.push(object);
    });

    fs.writeFileSync("./parsed.json", JSON.stringify(result));

    return JSON.parse(JSON.stringify(result));
}