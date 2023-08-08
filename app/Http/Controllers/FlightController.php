<?php


namespace App\Http\Controllers;
use GuzzleHttp\Client;
use Illuminate\Http\Request;

/**
 * FlightController as a class handles requests used for recieving the flight prices and flight details.
 * Its' @package is found in App\Http\Controllers.
 */
class FlightController extends Controller
{
    /**
     * This function retrieves flight prices based on provided values for departure, arrival and departure date.
     * @param Request $request represents the HTTP request object containing user input data.
     * @return \Illuminate\Http\JsonResponse represents the JSON response containing flight details and prices.
     */
    public function getFlightPrices(Request $request)
    {
        // Extraction of input parameters from the given request
        $departure = $request->input('departure');
        $arrival = $request->input('arrival');
        $departure_date = $request->input('departure_date');
        $url = 'https://www.ryanair.com/api/farfnd/3/oneWayFares';

        // GET request parameters for flight searching
        $params = [
            'ToUs' => 'AGREED',
            'arrivalAirportIataCode' => $arrival,
            'departureAirportIataCode' => $departure,
            'language' => 'en',
            'limit' => 16,
            'market' => 'en-gb',
            'offset' => 0,
            'outboundDepartureDateFrom' => $departure_date,
            'outboundDepartureDateTo' => $departure_date,
            'priceValueTo' => 150,
        ];

        // Creation of a new Guzzle HTTP client using the $client variable.
        $client = new Client();

        try {
            // Creation of a GET request to retrieve flight data from the API
            $response = $client->request('GET', $url, ['query' => $params]);

            // Decoding of a response body to extract the flight data
            $flightData = json_decode($response->getBody()->getContents(), true);

             // Mapping of the flight data for the purpose of extracting specific properties
            $mappedData = array_map(function ($flight) {
                return [
                    'price' => $flight['outbound']['price']['value'],
                    'departureAirport' => $flight['outbound']['departureAirport']['iataCode'],
                    'arrivalAirport' => $flight['outbound']['arrivalAirport']['iataCode'],
                    'departureDate' => $flight['outbound']['departureDate'],
                    'arrivalDate' => $flight['outbound']['arrivalDate'],
                ];
            }, $flightData['fares']);

            // Returns the mapped response as JSON with a HTTP Status of 200 (OK)
            return response()->json(['flights' => $mappedData], 200);
        } catch (\Exception $e) {
            /**  Handles and then returns any errors that may occurr 
            *during the request with an error code of 500 (Internal Server Error)
            */
            return response()->json(['error' => $e->getMessage()], 500);
        }
    }
}
