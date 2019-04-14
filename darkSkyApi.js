// example URL: https://api.darksky.net/forecast/c9347fa8676b53635fc1ed28f4d43d46/39.9444,-75.1638

function getDarkSkyWeather() {
  // darkSkyApiKey is set in api-key.gs
  var apiLat = '39.9444';
  var apiLon = '-75.1638';
  var apiUrl = "https://api.darksky.net/forecast/" + apiKey + "/" + apiLat + "," + apiLon + "?units=si&exclude=flags,minutely,daily,alerts";

  var result = UrlFetchApp.fetch(apiUrl);

  Logger.log(result);
  
  var json = JSON.parse(result);
  Logger.log(json.currently);
  
  var temp = json.currently.temperature;
  var icon = json.currently.icon;
  return json;
}

/*
function addRow() {
  var sheet = SpreadsheetApp.getActiveSheet();
  sheet.appendRow([
      'Cotton Sweatshirt XL',
      'css004'
  ]);
}
*/