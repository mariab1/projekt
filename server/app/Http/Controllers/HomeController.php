<?php

namespace App\Http\Controllers;

use GuzzleHttp\Client;
use Illuminate\Http\Request;

class HomeController extends Controller
{
    /**
     * Create a new controller instance.
     *
     * @return void
     */
    public function __construct()
    {
        $this->middleware('auth');
    }

    /**
     * Show the application dashboard.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $http = new Client();

        $response = $http->post('http://iplanner.dev/oauth/token', [
            'form_params' => [
                'grant_type' => 'password',
                'client_id' => '2',
                'client_secret' => 'HZAsiliLBXxOzIq2I0FVldGE7aYlPUuWyWTfYt6s',
                'username' => 'martin@skydive.ee',
                'password' => 'asdasd',
                'scope' => '',
            ],
        ]);

        return json_decode((string) $response->getBody(), true);
    }
}
