
import { parseCsv, parseJson } from '../../../src/utilities/parser';
import { map } from '../../dataFileMappings';
import * as fs from 'fs';
import * as assert from 'assert';
import { Insight } from 'trueNth-tests/models/insight';

describe('Verify results for selected filters', function () {

    it('Should have the correct number of records', async function() {

        const parsed = parseCsv("./trueNth-tests/dataFile.csv", "\r\r");
        // fs.writeFileSync('./parsedJson.json', map(parsed));

        const results: Insight[] = parseJson<Insight>(map(parsed));

        console.log("NUMBER OF RESULTS: ********* " + results.length);
        assert.equal(1008, results.length, "LENGTH DID NOT MATCH");
    });
});