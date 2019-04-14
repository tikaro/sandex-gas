// example URL: https://api.darksky.net/forecast/c9347fa8676b53635fc1ed28f4d43d46/39.9444,-75.1638
function getForecast(){
  clearSheet('Sandex');

  var sheet = getSheet('Sandex'); 
  addHeaders(sheet);

  var forecastHours = fetchForecastHours();
  addForecastHours(forecastHours, sheet);
}

//This applies the Header row to the Paid Invoices tab
function addHeaders(sheet) {
  sheet.appendRow([
   "time",
   "temperature" ,
   "dewPoint", 
   "humidity",
]);
}

function fetchForecastHours() {
  // darkSkyApiKey is set in api-key.js
  var apiLat = '39.9444';
  var apiLon = '-75.1638';
  var apiUrl = "https://api.darksky.net/forecast/" + darkSkyApiKey + "/" + apiLat + "," + apiLon + "?exclude=flags,minutely,daily,alerts";

  var result = UrlFetchApp.fetch(apiUrl);
  // Logger.log(result);

  var json = JSON.parse(result);
  // Logger.log(json.currently);

  var hours = [];
  hours = hours.concat(json.hourly.data);

  return hours;
}

//This populates the Sandex tab
function addForecastHours(hours, sheet) {
  hours.map(function(hour){  
    sheet.appendRow([
      hour.time,
      hour.temperature,
      hour.dewPoint,
      hour.humidity
    ]);
  });
}