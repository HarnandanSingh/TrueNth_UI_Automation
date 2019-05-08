
import { parseCsv } from '../../src/utilities/parser';

describe('Verify results for selected filters', function () {

    it('Should display the correct articles list', async function() {
        console.log(parseCsv("./test/dataFile.csv"));
    });
});