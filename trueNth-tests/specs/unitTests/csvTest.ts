
import { parseCsv } from '../../../src/utilities/parser';
import { map } from '../../dataFileMappings';
import * as fs from 'fs';
import * as assert from 'assert';

describe('Verify results for selected filters', function () {

    it('Should have the correct number of records', async function() {
        const parsed = parseCsv("./trueNth-tests/dataFile.csv");
        // fs.writeFileSync('./parsedJson.json', map(parsed));

        const results: [] = JSON.parse(map(parsed));
        console.log("NUMBER OF RESULTS: ********* " + results.length);
        assert.equal(1008, results.length, "LENGTH DID NOT MATCH");
    });
});