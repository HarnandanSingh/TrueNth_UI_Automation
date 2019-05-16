
import { parseCsv, parseJson } from '../../../src/utilities/parser';
import { map } from '../../dataFileMappings';
import * as fs from 'fs';
import * as assert from 'assert';
import { Insight } from 'trueNth-tests/models/insight';

describe('Verify results for selected filters', function () {

    it('Should have the correct number of records', async function() {

        const parsed = parseCsv("./trueNth-tests/dataFile.csv", "\r\r");

        const results: string = map(parsed);
        
        // Assert results with what's coming from the Api
        // Object order of results is the same as the Api
    });
});