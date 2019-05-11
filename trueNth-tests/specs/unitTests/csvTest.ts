
import { parseCsv } from '../../../src/utilities/parser';
import { map } from '../../dataFileMappings';
import * as fs from 'fs';

describe('Verify results for selected filters', function () {

    it('Should display the correct articles list', async function() {
        const parsed = parseCsv("./trueNth-tests/dataFile.csv");
        fs.writeFileSync('./parsedJson.json', map(parsed));
    });
});