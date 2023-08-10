/// Attempted unit testing ---- Momentarily Dysfunctional! ///
 ////////////////////////////////////////////////////////////


const puppeteer = require('puppeteer');
const readline = require('readline');
const { fetchFlightInfo } = require('flight-prices-api\json_scrape_final.js');

jest.mock('readline');
jest.setTimeout(30000); 

describe('Flight Info Fetching', () => {
    beforeAll(() => {
        readline.createInterface.mockReturnValue({
            question: (question, callback) => {
                callback('ABC'); 
            },
            close: jest.fn()
        });
    });

    it('should fetch flight information', async () => {
        const flightInfo = await fetchFlightInfo();

        expect(Array.isArray(flightInfo)).toBe(true);
        expect(flightInfo.length).toBeGreaterThan(0);

    });
});
