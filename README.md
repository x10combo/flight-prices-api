<!DOCTYPE html>
<html>

<body>
<h1>Flight Prices API Documentation</h1>
<p>The Flight Prices API is designed to provide users with a way to retrieve flight prices between different airports. This API utilizes web scraping techniques to fetch flight information and prices from the Ryanair website.</p>

<h2>Table of Contents</h2>
<ul>
  <li><a href="#getting-started">Getting Started</a>
    <ul>
      <li><a href="#prerequisites">Prerequisites</a></li>
      <li><a href="#installation">Installation</a></li>
    </ul>
  </li>
  <li><a href="#usage">Usage</a>
    <ul>
      <li><a href="#endpoint">Endpoint</a></li>
      <li><a href="#request">Request</a></li>
      <li><a href="#response">Response</a></li>
      <li><a href="#curl">cURL</a></li>
      <li><a href="#puppeteer">Puppeteer Automation</a></li>
      <li><a href="#masking">Masking</a></li>
      <li><a href="#unit-testing">Unit Testing</a></li>
    </ul>
  </li>
</ul>

<h2 id="getting-started">Getting Started</h2>

<h3 id="prerequisites">Prerequisites</h3>
<p>Before you begin, make sure you have the following tools and dependencies installed:</p>
<ul>
  <li><a href="https://www.npmjs.com/">npm</a></li>
  <li><a href="https://laravel.com/">Laravel (Including the Artisan tool)</a></li>
  <li><a href="https://www.postman.com/">Postman</a></li>
  <li><a href="https://getcomposer.org/">Composer (for installing PHP libraries)</a></li>
  <li><a href="https://pptr.dev/">Puppeteer</a></li>
</ul>
<p>For traffic monitoring and proxy/masking services:</p>
<ul>
  <li><a href="https://www.charlesproxy.com/">Charles</a></li>
</ul>

<h3 id="installation">Installation</h3>
<p><strong>npm</strong></p>
<ul>
  <li>Clone this repository to your local machine.</li>
  <li>Navigate to the project directory using the terminal.</li>
  <li>Install the required Node.js packages by running the following command:</li>
</ul>
<pre><code>npm install</code></pre>

<p><strong>Laravel</strong></p>
<ol>
  <li>Open a terminal or command prompt.</li>
  <li>Make sure you have Composer installed. If not, download and install Composer from <a href="https://getcomposer.org/" target="_blank">getcomposer.org</a>.</li>
  <li>Navigate to the directory where you want to install Laravel.</li>
  <li>Run the following command to create a new Laravel project:</li>
</ol>
<pre><code>composer create-project --prefer-dist laravel/laravel flight-prices-api</code></pre>
<ol start="5">
  <li>Once the installation is complete, navigate into your project directory:</li>
</ol>
<pre><code>cd flight-prices-api</code></pre>
<ol start="7">
  <li>Copy the <code>.env.example</code> file and rename it to <code>.env</code>:</li>
</ol>
<pre><code>cp .env.example .env</code></pre>
<ol start="8">
  <li>Generate an application key by running the following command:</li>
</ol>
<pre><code>php artisan key:generate</code></pre>
<ol start="9">
  <li>Configure your database settings in the <code>.env</code> file. It should be something like this:</li>
</ol>
<pre><code>
DB_CONNECTION=mysql
DB_HOST=127.0.0.1
DB_PORT=3306
DB_DATABASE=your_database_name
DB_USERNAME=your_database_user
DB_PASSWORD=your_database_password
</code></pre>
<ol start="10">
  <li>Run migrations to create the necessary database tables:</li>
</ol>
<pre><code>php artisan migrate</code></pre>
<ol start="11">
  <li>Your Laravel installation is now complete! You can start the development server using:</li>
</ol>
<pre><code>php artisan serve</code></pre>

<p><strong>Postman</strong></p>

<h3>Step 1: Download Postman</h3>
<p>Go to the official Postman website:</p>
<p><a href="https://www.postman.com/" target="_blank">https://www.postman.com/</a></p>
<p>Click on the "Download the App" button to start downloading the installer for your operating system.</p>

<h3>Step 2: Install Postman</h3>
<p>Once the installer is downloaded, follow these steps:</p>
<ol>
  <li>Run the installer executable.</li>
  <li>Follow the on-screen instructions to install Postman.</li>
  <li>After the installation is complete, launch Postman.</li>
</ol>

<p><strong>Composer</strong></p>
<ol>
  <li><strong>Install PHP:</strong><br>
   Download the Windows PHP binaries from the <a href="https://windows.php.net/download/">official PHP website</a>. Make sure to select the version that matches your system architecture (x64 or x86). Extract the downloaded zip file to a directory of your choice (e.g., <code>C:\php</code>).</li>

  <li><strong>Install Composer:</strong><br>
   Download and install Composer by running the Composer Windows Installer from the <a href="https://getcomposer.org/download/">official Composer website</a>. Follow the installation instructions in the installer.</li>

  <li><strong>Verify Installation:</strong><br>
   Open a new Command Prompt (CMD) window and run the following command to verify that Composer is correctly installed:<br>
   <code>composer --version</code><br>
   This should display the version of Composer you installed.</li>

  <li><strong>Create composer.json File:</strong><br>
   In your Flight Prices API project directory, create a file named <code>composer.json</code>. This file lists the PHP packages or libraries your project depends on. Here's an example of what the structure should look like:<br>
   <pre><code>"require": {
        "php": "^8.0.2",
        "guzzlehttp/guzzle": "^7.7",
        "laravel/framework": "^9.19",
        "laravel/sanctum": "^3.0",
        "laravel/tinker": "^2.7"
    },</code></pre>
  </li>

  <li><strong>Install Dependencies:</strong><br>
   Open a Command Prompt (CMD) window and navigate to your project directory. Run the following command to install the dependencies listed in your <code>composer.json</code> file:<br>
   <code>composer install</code><br>
   Composer will read the <code>composer.json</code> file, download the required packages, and set up autoloading.
  </li>
</ol>

<p><strong>Puppeteer</strong></p>
<p>Before you begin, make sure you have the following prerequisites installed on your system:</p>
<ul>
  <li>Node.js (version 10 or higher)</li>
  <li>npm (Node.js package manager)</li>
</ul>
<ol>
  <li><strong>Install Node.js and npm:</strong><br>
   If Node.js and npm are not already installed, you can download and install them from the <a href="https://nodejs.org/">official Node.js website</a>.</li>

  <li><strong>Create a New Project Directory:</strong><br>
   Open a terminal or command prompt and navigate to the directory where you want to create your Puppeteer project. Run the following command to create a new directory and initialize a new Node.js project:<br>
   <code>mkdir flight-prices-api</code><br>
   <code>cd flight-prices-api</code><br>
   <code>npm init -y</code></li>

  <li><strong>Install Puppeteer:</strong><br>
   In your project directory, run the following command to install Puppeteer as a dependency:<br>
   <code>npm install puppeteer</code></li>

  <li><strong>Write Your First Puppeteer Script:</strong><br>
   Create a new JavaScript file (<code>scrape.js</code>) in your project directory. Inside the file, write a simple Puppeteer script to open a webpage and take a screenshot:<br>
   <pre><code>const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto('https://www.ryanair.com/gb/en/cheap-flights');
  await page.screenshot({ path: 'screenshot.png' });

  await browser.close();
})();</code></pre>
</li>

  <li><strong>Run Your Puppeteer Script:</strong><br>
   In your terminal, run the following command to execute your Puppeteer script:<br>
   <code>node scrape.js</code><br>
   Puppeteer will launch a headless browser, open the specified URL, take a screenshot, and save it as <code>screenshot.png</code>.</li>
</ol>



<h2 id="usage">Usage</h2>
<h3>API Access</h3>
<p>Beforehand, we need to visit https://www.ryanair.com/flights/gb/en.</p>

<p>After we have typed our flight specifics beforehand, the link should look something like this:</p>
<img src="https://github.com/x10combo/flight-prices-api/assets/115559784/03aede7c-12c7-40ea-aba0-9de87dc2035b.">

<p>Searching anything at all will provide us with a URL which we need to send a GET request to via Postman. It is crucial to find this, 
which can be done by opening Inspect Element (F12) and accessing the Network tab:
<img src="https://github.com/x10combo/flight-prices-api/assets/115559784/0bb53908-f267-496d-9d44-a6cd48deabea">

<b>Make sure to refresh the site</b> and open Network to find the mentioned URL. We can now access the flight API of the site.
<p><strong>NOTE:</strong> This API URL is related to a specific flight which was available at testing. It may stil be available at the time of writing this, but if it's not,
just send another request as the steps mention with different (correct) details and there should be no problems. </p>

 
<h3 id="endpoint">Endpoint</h3>

<p>The API provides a single endpoint for retrieving flight prices:</p>
<ul>
  <li><strong>Endpoint:</strong> /flights</li>
  <li><strong>HTTP Method:</strong> POST</li>
</ul>

<h3 id="request">Request</h3>
<p>The /flights endpoint expects a JSON body with the following parameters:</p>
<ul>
  <li><code>departure</code>: The three-letter code of the departure airport.</li>
  <li><code>arrival</code>: The three-letter code of the arrival airport.</li>
  <li><code>departure_date</code>: The date of departure in the format 'YYYY-MM-DD'.</li>
</ul>
<p>Here's our GET request done in Postman using the URL we mentioned in the Usage tab:</p>
<img src="https://github.com/x10combo/flight-prices-api/assets/115559784/153fa414-c5cf-434c-9265-4843f15dd6f6">



<h3 id="response">Response</h3>
<p>The API responds with a JSON object containing a list of available flights and their corresponding prices, which can be accessed by sending a POST request to our URL which in this case is http://localhost:8000/api/flights. The response format is as follows:</p>
<img src="https://github.com/x10combo/flight-prices-api/assets/115559784/e945f060-2ec7-42b6-88cd-0eaa552712bb">

<p>One important thing to note is that you will be shown the cheapest flight for the specific parameters that you enter. For example, below you can see that I have searched for a flight which departs from Tirana (TIA) and lands in Catania (CTA). This specific flight is designated for November, so the value of "departure_date" should be the last of the month. Since the request I sent matches the flight data on the website, I am presented with the specific data as well as the price, which I was looking for. </p> 
<img src="https://github.com/x10combo/flight-prices-api/assets/115559784/c94d23b3-f9f2-4b49-bccb-a3880a4199b5">


<img src="https://github.com/x10combo/flight-prices-api/assets/115559784/7b6bc2eb-3252-4e16-b85c-6e6242d76640">

<p>The reason why it matters for the data entered to be correct is that if we search for a flight with data values that are not present in the website, we will get an empty array, which of course means that flight does not exist. (Notice the intentional typo that I have made here)</p>
<img src="https://github.com/x10combo/flight-prices-api/assets/115559784/09e90bb2-b29b-4025-adff-c9aa43590cd8)">



<h3 id="curl">cURL variant:</h3>
<p> The last step would be to commit a POST request using cURL as an alternative to this process. This will allow us to view the flight data from within the terminal, if the user wants to. </p>
This can be done by inputting this code snppet into a terminal, preferably Bash:
(NOTE: Do not close your current Bash terminal because that will terminate your laravel server. Open a new one.)
<p> </p>
<code>
curl -X POST -H "Content-Type: application/json" -d '{
    "flight_number": "ABC123",
    "origin": "New York",
    "destination": "Los Angeles",
    "departure_time": "2023-08-07T12:00:00"
}' http://127.0.0.1:8000/api/flights
</code>

<p> As a result, you will be returned the raw flight data. You can also choose for the terminal to show you that the data was retrieved successfully in a statement by adding it into the FlightController.php file, but that may or may not provide you with the data itself, so I chose this as an alternative instead. The reply should look like this: </p>
<img src="https://github.com/x10combo/flight-prices-api/assets/115559784/ef48b61f-589c-4b3e-baf4-6597d9bb6f2c">


<h3 id="puppeteer">Puppeteer Automation</h3>
<p><b>After installing the required dependencies, the first thing you should do is create the basic puppeteer structure in your .js file. You can name it whatever you want, and then execute it via "node [filename.js]". Everything within <code>(async()</code> will be part of the automated script. </b></p>
<code>const puppeteer = require('puppeteer');

(async () => {
<---scraping logic and proxy functionality--->
})();</code>

<p> For example, as you can see below, the automated actions go as follows: The program first waits for a connection to the proxy server, then the <code>readline</code> node module is used to obtain the input data from the user regarding the flight parameters. They are then applied to the URL, which Puppeteer then travels to. Since we have headless set to true, we do not see the browser being opened and performing actions. Rather, we get our results after a short delay which is caused by the proxy service making sure we don't get blacklisted.</p>
<p> </p>
<p> The data is then gathered into a readable and compacted format and presented to the user with the values they requested. </p>

<img src="https://github.com/x10combo/flight-prices-api/assets/115559784/e2899f91-78fa-463d-b8eb-43c453cd1f33">

<p>Any puppeteer script is executed with the <code>node [....].js</code> command from within your project's root directory in a terminal, after you've made sure the server and proxy service are up and running.</p>
<p>The end result is this easy and accessible user display: </p>
<img src="https://github.com/x10combo/flight-prices-api/assets/115559784/10d4b714-93c1-497e-9b02-6c402c30e2b5">

<p> </p>
<p> </p>

<h3 id="masking">Masking</h3>
<p><b>However,</b> you need to keep in mind that the above result is only possible once you have a stable connection to Charles and have successfully set up your SSL proxying settings. This is how you're supposed to do that: </p>
<p>After executing all the above steps, you should make sure to open Charles and connect to a preferred port. This project uses :8888 so use that to avoid any issues. From there, press the <b>Start Recording</b> button to begin the sniffing process. From there, proceed with executing your .js script (Make sure the laravel server is running and that you are in the project's root).
You should now see this in your Charles window:
</p>
<img src="https://github.com/x10combo/flight-prices-api/assets/115559784/d7fa12cd-efb3-4513-8b94-b7951ebdf20f">
<p>
 That link is exactly what we need. You will notice that on my screen, SSL proxying is enabled. It needs to be for this to work. To enable it, simply right click the highlighted link in the left panel and press <b>Enable SSL Proxying</b>. (For me it's greyed out because my proxy service is actively running).</p>
 <img src="https://github.com/x10combo/flight-prices-api/assets/115559784/aab72a8c-080d-47fd-b7c0-14b322731408">
<p>You should then see this button having been pressed. </p>
 <img src="https://github.com/x10combo/flight-prices-api/assets/115559784/8abfe610-074b-4c5b-a9c9-3e4139223450">

<p> If not, press it. It will enable SSL proxying directly, and then you can proceed. It is to be noted that once you have included your proxy connection in your Puppeteer code, <b>it will not run unless the proxy service is on.</b>. So if you're wondering why you're getting an error, it's (hopefully) that. </p>



<h3 id="unit-testing">Unit Testing</h3>
<p>I attempted to add Unit Testing with Jest but Puppeteer is already a good tool for automated testing so at the moment I did not implement it. Unit Testing for this project would require the refactoring of the original code in different functions, or "units",  which can be tested individually,by mocking elements like the input, client-server communication, body parameters, etc.</p>
A good unit-testing alternative, if it must be used, is PHPUnit, which should be included with this install of Puppeteer in the vendor/bin/phpunit directory. Likewise, the execute command for these types of tests is also <code>vendor/bin/phpunit</code>. 
You can further look into unit testing by checking out a small project i've made on this topic, which also uses PHP: https://github.com/x10combo/PHP-Calculator. The flights-prices-api project is quite more complex, but it should follow the same set of actions to a degree.
