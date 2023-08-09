const puppeteer = require('puppeteer');
const readline = require('readline');

// Creates a readline interface for user input using Node's readline module. This allows for basic CLI communication 
// to modify the URL data.
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Function to create a square border using '-' characters, for aesthetic purposes.
function createSquareBorder(content) {
  const maxLength = Math.max(...content.map(line => line.length));
  const borderLine = '-'.repeat(maxLength + 4);

  const borderedContent = [
    borderLine,
    ...content.map(line => `| ${line}${' '.repeat(maxLength - line.length)} |`),
    borderLine,
  ];

  return borderedContent.join('\n');
}

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();

  // Asks the user for input values which are then used to directly edit the page URL
  rl.question('Enter departure airport IATA code: ', (departureAirportIataCode) => {
    rl.question('Enter arrival airport IATA code: ', (arrivalAirportIataCode) => {
      rl.question('Enter outbound departure date from (YYYY-MM-DD): ', (outboundDepartureDateFrom) => {
        rl.question('Enter outbound departure date to (YYYY-MM-DD): ', async (outboundDepartureDateTo) => {
          const url = `https://www.ryanair.com/api/farfnd/3/oneWayFares?&ToUs=AGREED&departureAirportIataCode=${departureAirportIataCode}&arrivalAirportIataCode=${arrivalAirportIataCode}&language=en&limit=16&market=en-gb&offset=0&outboundDepartureDateFrom=${outboundDepartureDateFrom}&outboundDepartureDateTo=${outboundDepartureDateTo}&priceValueTo=150`;

          // Navigates to the URL containing the JSON data
          await page.goto(url);

          // Extracts and parses the JSON data
          const jsonData = await page.evaluate(() => {
            const preElement = document.querySelector('pre');
            return JSON.parse(preElement.textContent);
          });

          // Extracts and formats the flight information along with prices
          const formattedFlightInfo = jsonData.fares.map(fare => {
            const outboundFlight = fare.outbound;
            const priceValue = outboundFlight.price.value;
            const currencyCode = outboundFlight.price.currencyCode;
            const departureDate = outboundFlight.departureDate;
            const arrivalDate = outboundFlight.arrivalDate;
            const departureAirport = outboundFlight.departureAirport.name;
            const arrivalAirport = outboundFlight.arrivalAirport.name;

            return `${departureDate} - ${arrivalDate}\nFrom ${departureAirport} to ${arrivalAirport}\nPrice: ${priceValue} ${currencyCode}\n`;
          });

          // Formats the flight information using the aforementioned border function in the beginning
          const formattedOutput = createSquareBorder(formattedFlightInfo);

          // Prints the more easily readable output of the flight data
          console.log(formattedOutput);

          await browser.close();
          rl.close();
        });
      });
    });
  });
})();
