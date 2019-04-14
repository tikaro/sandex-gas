// function to add menu item to spreadsheet so that the user can get forecast from Dark Sky
function onOpen() { 
  
  var ss = SpreadsheetApp.getActiveSpreadsheet()
  var entries = [{  
    name: "getForecast", 
    functionName: "getForecast"
  }];

  ss.addMenu("Sandex", entries).addToUi();
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
