<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Symfony\Component\Process\Process;

class FlightController extends Controller
{
    public function getFlightPrices(Request $request)
    {
        $departure = $request->input('departure');
        $arrival = $request->input('arrival');
        $departure_date = $request->input('departure_date');

        $process = new Process([
            'node',
            'puppeteer_script.js',
            $departure,
            $arrival,
            $departure_date,
        ]);

        $process->run();
        $flightData = $process->getOutput();

        return response()->json(['flights' => json_decode($flightData)], 200);
    }
}
