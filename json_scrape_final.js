const puppeteer = require('puppeteer');

// Function to create a square border using '-' characters
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


  const url = 'https://www.ryanair.com/api/farfnd/3/oneWayFares?&ToUs=AGREED&departureAirportIataCode=TIA&language=en&limit=16&market=en-gb&offset=0&outboundDepartureDateFrom=2023-08-09&outboundDepartureDateTo=2024-08-09&priceValueTo=150';
  await page.goto(url);


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

  // Formats the flight information with a square border
  const formattedOutput = createSquareBorder(formattedFlightInfo);

  // Prints the formatted flight information
  console.log(formattedOutput);

  await browser.close();
})();
