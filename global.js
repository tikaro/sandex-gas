// function to add menu item to spreadsheet so that the user can get forecast from Dark Sky
function onOpen() { 
  
  var ss = SpreadsheetApp.getActiveSpreadsheet()
  var entries = [{  
    name: "Refresh Sandex", 
    functionName: "getForecast"
  }];

  ss.addMenu("DARK SKY", entries).addToUi(); // Google function for adding menu to open sheet

};

// Clear sheet contents
function clearSheet(name){
    var sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName(name);
    sheet.clear({ formatOnly: false, contentsOnly: true });
}

function clearAllSheets() {
  clearSheet('Sandex');
}

function getSheet(name) {
  return SpreadsheetApp.getActiveSpreadsheet().getSheetByName(name);
}
