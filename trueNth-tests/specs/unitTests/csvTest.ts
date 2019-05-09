
import { parseCsv } from '../../utilities/parser';
import { mappings } from '../../dataFileMappings';

describe('Verify results for selected filters', function () {

    it('Should display the correct articles list', async function() {
        console.log(parseCsv("./trueNth-tests/dataFile.csv", mappings));
    });
});