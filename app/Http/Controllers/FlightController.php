<?php

namespace App\Http\Controllers;
use GuzzleHttp\Client;
use Illuminate\Http\Request;

class FlightController extends Controller
{
    public function getFlightPrices(Request $request)
    {
        $departure = $request->input('departure');
        $arrival = $request->input('arrival');
        $departure_date = $request->input('departure_date');
        $url = 'https://www.ryanair.com/api/farfnd/3/oneWayFares';

        // GET request parameters
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

        $client = new Client();

        try {
            // Make the GET request
            $response = $client->request('GET', $url, ['query' => $params]);

            // Get the response body
            $flightData = json_decode($response->getBody()->getContents(), true);

             // Map the data to extract specific properties
            $mappedData = array_map(function ($flight) {
                return [
                    'price' => $flight['outbound']['price']['value'],
                    'departureAirport' => $flight['outbound']['departureAirport']['iataCode'],
                    'arrivalAirport' => $flight['outbound']['arrivalAirport']['iataCode'],
                    'departureDate' => $flight['outbound']['departureDate'],
                    'arrivalDate' => $flight['outbound']['arrivalDate'],
                ];
            }, $flightData['fares']);

            // Return the mapped response as JSON
            return response()->json(['flights' => $mappedData], 200);
        } catch (\Exception $e) {
            // Handle any errors that occurred during the request
            return response()->json(['error' => $e->getMessage()], 500);
        }
    }
}
